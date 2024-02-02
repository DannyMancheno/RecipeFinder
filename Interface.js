// Initial setup. 
$(document).ready(()=>{
    $('.app-option')[2].click();
    // screen.orientation.lock('portriat');
})

// Find Recipes/ Search Fridge/ Shopping List Button UI Change
$('#app-option-buttons-container > button').on('click', (event)=>{

    let value = event.target.value;

    //Update banner buttons
    $('.app-option').removeClass('selected');
    $(event.target).addClass('selected');
    // Update UI doms
    $('.app-screen').css('display', 'none');
    $(`#app-screen-${value}`).css('display', 'grid');
    // Change banner photo
    let imageValue = value.charAt(0).toUpperCase() + value.slice(1);
    let imageSwitchSpeed = 250;
    $('#option-banner').animate({ opacity: 0 }, imageSwitchSpeed)
    setTimeout(()=>{
        $('#option-banner').attr('src', `./IMGs/${imageValue}.png`);
        $('#option-banner').animate({ opacity: 1 }, imageSwitchSpeed)
    }, 200)
})

// Search screen ____________________________________________________________

// Explore Recipes/ Categories - When a user clicks on a 
// one of the hard coded category options to search for recipes.
$('.category-compact-button').on('click', (event)=>{
    let isCompact = event.currentTarget.value;
    let arrayButtons = event.currentTarget.parentNode.querySelector('.category-buttons-array').children;
    if(isCompact == 'false'){
        event.currentTarget.value = 'true';
        for(let i = 0; i < arrayButtons.length; i++){
            $(arrayButtons[i]).css({
                display: 'none'
            })
        }
    }
    else{
        event.currentTarget.value = 'false';
        for(let i = 0; i < arrayButtons.length; i++){
            $(arrayButtons[i]).css({
                display: 'block'
            })
        }
    }
})

// Explore recipes / Categories, expand or contract depending on screen width
let smallMode = 1;
let prevWidth = null;
$(document).ready(()=>{
    // Initially set inner width
    prevWidth = window.innerWidth;
    if(window.innerWidth >= 800){
        compactAll(false)
    }
    else{
        compactAll(true)
    }
})

$(window).resize(()=>{
    if(window.innerWidth > prevWidth){
        // Enlarging screen
        prevWidth = window.innerWidth;
        if(window.innerWidth >= 800 && smallMode){
            // Enlarging while in small mode
            smallMode = 0;
            compactAll(false)
        }
    }
    else{
        // Shrinking screen
        prevWidth = window.innerWidth;
        if(window.innerWidth < 800 && !smallMode){
            // Shrinking while in large mode
            smallMode = 1;
            compactAll(true)
        }
    }
})

function compactAll(compact){
    // If the UI wants to compact all category options in the Explore Recipes screen
    let buttons = $('.category-compact-button');
    for(let i = 0; i < buttons.length; i++){
        if(compact && buttons[i].value == 'false' || !compact && buttons[i].value == 'true'){
            buttons[i].click()
        }
    }
}


$('.search_category').on('click', async (event)=>{
    $('#search-screen-search-recipes').fadeOut(200);

    $('.search_category').removeClass('selected');
    $(event.target).addClass('selected');

    let categoryValue = event.target.value.split('_')[0].charAt(0).toUpperCase() + event.target.value.split('_')[0].slice(1);
    $('#search-bar-input').val(categoryValue);
    // $('#search-screen-search-recipes').html(await submitRecipeQuery(categoryValue, 18, true));
    let result =  await submitRecipeQuery(categoryValue, 18, true);
    if(result[0]){
        $('#search-screen-search-recipes').html(result[1]);
        $('#search-screen-search-recipes').css('display', 'grid');
    }else{
        
        $('#search-screen-search-recipes').css('display', 'flex');
        $('#search-screen-search-recipes').html(result[1]);
    }

    $('#search-screen-search-recipes').fadeIn(200);
})

$('#search-bar-button').on('mouseover', ()=>{
    $('#search-bar-button-image').css('animation', 'search-button-hovered .4s forwards')
})
$('#search-bar-button').on('mouseleave', ()=>{
    $('#search-bar-button-image').css('animation', '')
})

$('#search-bar-form').on('submit', async (event)=>{
    // Remove New Input Styling
    $('#search-bar-form').removeClass('new-input-style');
    $('#search-bar-button-image').removeClass('new-input-style');

    event.preventDefault();
    
    let result =  await submitRecipeQuery($('#search-bar-input').val(), 18, true);
    if(result[0]){
        $('#search-screen-search-recipes').html(result[1]);
        $('#search-screen-search-recipes').css('display', 'grid');
        $('#search-screen-search-recipes').fadeIn(400);
    }else{
        $('#search-screen-search-recipes').html(result[1]);
        $('#search-screen-search-recipes').css('display', 'flex');
    }
});




function randomID(){
    let RC = ()=>{ return String.fromCharCode(Math.floor(Math.random() * 25) + 65) }
    // Return 4 random chars + 6 digits based off Date object.
    return RC() + RC() + RC() + RC() + Math.floor(((Date.now() / 1000000) % 1) * 1000000);        
}

$('#search-bar-input').on('keydown', ()=>{
    // Add New Input Styling
    $('#search-bar-form').addClass('new-input-style');
    $('#search-bar-button-image').addClass('new-input-style');
})
// Fridge screen ____________________________________________________________

$('#tag-bar-input').on('keydown', ()=>{
    // Add new styling
    $('#tag-bar-form').addClass('new-input-style');
    $('#tag-bar-button-image').addClass('new-input-style');
})
$('#tag-bar-form').on('submit', (event)=>{
    event.preventDefault();
    $('#tag-bar-form').removeClass('new-input-style');
    $('#tag-bar-button-image').removeClass('new-input-style');

    let value = $('#tag-bar-input').val();
    if(value){
        $('#tag-bar-input').val(``);
        // fridge.addIngredient(value)   
        // fridge.addIngredient(undefined, value, false, true, false, false);
        fridge.addIngredient(undefined,value, true,false,false);
    }
    updateFridgeIngredientDisplay();
})

function updateFridgeIngredientDisplay(){
    let fridgeListHTML = ``;
    let ingredients = fridge.getIngredients();
    let Cooking = fridge.getIngredients().filter((item)=>{
        if(item.cook && item.available) return true;
        else{
            return false;
        }
    })
    // Fridge elements
    $('#fridge-screen-total').text(`${ingredients.length} ingredients`);
    
    if(!ingredients.length){
        fridgeListHTML =  (
            `<div class='ingredient-list-empty'>
                ${getUISVGSymbol('fridge')}
                <span>Track ingredients inside your fridge here</span>
            </div>`
        )
    }
    else{
        fridgeListHTML = fridge.getIngredients().map((ingredient)=>{
            return (
                `<div class='ingredient-list-item'>
                    <div class='ingredient-list-item-name'>
                        <input type='text' 
                            value='${ingredient.name}' 
                            class='${!ingredient.available ? 'unavailable' : ''}'
                            onFocus='ingredientFocus(this, true)' 
                            onBlur='ingredientFocus(this,false)'
                            onInput="alterIngredientName('${ingredient.id}', this, 'fridge')"
                        >
                    </div>
                    <div class='ingredient-list-item-options'>
                        <div class='fridge-list-item ingredient-list-item-options-main'>
                            <button 
                                onClick="fridgeAction('${ingredient.id}', 'delete')">
                                ${getUISVGSymbol('delete')}
                            </button>
                            <button
                                class='${ingredient.grocery ? 'grocery' : ''} ${ingredient.carted ? 'carted' : ''}'
                                onClick="${(ingredient.carted) ? `fridgeAction('${ingredient.id}', 'carted')` : `fridgeAction('${ingredient.id}', 'grocery')`} ">
                                ${(ingredient.carted) ? getUISVGSymbol('carted') : getUISVGSymbol('grocery')}
                            </button>
                            <button 
                                onClick="fridgeAction('${ingredient.id}', 'available')"
                                class='${!ingredient.available ? 'unavailable' : ''}'>
                                ${getUISVGSymbol('fridge')}
                            </button>
                            <button 
                                onClick="${!ingredient.available ? '' : `fridgeAction('${ingredient.id}', 'cook')`}"
                                class='cook ${!ingredient.available ? 'unavailable' : ''} ${ingredient.cook ? 'cooking': ''}'>
                                ${getUISVGSymbol('cook')}
                            </button>
                        </div>

                        <div class='ingredient-list-item-options-nested' id='delete-option-id-${ingredient.id}'>
                            <button 
                                class='denial' 
                                onClick="fridgeAction('${ingredient.id}', 'deleteConfirm')">
                                ${getUISVGSymbol('delete')}
                            </button>
                            <button 
                                class='cancel' 
                                onClick="fridgeAction('${ingredient.id}', 'deleteCancel')">
                                ${getUISVGSymbol('cancel')}
                            </button>
                        </div>
                    </div>
                </div>`
            )
        })
    }
    $('#fridge-ingredient-container').html(fridgeListHTML);

    // Cooking elements
    let cookingHTML = ``

    if(!Cooking.length){
        cookingHTML = 
        `<div class='cook-no-ingredients'>
            ${getUISVGSymbol('cook')}
            <span>Select ingredients above to explore recipes</span>
        </div>`
    }
    else{
        cookingHTML = Cooking.map(item=>{
            return (
                `<div class='cook-ingredient'>
                    ${item.name}
                </div>`
            )
        })
    }
    
    $('#ingredient-cook-total').text(`${Cooking.length} selected`)
    $('#fridge-cooking-list').html(cookingHTML);
}

function fridgeAction(id, action){
    if(action == 'delete'){
        $(`#delete-option-id-${id}`).css({
            display: 'grid'
        });
        $(`#delete-option-id-${id}`).animate({
            width: '100%'
        }, 200)
    }
    else if(action == 'deleteConfirm' || action == 'deleteCancel'){
        $(`#delete-option-id-${id}`).animate({
            width: '0%'
        }, 200)
        setTimeout(()=>{
            $(`#delete-option-id-${id}`).css({
                display: 'none'
            })
            if(action == 'deleteConfirm'){
                fridge.removeIngredient(id);
                updateFridgeIngredientDisplay();
                updateGroceryListDisplay();
            }
        }, 180)
    }
    else if(action == 'available'){
        fridge.switchAvailable(id);
        updateFridgeIngredientDisplay();
        updateGroceryListDisplay();
    }
    else if(action == 'grocery'){
        fridge.switchGrocery(id);
        updateFridgeIngredientDisplay();
        updateGroceryListDisplay();
    }
    else if(action == 'carted'){
        fridge.switchCarted(id);
        updateFridgeIngredientDisplay();
        updateGroceryListDisplay();
    }
    else if(action == 'cook'){
        fridge.switchCooking(id);
        updateFridgeIngredientDisplay();
    }
}

// Grocery screen ______________________________________________________________
$('#grocery-bar-input').on('keydown', ()=>{
    // Add new styling
    $('#grocery-bar-form').addClass('new-input-style');
    $('#grocery-bar-button-image').addClass('new-input-style');
})
$('#grocery-bar-form').on('submit', event =>{
    // Remove New Input Styling
    $('#grocery-bar-form').removeClass('new-input-style');
    $('#grocery-bar-button-image').removeClass('new-input-style');

    event.preventDefault();
    let value = $('#grocery-bar-input').val();
    if(value){
        
        $('#grocery-bar-input').val(``);
        fridge.addIngredient(undefined, value, false, true, false, false);
    }
    updateGroceryListDisplay();
    updateFridgeIngredientDisplay();
});

function alterIngredientName(id, target, from){
    // When necessary, will update the name on the other side of the grocery screens.
    fridge.renameIngredient(id, target.value);
    if(from == 'grocery'){
        updateFridgeIngredientDisplay();
    }
    else{
        updateGroceryListDisplay();
    }
}

function ingredientFocus(target, focus){
    let container = target.parentNode.parentNode;
    (focus) ? $(container).css('background', 'var(--green_color2)') : $(container).css('background', 'none')
}

$("#fridge-explore-ingredients-button").on('click', async ()=>{
    if(isCookActive){
        $('#fridge-cook-recipe-container').fadeOut(400);
        $('#fridge-explore-ingredients-button').text('Explore Selected ?');
        isCookActive = 0;
        $('#fridge-cooking-recipes-list').html(
            `<div class="no-recipes-searched">
                <img src="IMGs/Logo.svg">
                <p>Explore recipes from your fridge!</p>
            </div>`
        );
        $('#fridge-cooking-recipes-list').css({
            display: 'flex',
            justifyContent: 'space-evenly',
            width: '100%'
        })
        fridge.doneCooking();
        updateFridgeIngredientDisplay();
    }
    else{
        let selected_ingredients = fridge.getIngredients().filter(item=>{
            if(item.cook) return true;
        })
        if(selected_ingredients.length){
            let selected = ''

            selected_ingredients.forEach(item =>{
                selected += `${item.name} `
            })

            let result =  await submitRecipeQuery(selected, 9, true);
            if(result[0]){
                $('#fridge-cooking-recipes-list').html(result[1]);
                $('#fridge-cooking-recipes-list').css('display', 'grid');
                $('#fridge-cooking-recipes-list').fadeIn(400);
            }else{
                
                $('#fridge-cooking-recipes-list').html(result[1]);
                $('#fridge-cooking-recipes-list').css('display', 'flex');
            }
        }
        else{
            $('#fridge-cooking-recipes-list').html(
                `<div class='no-recipes-found'>
                    <div class='no-recipe-found-message'>No recipes found</div>
                    <div class='no-recipe-found-image'>${getUISVGSymbol('cancel')}</div>
                </div>`
            );
        }
        
    }
})


$(document).ready(()=>{
    updateFridgeIngredientDisplay();  
})


// HTML string function
let exploreData = ``;

let dev = false;

if(dev){
    expandExploredData();
}

async function expandExploredData(index){
    // console.log(`expandExploredData()`);
    let recipe = '';
    if(!dev){
        recipe = exploreData[index].recipe;

    }
    else{

        recipe = {
            "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_d61974c0a4d265a9f5c1ed4eb3202e57",
            "label": "Sweet And Sour Asian Meatballs With Vegetables",
            "image": "https://edamam-product-images.s3.amazonaws.com/web-img/873/873665c2d993710e01dd8781a1f2376e.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLWVhc3QtMSJHMEUCIBy5MuhJjsJK%2F6PfJ%2B6EDiOc%2B4KEDWhnjR59Gqyc0CF%2BAiEA%2BCMusEzxmTZXB3JPM8Tn6VIpffKRXVpkMzHqEtpj9f0quQUINxAAGgwxODcwMTcxNTA5ODYiDOLSJDVyidV8Bq334SqWBYNPkxeS0keAFBP9dprXagg7v67hoRNQ6YiXB56ynwNcqqc1yGKsYVPKPu1pTxWixL0UWckMs5I5o1i4wbGRjf7wKjKoDE0p32HxhGCG%2BQV9r8vEa1baOQmgqOupv4snjONHhK98cWnXGjDxKw0zKhYKvwU20uBqb2%2FwAcxEa%2F3nn49%2BCCcABLIV0FS3U5sksmpa1pEx6juS7baW4%2F424XydW3IGF56yQcrAAvzq9%2FaV3VBg2BH3SPZB8Zaz7cCs8NDJSLvo9qgYRrmAm58%2BQDr5hCOzXiKyXgHYHimQYJ86U6nMPfjKH6duwVhTpyy%2FAqFP%2BvNferLR6MlOOFmtIyCgwuQfVEqMiKAbWiyQdl5qzKRKL0LMGQsVJ3%2FqW8orUoPm6dP7hUmX5WENtWPNy1qoi4PkO69KfrfE1vvmJGQmicbe%2BP12R3OvwLWrDHiVL8DVtLbn%2BzCOypxXliZQLM%2F4fMvS%2FjxVZJWndj%2Bv%2Bvfn0BJQ5SvQjLix44eW3hNakRCDEKb%2BknrHCORcBOgW8cg%2B0B9QWflluxtFLBa6GMOBM7I4uTjpCDI3R7iuroogfVJX3vLcxmzZX8ZxsAKYvLyGbAIVPoIq0lxVl8Dze4lB1%2Bc%2FkZ94XsXEk3tmoLCiRqP7bVqzfl%2FF0krk4NGZD9%2BW9kqYQ7h%2Ft%2BZVCLAL0ok97m9%2FJ1K4eYtVbrKzcG%2Fl08E7toU5PqftoavvRfuyFxs6vHxuP39wm%2FilDXxAAMoER%2FUdiimi0ey3v%2F7hNuQ0TjSXMMY8GfTqoxFzUfCuxVw3iHXteSddIMVz3hjAwwf4DRV6GnbFAs7CmWvVcuPBt0uUo7dhc7xFD0MGqgirbBo%2F2rn9U%2BWUD4vVVjm6GD7%2BftC6V8ZCMJOI660GOrEBWRlj2DrTKbptBhNUTSK%2FDwQ3HWHoen0nwTBaYNPPrQjWUTQetZyfClG87nQcO5gZqfdvYv2uCeXmC3bvC%2FryNkXhVYX7cHcpJPSpQYPqG27WnYJWMQitsKB8lJ7U7XGS9IalU6Xh0rpRHhCr8h%2B9gsTfH%2B4Q%2B7K7wseylVZySG6TXHNC9bjALldCLYU1wXpKBErMLwIA6iXtsN6BxJDhcu%2BVyoim%2B7yCiEcQ%2BwLjF0BX&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240131T235547Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPLBJTJB2%2F20240131%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=e47ff451f38ea3d552d9d6530e4b0d58488bdf91fcc9d870ff91ba567ea0c8a9",
            "images": {
                "THUMBNAIL": {
                    "url": "https://edamam-product-images.s3.amazonaws.com/web-img/873/873665c2d993710e01dd8781a1f2376e-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLWVhc3QtMSJHMEUCIBy5MuhJjsJK%2F6PfJ%2B6EDiOc%2B4KEDWhnjR59Gqyc0CF%2BAiEA%2BCMusEzxmTZXB3JPM8Tn6VIpffKRXVpkMzHqEtpj9f0quQUINxAAGgwxODcwMTcxNTA5ODYiDOLSJDVyidV8Bq334SqWBYNPkxeS0keAFBP9dprXagg7v67hoRNQ6YiXB56ynwNcqqc1yGKsYVPKPu1pTxWixL0UWckMs5I5o1i4wbGRjf7wKjKoDE0p32HxhGCG%2BQV9r8vEa1baOQmgqOupv4snjONHhK98cWnXGjDxKw0zKhYKvwU20uBqb2%2FwAcxEa%2F3nn49%2BCCcABLIV0FS3U5sksmpa1pEx6juS7baW4%2F424XydW3IGF56yQcrAAvzq9%2FaV3VBg2BH3SPZB8Zaz7cCs8NDJSLvo9qgYRrmAm58%2BQDr5hCOzXiKyXgHYHimQYJ86U6nMPfjKH6duwVhTpyy%2FAqFP%2BvNferLR6MlOOFmtIyCgwuQfVEqMiKAbWiyQdl5qzKRKL0LMGQsVJ3%2FqW8orUoPm6dP7hUmX5WENtWPNy1qoi4PkO69KfrfE1vvmJGQmicbe%2BP12R3OvwLWrDHiVL8DVtLbn%2BzCOypxXliZQLM%2F4fMvS%2FjxVZJWndj%2Bv%2Bvfn0BJQ5SvQjLix44eW3hNakRCDEKb%2BknrHCORcBOgW8cg%2B0B9QWflluxtFLBa6GMOBM7I4uTjpCDI3R7iuroogfVJX3vLcxmzZX8ZxsAKYvLyGbAIVPoIq0lxVl8Dze4lB1%2Bc%2FkZ94XsXEk3tmoLCiRqP7bVqzfl%2FF0krk4NGZD9%2BW9kqYQ7h%2Ft%2BZVCLAL0ok97m9%2FJ1K4eYtVbrKzcG%2Fl08E7toU5PqftoavvRfuyFxs6vHxuP39wm%2FilDXxAAMoER%2FUdiimi0ey3v%2F7hNuQ0TjSXMMY8GfTqoxFzUfCuxVw3iHXteSddIMVz3hjAwwf4DRV6GnbFAs7CmWvVcuPBt0uUo7dhc7xFD0MGqgirbBo%2F2rn9U%2BWUD4vVVjm6GD7%2BftC6V8ZCMJOI660GOrEBWRlj2DrTKbptBhNUTSK%2FDwQ3HWHoen0nwTBaYNPPrQjWUTQetZyfClG87nQcO5gZqfdvYv2uCeXmC3bvC%2FryNkXhVYX7cHcpJPSpQYPqG27WnYJWMQitsKB8lJ7U7XGS9IalU6Xh0rpRHhCr8h%2B9gsTfH%2B4Q%2B7K7wseylVZySG6TXHNC9bjALldCLYU1wXpKBErMLwIA6iXtsN6BxJDhcu%2BVyoim%2B7yCiEcQ%2BwLjF0BX&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240131T235547Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPLBJTJB2%2F20240131%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=63c72f9d01289db1fa6ddc0ae17b60a78e25271e09b02da7801fc8a08d27c884",
                    "width": 100,
                    "height": 100
                },
                "SMALL": {
                    "url": "https://edamam-product-images.s3.amazonaws.com/web-img/873/873665c2d993710e01dd8781a1f2376e-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLWVhc3QtMSJHMEUCIBy5MuhJjsJK%2F6PfJ%2B6EDiOc%2B4KEDWhnjR59Gqyc0CF%2BAiEA%2BCMusEzxmTZXB3JPM8Tn6VIpffKRXVpkMzHqEtpj9f0quQUINxAAGgwxODcwMTcxNTA5ODYiDOLSJDVyidV8Bq334SqWBYNPkxeS0keAFBP9dprXagg7v67hoRNQ6YiXB56ynwNcqqc1yGKsYVPKPu1pTxWixL0UWckMs5I5o1i4wbGRjf7wKjKoDE0p32HxhGCG%2BQV9r8vEa1baOQmgqOupv4snjONHhK98cWnXGjDxKw0zKhYKvwU20uBqb2%2FwAcxEa%2F3nn49%2BCCcABLIV0FS3U5sksmpa1pEx6juS7baW4%2F424XydW3IGF56yQcrAAvzq9%2FaV3VBg2BH3SPZB8Zaz7cCs8NDJSLvo9qgYRrmAm58%2BQDr5hCOzXiKyXgHYHimQYJ86U6nMPfjKH6duwVhTpyy%2FAqFP%2BvNferLR6MlOOFmtIyCgwuQfVEqMiKAbWiyQdl5qzKRKL0LMGQsVJ3%2FqW8orUoPm6dP7hUmX5WENtWPNy1qoi4PkO69KfrfE1vvmJGQmicbe%2BP12R3OvwLWrDHiVL8DVtLbn%2BzCOypxXliZQLM%2F4fMvS%2FjxVZJWndj%2Bv%2Bvfn0BJQ5SvQjLix44eW3hNakRCDEKb%2BknrHCORcBOgW8cg%2B0B9QWflluxtFLBa6GMOBM7I4uTjpCDI3R7iuroogfVJX3vLcxmzZX8ZxsAKYvLyGbAIVPoIq0lxVl8Dze4lB1%2Bc%2FkZ94XsXEk3tmoLCiRqP7bVqzfl%2FF0krk4NGZD9%2BW9kqYQ7h%2Ft%2BZVCLAL0ok97m9%2FJ1K4eYtVbrKzcG%2Fl08E7toU5PqftoavvRfuyFxs6vHxuP39wm%2FilDXxAAMoER%2FUdiimi0ey3v%2F7hNuQ0TjSXMMY8GfTqoxFzUfCuxVw3iHXteSddIMVz3hjAwwf4DRV6GnbFAs7CmWvVcuPBt0uUo7dhc7xFD0MGqgirbBo%2F2rn9U%2BWUD4vVVjm6GD7%2BftC6V8ZCMJOI660GOrEBWRlj2DrTKbptBhNUTSK%2FDwQ3HWHoen0nwTBaYNPPrQjWUTQetZyfClG87nQcO5gZqfdvYv2uCeXmC3bvC%2FryNkXhVYX7cHcpJPSpQYPqG27WnYJWMQitsKB8lJ7U7XGS9IalU6Xh0rpRHhCr8h%2B9gsTfH%2B4Q%2B7K7wseylVZySG6TXHNC9bjALldCLYU1wXpKBErMLwIA6iXtsN6BxJDhcu%2BVyoim%2B7yCiEcQ%2BwLjF0BX&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240131T235547Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPLBJTJB2%2F20240131%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=fda4bd02b7191375645b8a4f0f5dc2179ce312e8e36e04b842b803939bb61308",
                    "width": 200,
                    "height": 200
                },
                "REGULAR": {
                    "url": "https://edamam-product-images.s3.amazonaws.com/web-img/873/873665c2d993710e01dd8781a1f2376e.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLWVhc3QtMSJHMEUCIBy5MuhJjsJK%2F6PfJ%2B6EDiOc%2B4KEDWhnjR59Gqyc0CF%2BAiEA%2BCMusEzxmTZXB3JPM8Tn6VIpffKRXVpkMzHqEtpj9f0quQUINxAAGgwxODcwMTcxNTA5ODYiDOLSJDVyidV8Bq334SqWBYNPkxeS0keAFBP9dprXagg7v67hoRNQ6YiXB56ynwNcqqc1yGKsYVPKPu1pTxWixL0UWckMs5I5o1i4wbGRjf7wKjKoDE0p32HxhGCG%2BQV9r8vEa1baOQmgqOupv4snjONHhK98cWnXGjDxKw0zKhYKvwU20uBqb2%2FwAcxEa%2F3nn49%2BCCcABLIV0FS3U5sksmpa1pEx6juS7baW4%2F424XydW3IGF56yQcrAAvzq9%2FaV3VBg2BH3SPZB8Zaz7cCs8NDJSLvo9qgYRrmAm58%2BQDr5hCOzXiKyXgHYHimQYJ86U6nMPfjKH6duwVhTpyy%2FAqFP%2BvNferLR6MlOOFmtIyCgwuQfVEqMiKAbWiyQdl5qzKRKL0LMGQsVJ3%2FqW8orUoPm6dP7hUmX5WENtWPNy1qoi4PkO69KfrfE1vvmJGQmicbe%2BP12R3OvwLWrDHiVL8DVtLbn%2BzCOypxXliZQLM%2F4fMvS%2FjxVZJWndj%2Bv%2Bvfn0BJQ5SvQjLix44eW3hNakRCDEKb%2BknrHCORcBOgW8cg%2B0B9QWflluxtFLBa6GMOBM7I4uTjpCDI3R7iuroogfVJX3vLcxmzZX8ZxsAKYvLyGbAIVPoIq0lxVl8Dze4lB1%2Bc%2FkZ94XsXEk3tmoLCiRqP7bVqzfl%2FF0krk4NGZD9%2BW9kqYQ7h%2Ft%2BZVCLAL0ok97m9%2FJ1K4eYtVbrKzcG%2Fl08E7toU5PqftoavvRfuyFxs6vHxuP39wm%2FilDXxAAMoER%2FUdiimi0ey3v%2F7hNuQ0TjSXMMY8GfTqoxFzUfCuxVw3iHXteSddIMVz3hjAwwf4DRV6GnbFAs7CmWvVcuPBt0uUo7dhc7xFD0MGqgirbBo%2F2rn9U%2BWUD4vVVjm6GD7%2BftC6V8ZCMJOI660GOrEBWRlj2DrTKbptBhNUTSK%2FDwQ3HWHoen0nwTBaYNPPrQjWUTQetZyfClG87nQcO5gZqfdvYv2uCeXmC3bvC%2FryNkXhVYX7cHcpJPSpQYPqG27WnYJWMQitsKB8lJ7U7XGS9IalU6Xh0rpRHhCr8h%2B9gsTfH%2B4Q%2B7K7wseylVZySG6TXHNC9bjALldCLYU1wXpKBErMLwIA6iXtsN6BxJDhcu%2BVyoim%2B7yCiEcQ%2BwLjF0BX&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240131T235547Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPLBJTJB2%2F20240131%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=e47ff451f38ea3d552d9d6530e4b0d58488bdf91fcc9d870ff91ba567ea0c8a9",
                    "width": 300,
                    "height": 300
                },
                "LARGE": {
                    "url": "https://edamam-product-images.s3.amazonaws.com/web-img/873/873665c2d993710e01dd8781a1f2376e-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLWVhc3QtMSJHMEUCIBy5MuhJjsJK%2F6PfJ%2B6EDiOc%2B4KEDWhnjR59Gqyc0CF%2BAiEA%2BCMusEzxmTZXB3JPM8Tn6VIpffKRXVpkMzHqEtpj9f0quQUINxAAGgwxODcwMTcxNTA5ODYiDOLSJDVyidV8Bq334SqWBYNPkxeS0keAFBP9dprXagg7v67hoRNQ6YiXB56ynwNcqqc1yGKsYVPKPu1pTxWixL0UWckMs5I5o1i4wbGRjf7wKjKoDE0p32HxhGCG%2BQV9r8vEa1baOQmgqOupv4snjONHhK98cWnXGjDxKw0zKhYKvwU20uBqb2%2FwAcxEa%2F3nn49%2BCCcABLIV0FS3U5sksmpa1pEx6juS7baW4%2F424XydW3IGF56yQcrAAvzq9%2FaV3VBg2BH3SPZB8Zaz7cCs8NDJSLvo9qgYRrmAm58%2BQDr5hCOzXiKyXgHYHimQYJ86U6nMPfjKH6duwVhTpyy%2FAqFP%2BvNferLR6MlOOFmtIyCgwuQfVEqMiKAbWiyQdl5qzKRKL0LMGQsVJ3%2FqW8orUoPm6dP7hUmX5WENtWPNy1qoi4PkO69KfrfE1vvmJGQmicbe%2BP12R3OvwLWrDHiVL8DVtLbn%2BzCOypxXliZQLM%2F4fMvS%2FjxVZJWndj%2Bv%2Bvfn0BJQ5SvQjLix44eW3hNakRCDEKb%2BknrHCORcBOgW8cg%2B0B9QWflluxtFLBa6GMOBM7I4uTjpCDI3R7iuroogfVJX3vLcxmzZX8ZxsAKYvLyGbAIVPoIq0lxVl8Dze4lB1%2Bc%2FkZ94XsXEk3tmoLCiRqP7bVqzfl%2FF0krk4NGZD9%2BW9kqYQ7h%2Ft%2BZVCLAL0ok97m9%2FJ1K4eYtVbrKzcG%2Fl08E7toU5PqftoavvRfuyFxs6vHxuP39wm%2FilDXxAAMoER%2FUdiimi0ey3v%2F7hNuQ0TjSXMMY8GfTqoxFzUfCuxVw3iHXteSddIMVz3hjAwwf4DRV6GnbFAs7CmWvVcuPBt0uUo7dhc7xFD0MGqgirbBo%2F2rn9U%2BWUD4vVVjm6GD7%2BftC6V8ZCMJOI660GOrEBWRlj2DrTKbptBhNUTSK%2FDwQ3HWHoen0nwTBaYNPPrQjWUTQetZyfClG87nQcO5gZqfdvYv2uCeXmC3bvC%2FryNkXhVYX7cHcpJPSpQYPqG27WnYJWMQitsKB8lJ7U7XGS9IalU6Xh0rpRHhCr8h%2B9gsTfH%2B4Q%2B7K7wseylVZySG6TXHNC9bjALldCLYU1wXpKBErMLwIA6iXtsN6BxJDhcu%2BVyoim%2B7yCiEcQ%2BwLjF0BX&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240131T235547Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPLBJTJB2%2F20240131%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=4572999f080c20ce9f19ed9b9d67a7c589ff4e7cdae54ef19d8414c051841387",
                    "width": 600,
                    "height": 600
                }
            },
            "source": "goodlifeeats.com",
            "url": "http://www.goodlifeeats.com/2012/02/sweet-and-sour-asian-meatballs-with-vegetables.html",
            "shareAs": "http://www.edamam.com/recipe/sweet-and-sour-asian-meatballs-with-vegetables-d61974c0a4d265a9f5c1ed4eb3202e57/apples/0-2000-cal",
            "yield": 4,
            "dietLabels": [
                "Balanced"
            ],
            "healthLabels": [
                "Peanut-Free",
                "Tree-Nut-Free",
                "Fish-Free",
                "Shellfish-Free",
                "Pork-Free",
                "Crustacean-Free",
                "Celery-Free",
                "Mustard-Free",
                "Lupine-Free",
                "Mollusk-Free",
                "Alcohol-Free"
            ],
            "cautions": [
                "Gluten",
                "Wheat",
                "Sulfites",
                "FODMAP"
            ],
            "ingredientLines": [
                "1.25 lbs lean ground beef, preferably organic",
                "1 tablespoon milk",
                "1 egg, lightly beaten",
                "1 tablespoon soy sauce",
                "1 tablespoon honey",
                "3/4 teaspoon sesame oil",
                "2 - 3 drops 100% pure ginger oil (or 1 tablespoon fresh minced ginger)",
                "3/4 - 1 teaspoon salt",
                "1/4 - 1/2 teaspoon pepper",
                "1/2 teaspoon Chinese 5 Spice Powder",
                "2 cloves garlic, finely minced",
                "1 medium carrot, very finely chopped",
                "2 ounces button or shiitake mushrooms, very finely chopped",
                "2 tablespoons chopped fresh cilantro",
                "1 tablespoon chopped fresh parsley",
                "3 green onions, thinly sliced",
                "3/4 cup panko breadcrumbs",
                "1/2 cup pineapple juice",
                "1/2 cup ketchup",
                "3 tablespoons hoisin sauce",
                "1/2 cup apple cider vinegar",
                "1 - 2 drops 100% pure ginger oil (or 1 - 2 teaspoons fresh minced ginger)",
                "2 - 3 tablespoons brown sugar (adjust for your sweetness preference)",
                "3 tablespoons honey",
                "2 teaspoons cornstarch",
                "1 red bell pepper, chopped into 3/4 inch squares",
                "1 - 8 ounce can sliced water chestnuts",
                "4 - 6 ounces snow peas or sugar snap peas",
                "brown jasmine rice, for serving",
                "sesame seeds for garnish"
            ],
            "ingredients": [
                {
                    "text": "1.25 lbs lean ground beef, preferably organic",
                    "quantity": 1.25,
                    "measure": "pound",
                    "food": "ground beef",
                    "weight": 566.9904625,
                    "foodCategory": "meats",
                    "foodId": "food_boq91pbbhklr6sb0d9sbybzgklkm",
                    "image": "https://www.edamam.com/food-img/cfa/cfae8f9276eaf8f0d9349ba662744a0c.jpg"
                },
                {
                    "text": "1 tablespoon milk",
                    "quantity": 1,
                    "measure": "tablespoon",
                    "food": "milk",
                    "weight": 15,
                    "foodCategory": "Milk",
                    "foodId": "food_b49rs1kaw0jktabzkg2vvanvvsis",
                    "image": "https://www.edamam.com/food-img/7c9/7c9962acf83654a8d98ea6a2ade93735.jpg"
                },
                {
                    "text": "1 egg, lightly beaten",
                    "quantity": 1,
                    "measure": "<unit>",
                    "food": "egg",
                    "weight": 43,
                    "foodCategory": "Eggs",
                    "foodId": "food_bhpradua77pk16aipcvzeayg732r",
                    "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
                },
                {
                    "text": "1 tablespoon soy sauce",
                    "quantity": 1,
                    "measure": "tablespoon",
                    "food": "soy sauce",
                    "weight": 16,
                    "foodCategory": "plant-based protein",
                    "foodId": "food_a5g9yevb1iactoaiimbvjbkrxueh",
                    "image": "https://www.edamam.com/food-img/f56/f562e461eb0618f367f538b836c17b82.jpg"
                },
                {
                    "text": "1 tablespoon honey",
                    "quantity": 1,
                    "measure": "tablespoon",
                    "food": "honey",
                    "weight": 21,
                    "foodCategory": "sugar syrups",
                    "foodId": "food_b1cj2pmac27zngan87974b0a40hk",
                    "image": "https://www.edamam.com/food-img/198/198c7b25c23b4235b4cc33818c7b335f.jpg"
                },
                {
                    "text": "3/4 teaspoon sesame oil",
                    "quantity": 0.75,
                    "measure": "teaspoon",
                    "food": "sesame oil",
                    "weight": 3.375,
                    "foodCategory": "Oils",
                    "foodId": "food_b2id9opa0l5afvbw2do5xa1fnz4q",
                    "image": "https://www.edamam.com/food-img/b87/b874ddcfb6770adc7a155355a902ffb8.jpg"
                },
                {
                    "text": "2 - 3 drops 100% pure ginger oil (or 1 tablespoon fresh minced ginger)",
                    "quantity": 2.5,
                    "measure": "drop",
                    "food": "oil",
                    "weight": 0.14192708351330055,
                    "foodCategory": "Oils",
                    "foodId": "food_bk9p9aaavhvoq4bqsnprobpsiuxs",
                    "image": "https://www.edamam.com/food-img/07e/07e106ab3536d57428e5c46d009038f8.jpg"
                },
                {
                    "text": "3/4 - 1 teaspoon salt",
                    "quantity": 0.875,
                    "measure": "teaspoon",
                    "food": "salt",
                    "weight": 5.25,
                    "foodCategory": "Condiments and sauces",
                    "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
                    "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
                },
                {
                    "text": "1/4 - 1/2 teaspoon pepper",
                    "quantity": 0.375,
                    "measure": "teaspoon",
                    "food": "pepper",
                    "weight": 1.0875,
                    "foodCategory": "Condiments and sauces",
                    "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
                    "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
                },
                {
                    "text": "2 cloves garlic, finely minced",
                    "quantity": 2,
                    "measure": "clove",
                    "food": "garlic",
                    "weight": 6,
                    "foodCategory": "vegetables",
                    "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
                    "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
                },
                {
                    "text": "1 medium carrot, very finely chopped",
                    "quantity": 1,
                    "measure": "<unit>",
                    "food": "carrot",
                    "weight": 61,
                    "foodCategory": "vegetables",
                    "foodId": "food_ai215e5b85pdh5ajd4aafa3w2zm8",
                    "image": "https://www.edamam.com/food-img/121/121e33fce0bb9546ed7d060b6c114e29.jpg"
                },
                {
                    "text": "2 ounces button or shiitake mushrooms, very finely chopped",
                    "quantity": 2,
                    "measure": "ounce",
                    "food": "shiitake mushrooms",
                    "weight": 56.69904625,
                    "foodCategory": "vegetables",
                    "foodId": "food_aq85j07b3arnn3bjy9gribye1mpm",
                    "image": "https://www.edamam.com/food-img/e1e/e1e021cc92b36fa5d19571c2a331d53b.jpg"
                },
                {
                    "text": "2 tablespoons chopped fresh cilantro",
                    "quantity": 2,
                    "measure": "tablespoon",
                    "food": "cilantro",
                    "weight": 1.999999999966186,
                    "foodCategory": "vegetables",
                    "foodId": "food_alhzhuwb4lc7jnb5s6f02by60bzp",
                    "image": "https://www.edamam.com/food-img/d57/d57e375b6ff99a90c7ee2b1990a1af36.jpg"
                },
                {
                    "text": "1 tablespoon chopped fresh parsley",
                    "quantity": 1,
                    "measure": "tablespoon",
                    "food": "parsley",
                    "weight": 3.8,
                    "foodCategory": "vegetables",
                    "foodId": "food_b244pqdazw24zobr5vqu2bf0uid8",
                    "image": "https://www.edamam.com/food-img/46a/46a132e96626d7989b4d6ed8c91f4da0.jpg"
                },
                {
                    "text": "3 green onions, thinly sliced",
                    "quantity": 3,
                    "measure": "<unit>",
                    "food": "green onions",
                    "weight": 41.66666666666667,
                    "foodCategory": "vegetables",
                    "foodId": "food_bknlkyzbuzo27pb11whr4bttkuy6",
                    "image": "https://www.edamam.com/food-img/b89/b89986ed6aa466285bdd99bac34b3c46.jpg"
                },
                {
                    "text": "3/4 cup panko breadcrumbs",
                    "quantity": 0.75,
                    "measure": "cup",
                    "food": "panko breadcrumbs",
                    "weight": 45,
                    "foodCategory": "grains",
                    "foodId": "food_a9tnk2lbj0xkckbytqnx1ajhpqbp",
                    "image": null
                },
                {
                    "text": "1/2 cup pineapple juice",
                    "quantity": 0.5,
                    "measure": "cup",
                    "food": "pineapple juice",
                    "weight": 125,
                    "foodCategory": "canned fruit",
                    "foodId": "food_aw209cyaxr711ib8aek6ca50xm6o",
                    "image": "https://www.edamam.com/food-img/3b1/3b1c6c2485df8447bf272af3fa289204.jpg"
                },
                {
                    "text": "1/2 cup ketchup",
                    "quantity": 0.5,
                    "measure": "cup",
                    "food": "ketchup",
                    "weight": 120,
                    "foodCategory": "condiments and sauces",
                    "foodId": "food_au7jthtab0n3era9uue8pauakroe",
                    "image": "https://www.edamam.com/food-img/257/257207c446011b849001ae596390341c.jpeg"
                },
                {
                    "text": "3 tablespoons hoisin sauce",
                    "quantity": 3,
                    "measure": "tablespoon",
                    "food": "hoisin sauce",
                    "weight": 48,
                    "foodCategory": "canned soup",
                    "foodId": "food_a50yq9jao6jvt5a4oxygsbmfbeuy",
                    "image": "https://www.edamam.com/food-img/c52/c529c507459e9133ad8689cec193f713.jpg"
                },
                {
                    "text": "1/2 cup apple cider vinegar",
                    "quantity": 0.5,
                    "measure": "cup",
                    "food": "apple cider vinegar",
                    "weight": 119.5,
                    "foodCategory": "Condiments and sauces",
                    "foodId": "food_ar8m7esapmfvf8bnhfzdlabndh6v",
                    "image": "https://www.edamam.com/food-img/c7d/c7dbd1846c5d08e9739930d70a404d50.jpg"
                },
                {
                    "text": "1 - 2 drops 100% pure ginger oil (or 1 - 2 teaspoons fresh minced ginger)",
                    "quantity": 1.5,
                    "measure": "drop",
                    "food": "oil",
                    "weight": 0.08515625010798034,
                    "foodCategory": "Oils",
                    "foodId": "food_bk9p9aaavhvoq4bqsnprobpsiuxs",
                    "image": "https://www.edamam.com/food-img/07e/07e106ab3536d57428e5c46d009038f8.jpg"
                },
                {
                    "text": "2 - 3 tablespoons brown sugar (adjust for your sweetness preference)",
                    "quantity": 2.5,
                    "measure": "tablespoon",
                    "food": "brown sugar",
                    "weight": 22.65624999961695,
                    "foodCategory": "sugars",
                    "foodId": "food_aodgtqwbmeu5f6bxeffn0art3bga",
                    "image": "https://www.edamam.com/food-img/8c6/8c6662bd73900645c6385b51a95d9b03.jpg"
                },
                {
                    "text": "3 tablespoons honey",
                    "quantity": 3,
                    "measure": "tablespoon",
                    "food": "honey",
                    "weight": 63,
                    "foodCategory": "sugar syrups",
                    "foodId": "food_b1cj2pmac27zngan87974b0a40hk",
                    "image": "https://www.edamam.com/food-img/198/198c7b25c23b4235b4cc33818c7b335f.jpg"
                },
                {
                    "text": "2 teaspoons cornstarch",
                    "quantity": 2,
                    "measure": "teaspoon",
                    "food": "cornstarch",
                    "weight": 5.33333333360384,
                    "foodCategory": "grains",
                    "foodId": "food_a6r17hrba37cqeabesko5a2gk233",
                    "image": "https://www.edamam.com/food-img/f9b/f9b74d9495b40c0aea955c37a1fc39dc.jpg"
                },
                {
                    "text": "1 red bell pepper, chopped into 3/4 inch squares",
                    "quantity": 1,
                    "measure": "<unit>",
                    "food": "red bell pepper",
                    "weight": 119,
                    "foodCategory": "vegetables",
                    "foodId": "food_a8g63g7ak6bnmvbu7agxibp4a0dy",
                    "image": "https://www.edamam.com/food-img/4dc/4dc48b1a506d334b4ab6671b9d56a18f.jpeg"
                },
                {
                    "text": "1 - 8 ounce can sliced water chestnuts",
                    "quantity": 4.5,
                    "measure": "ounce",
                    "food": "water chestnuts",
                    "weight": 127.5728540625,
                    "foodCategory": "canned vegetables",
                    "foodId": "food_az1fzqwbd7iswra7m8q5ibve5sgo",
                    "image": "https://www.edamam.com/food-img/1e0/1e083f4dadc423acae58260fb45c099e.jpg"
                },
                {
                    "text": "4 - 6 ounces snow peas or sugar snap peas",
                    "quantity": 5,
                    "measure": "ounce",
                    "food": "snow peas",
                    "weight": 141.747615625,
                    "foodCategory": "vegetables",
                    "foodId": "food_axypy6pakiktpcb6151czakqj1sd",
                    "image": "https://www.edamam.com/food-img/d69/d6979db01580bcc6b32ad9a83cb5148c.jpg"
                },
                {
                    "text": "brown jasmine rice, for serving",
                    "quantity": 1,
                    "measure": "serving",
                    "food": "jasmine",
                    "weight": 3,
                    "foodCategory": "coffee and tea",
                    "foodId": "food_agkg8s8azmag8hbg9kxroaei37uf",
                    "image": "https://www.edamam.com/food-img/a5b/a5b3118bf900cc49ede19db7aa1869c7.jpg"
                },
                {
                    "text": "sesame seeds for garnish",
                    "quantity": 0,
                    "measure": null,
                    "food": "sesame seeds",
                    "weight": 0,
                    "foodCategory": "plant-based protein",
                    "foodId": "food_bvxfnx8bwz2q3abs04kd6bbuf9w8",
                    "image": "https://www.edamam.com/food-img/291/291b355a7a0948716243164427697279.jpg"
                }
            ],
            "calories": 2613.946001070863,
            "totalCO2Emissions": 58211.87363067904,
            "co2EmissionsClass": "G",
            "totalWeight": 1779.6814812764596,
            "totalTime": 0,
            "cuisineType": [
                "chinese",
                "asian"
            ],
            "mealType": [
                "lunch/dinner"
            ],
            "dishType": [
                "main course"
            ],
            "totalNutrients": {
                "ENERC_KCAL": {
                    "label": "Energy",
                    "quantity": 2613.946001070863,
                    "unit": "kcal"
                },
                "FAT": {
                    "label": "Fat",
                    "quantity": 126.33434593726707,
                    "unit": "g"
                },
                "FASAT": {
                    "label": "Saturated",
                    "quantity": 45.614909200931635,
                    "unit": "g"
                },
                "FATRN": {
                    "label": "Trans",
                    "quantity": 6.707724436667803,
                    "unit": "g"
                },
                "FAMS": {
                    "label": "Monounsaturated",
                    "quantity": 53.95392736758743,
                    "unit": "g"
                },
                "FAPU": {
                    "label": "Polyunsaturated",
                    "quantity": 6.706341963001801,
                    "unit": "g"
                },
                "CHOCDF": {
                    "label": "Carbs",
                    "quantity": 250.23690918628662,
                    "unit": "g"
                },
                "CHOCDF.net": {
                    "label": "Carbohydrates (net)",
                    "quantity": 232.3338028388893,
                    "unit": "g"
                },
                "FIBTG": {
                    "label": "Fiber",
                    "quantity": 17.903106347397323,
                    "unit": "g"
                },
                "SUGAR": {
                    "label": "Sugars",
                    "quantity": 164.11268996864897,
                    "unit": "g"
                },
                "SUGAR.added": {
                    "label": "Sugars, added",
                    "quantity": 90.94056249962844,
                    "unit": "g"
                },
                "PROCNT": {
                    "label": "Protein",
                    "quantity": 122.08980670591622,
                    "unit": "g"
                },
                "CHOLE": {
                    "label": "Cholesterol",
                    "quantity": 565.4632283750001,
                    "unit": "mg"
                },
                "NA": {
                    "label": "Sodium",
                    "quantity": 4133.903037157168,
                    "unit": "mg"
                },
                "CA": {
                    "label": "Calcium",
                    "quantity": 464.7457929038978,
                    "unit": "mg"
                },
                "MG": {
                    "label": "Magnesium",
                    "quantity": 254.36353585647805,
                    "unit": "mg"
                },
                "K": {
                    "label": "Potassium",
                    "quantity": 3635.7561644535112,
                    "unit": "mg"
                },
                "FE": {
                    "label": "Iron",
                    "quantity": 20.64338896516814,
                    "unit": "mg"
                },
                "ZN": {
                    "label": "Zinc",
                    "quantity": 27.38162071100536,
                    "unit": "mg"
                },
                "P": {
                    "label": "Phosphorus",
                    "quantity": 1338.7414411031284,
                    "unit": "mg"
                },
                "VITA_RAE": {
                    "label": "Vitamin A",
                    "quantity": 946.1682892707195,
                    "unit": "µg"
                },
                "VITC": {
                    "label": "Vitamin C",
                    "quantity": 275.9573498111367,
                    "unit": "mg"
                },
                "THIA": {
                    "label": "Thiamin (B1)",
                    "quantity": 0.741484359863519,
                    "unit": "mg"
                },
                "RIBF": {
                    "label": "Riboflavin (B2)",
                    "quantity": 1.918502939545779,
                    "unit": "mg"
                },
                "NIA": {
                    "label": "Niacin (B3)",
                    "quantity": 32.65364690162421,
                    "unit": "mg"
                },
                "VITB6A": {
                    "label": "Vitamin B6",
                    "quantity": 3.442984776513334,
                    "unit": "mg"
                },
                "FOLDFE": {
                    "label": "Folate equivalent (total)",
                    "quantity": 284.10268236039184,
                    "unit": "µg"
                },
                "FOLFD": {
                    "label": "Folate (food)",
                    "quantity": 284.10268236039184,
                    "unit": "µg"
                },
                "FOLAC": {
                    "label": "Folic acid",
                    "quantity": 0,
                    "unit": "µg"
                },
                "VITB12": {
                    "label": "Vitamin B12",
                    "quantity": 12.583795897500002,
                    "unit": "µg"
                },
                "VITD": {
                    "label": "Vitamin D",
                    "quantity": 1.8487866474999999,
                    "unit": "µg"
                },
                "TOCPHA": {
                    "label": "Vitamin E",
                    "quantity": 7.221530007549545,
                    "unit": "mg"
                },
                "VITK1": {
                    "label": "Vitamin K",
                    "quantity": 221.44628835614216,
                    "unit": "µg"
                },
                "WATER": {
                    "label": "Water",
                    "quantity": 1246.8752995633722,
                    "unit": "g"
                }
            },
            "totalDaily": {
                "ENERC_KCAL": {
                    "label": "Energy",
                    "quantity": 130.69730005354316,
                    "unit": "%"
                },
                "FAT": {
                    "label": "Fat",
                    "quantity": 194.36053221118013,
                    "unit": "%"
                },
                "FASAT": {
                    "label": "Saturated",
                    "quantity": 228.07454600465817,
                    "unit": "%"
                },
                "CHOCDF": {
                    "label": "Carbs",
                    "quantity": 83.41230306209553,
                    "unit": "%"
                },
                "FIBTG": {
                    "label": "Fiber",
                    "quantity": 71.61242538958929,
                    "unit": "%"
                },
                "PROCNT": {
                    "label": "Protein",
                    "quantity": 244.17961341183243,
                    "unit": "%"
                },
                "CHOLE": {
                    "label": "Cholesterol",
                    "quantity": 188.4877427916667,
                    "unit": "%"
                },
                "NA": {
                    "label": "Sodium",
                    "quantity": 172.24595988154869,
                    "unit": "%"
                },
                "CA": {
                    "label": "Calcium",
                    "quantity": 46.47457929038978,
                    "unit": "%"
                },
                "MG": {
                    "label": "Magnesium",
                    "quantity": 60.56274663249477,
                    "unit": "%"
                },
                "K": {
                    "label": "Potassium",
                    "quantity": 77.35651413730875,
                    "unit": "%"
                },
                "FE": {
                    "label": "Iron",
                    "quantity": 114.6854942509341,
                    "unit": "%"
                },
                "ZN": {
                    "label": "Zinc",
                    "quantity": 248.9238246455033,
                    "unit": "%"
                },
                "P": {
                    "label": "Phosphorus",
                    "quantity": 191.2487773004469,
                    "unit": "%"
                },
                "VITA_RAE": {
                    "label": "Vitamin A",
                    "quantity": 105.12980991896882,
                    "unit": "%"
                },
                "VITC": {
                    "label": "Vitamin C",
                    "quantity": 306.6192775679296,
                    "unit": "%"
                },
                "THIA": {
                    "label": "Thiamin (B1)",
                    "quantity": 61.790363321959916,
                    "unit": "%"
                },
                "RIBF": {
                    "label": "Riboflavin (B2)",
                    "quantity": 147.57714919582918,
                    "unit": "%"
                },
                "NIA": {
                    "label": "Niacin (B3)",
                    "quantity": 204.0852931351513,
                    "unit": "%"
                },
                "VITB6A": {
                    "label": "Vitamin B6",
                    "quantity": 264.844982808718,
                    "unit": "%"
                },
                "FOLDFE": {
                    "label": "Folate equivalent (total)",
                    "quantity": 71.02567059009796,
                    "unit": "%"
                },
                "VITB12": {
                    "label": "Vitamin B12",
                    "quantity": 524.3248290625,
                    "unit": "%"
                },
                "VITD": {
                    "label": "Vitamin D",
                    "quantity": 12.325244316666666,
                    "unit": "%"
                },
                "TOCPHA": {
                    "label": "Vitamin E",
                    "quantity": 48.14353338366364,
                    "unit": "%"
                },
                "VITK1": {
                    "label": "Vitamin K",
                    "quantity": 184.5385736301185,
                    "unit": "%"
                }
            },
            "digest": [
                {
                    "label": "Fat",
                    "tag": "FAT",
                    "schemaOrgTag": "fatContent",
                    "total": 126.33434593726707,
                    "hasRDI": true,
                    "daily": 194.36053221118013,
                    "unit": "g",
                    "sub": [
                        {
                            "label": "Saturated",
                            "tag": "FASAT",
                            "schemaOrgTag": "saturatedFatContent",
                            "total": 45.614909200931635,
                            "hasRDI": true,
                            "daily": 228.07454600465817,
                            "unit": "g"
                        },
                        {
                            "label": "Trans",
                            "tag": "FATRN",
                            "schemaOrgTag": "transFatContent",
                            "total": 6.707724436667803,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        },
                        {
                            "label": "Monounsaturated",
                            "tag": "FAMS",
                            "schemaOrgTag": null,
                            "total": 53.95392736758743,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        },
                        {
                            "label": "Polyunsaturated",
                            "tag": "FAPU",
                            "schemaOrgTag": null,
                            "total": 6.706341963001801,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        }
                    ]
                },
                {
                    "label": "Carbs",
                    "tag": "CHOCDF",
                    "schemaOrgTag": "carbohydrateContent",
                    "total": 250.23690918628662,
                    "hasRDI": true,
                    "daily": 83.41230306209553,
                    "unit": "g",
                    "sub": [
                        {
                            "label": "Carbs (net)",
                            "tag": "CHOCDF.net",
                            "schemaOrgTag": null,
                            "total": 232.3338028388893,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        },
                        {
                            "label": "Fiber",
                            "tag": "FIBTG",
                            "schemaOrgTag": "fiberContent",
                            "total": 17.903106347397323,
                            "hasRDI": true,
                            "daily": 71.61242538958929,
                            "unit": "g"
                        },
                        {
                            "label": "Sugars",
                            "tag": "SUGAR",
                            "schemaOrgTag": "sugarContent",
                            "total": 164.11268996864897,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        },
                        {
                            "label": "Sugars, added",
                            "tag": "SUGAR.added",
                            "schemaOrgTag": null,
                            "total": 90.94056249962844,
                            "hasRDI": false,
                            "daily": 0,
                            "unit": "g"
                        }
                    ]
                },
                {
                    "label": "Protein",
                    "tag": "PROCNT",
                    "schemaOrgTag": "proteinContent",
                    "total": 122.08980670591622,
                    "hasRDI": true,
                    "daily": 244.17961341183243,
                    "unit": "g"
                },
                {
                    "label": "Cholesterol",
                    "tag": "CHOLE",
                    "schemaOrgTag": "cholesterolContent",
                    "total": 565.4632283750001,
                    "hasRDI": true,
                    "daily": 188.4877427916667,
                    "unit": "mg"
                },
                {
                    "label": "Sodium",
                    "tag": "NA",
                    "schemaOrgTag": "sodiumContent",
                    "total": 4133.903037157168,
                    "hasRDI": true,
                    "daily": 172.24595988154869,
                    "unit": "mg"
                },
                {
                    "label": "Calcium",
                    "tag": "CA",
                    "schemaOrgTag": null,
                    "total": 464.7457929038978,
                    "hasRDI": true,
                    "daily": 46.47457929038978,
                    "unit": "mg"
                },
                {
                    "label": "Magnesium",
                    "tag": "MG",
                    "schemaOrgTag": null,
                    "total": 254.36353585647805,
                    "hasRDI": true,
                    "daily": 60.56274663249477,
                    "unit": "mg"
                },
                {
                    "label": "Potassium",
                    "tag": "K",
                    "schemaOrgTag": null,
                    "total": 3635.7561644535112,
                    "hasRDI": true,
                    "daily": 77.35651413730875,
                    "unit": "mg"
                },
                {
                    "label": "Iron",
                    "tag": "FE",
                    "schemaOrgTag": null,
                    "total": 20.64338896516814,
                    "hasRDI": true,
                    "daily": 114.6854942509341,
                    "unit": "mg"
                },
                {
                    "label": "Zinc",
                    "tag": "ZN",
                    "schemaOrgTag": null,
                    "total": 27.38162071100536,
                    "hasRDI": true,
                    "daily": 248.9238246455033,
                    "unit": "mg"
                },
                {
                    "label": "Phosphorus",
                    "tag": "P",
                    "schemaOrgTag": null,
                    "total": 1338.7414411031284,
                    "hasRDI": true,
                    "daily": 191.2487773004469,
                    "unit": "mg"
                },
                {
                    "label": "Vitamin A",
                    "tag": "VITA_RAE",
                    "schemaOrgTag": null,
                    "total": 946.1682892707195,
                    "hasRDI": true,
                    "daily": 105.12980991896882,
                    "unit": "µg"
                },
                {
                    "label": "Vitamin C",
                    "tag": "VITC",
                    "schemaOrgTag": null,
                    "total": 275.9573498111367,
                    "hasRDI": true,
                    "daily": 306.6192775679296,
                    "unit": "mg"
                },
                {
                    "label": "Thiamin (B1)",
                    "tag": "THIA",
                    "schemaOrgTag": null,
                    "total": 0.741484359863519,
                    "hasRDI": true,
                    "daily": 61.790363321959916,
                    "unit": "mg"
                },
                {
                    "label": "Riboflavin (B2)",
                    "tag": "RIBF",
                    "schemaOrgTag": null,
                    "total": 1.918502939545779,
                    "hasRDI": true,
                    "daily": 147.57714919582918,
                    "unit": "mg"
                },
                {
                    "label": "Niacin (B3)",
                    "tag": "NIA",
                    "schemaOrgTag": null,
                    "total": 32.65364690162421,
                    "hasRDI": true,
                    "daily": 204.0852931351513,
                    "unit": "mg"
                },
                {
                    "label": "Vitamin B6",
                    "tag": "VITB6A",
                    "schemaOrgTag": null,
                    "total": 3.442984776513334,
                    "hasRDI": true,
                    "daily": 264.844982808718,
                    "unit": "mg"
                },
                {
                    "label": "Folate equivalent (total)",
                    "tag": "FOLDFE",
                    "schemaOrgTag": null,
                    "total": 284.10268236039184,
                    "hasRDI": true,
                    "daily": 71.02567059009796,
                    "unit": "µg"
                },
                {
                    "label": "Folate (food)",
                    "tag": "FOLFD",
                    "schemaOrgTag": null,
                    "total": 284.10268236039184,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "µg"
                },
                {
                    "label": "Folic acid",
                    "tag": "FOLAC",
                    "schemaOrgTag": null,
                    "total": 0,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "µg"
                },
                {
                    "label": "Vitamin B12",
                    "tag": "VITB12",
                    "schemaOrgTag": null,
                    "total": 12.583795897500002,
                    "hasRDI": true,
                    "daily": 524.3248290625,
                    "unit": "µg"
                },
                {
                    "label": "Vitamin D",
                    "tag": "VITD",
                    "schemaOrgTag": null,
                    "total": 1.8487866474999999,
                    "hasRDI": true,
                    "daily": 12.325244316666666,
                    "unit": "µg"
                },
                {
                    "label": "Vitamin E",
                    "tag": "TOCPHA",
                    "schemaOrgTag": null,
                    "total": 7.221530007549545,
                    "hasRDI": true,
                    "daily": 48.14353338366364,
                    "unit": "mg"
                },
                {
                    "label": "Vitamin K",
                    "tag": "VITK1",
                    "schemaOrgTag": null,
                    "total": 221.44628835614216,
                    "hasRDI": true,
                    "daily": 184.5385736301185,
                    "unit": "µg"
                },
                {
                    "label": "Sugar alcohols",
                    "tag": "Sugar.alcohol",
                    "schemaOrgTag": null,
                    "total": 0,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                },
                {
                    "label": "Water",
                    "tag": "WATER",
                    "schemaOrgTag": null,
                    "total": 1246.8752995633722,
                    "hasRDI": false,
                    "daily": 0,
                    "unit": "g"
                }
            ]
        }
    }
    
    $('body').append(
        `<div class='recipe-dialog-box'>
            <div class='dialog-box-recipe-container'>

                <div class='dialog-box-info'>
                    <img class='recipe-image' src='${recipe.image}'>         
                    <div class='recipe-label'>${recipe.label}</div>
                    <div class='recipe-info'>
                        <div class='recipe-calories'>${Math.floor(recipe.calories / recipe.yield)} Calories</div>
                        <div class='recipe-yield'>${Number.parseFloat(recipe.yield).toFixed(2)} Servings</div>
                    </div>
                    <div class='recipe-ingredient-list-info'>
                        ${recipe.ingredientLines.length} Ingredients
                    </div>
                </div>

                <div class='dialog-box-options'>
                    <button 
                        id='dialog-box-grocery-option'
                        onClick="dialogRecipeAction(this, 'grocery', ${index})">
                        ${getUISVGSymbol('grocery')}
                        Selected
                    </button>
                    <button 
                        id='dialog-box-cook-option'
                        onClick="dialogRecipeAction(this, 'cook', ${index})">
                        ${getUISVGSymbol(`cook`)}
                        Recipe
                    </button>
                    <button 
                        id='dialog-box-cancel-option'
                        onClick="dialogRecipeAction(this, 'remove')">
                        ${getUISVGSymbol('cancel')}
                        Close
                    </button>
                </div>

                <div class='recipe-ingredient-list'>
                    ${ recipe.ingredientLines.map(ingredient => 
                        `<div class='recipe-ingredient'>
                            <input type='checkbox'
                                class='recipe-ingredient-grocery-checkbox' 
                                valueIngredient="${ingredient}"
                                valueId="${randomID()}"
                            />
                            <div class='recipe-ingredient-string'>${ingredient}</div>
                        </div>`
                    ).join('') }
                </div>

            </div>
        </div>`
  );
}
var isCookActive = 0;
function dialogRecipeAction(target, type, index){
    // Remove dialog box 
    if(type == 'remove'){
        $('.recipe-dialog-box').fadeOut()
    }

    // Continue with dialog data
    if(type == 'cook'){
        if(isCookActive){
            // TO DO - This code might be old/ redundant code - at some point you could 
            // immediately search for new recipes until the 'Finished Cooking ?' cleaning
            // behavior was added. This may never reach

            console.warn('TO DO - fix this isCookActive behavior, ')

            isCookActive = 0;
            $('#fridge-cook-recipe-container').fadeOut(400);
            $('#fridge-cooking-recipes-list').fadeIn(400);
            $('#fridge-explore-ingredients-button').text('Explore Recipes ?');
        }
        else{
            isCookActive = 1;
            $(target).css('fill', 'var(--orange_color1)');
            let recipe = exploreData[index].recipe;
            let carbs = Math.floor(recipe.digest.filter((item)=>{
                if(item.label === 'Carbs'){
                    return true;
                }
            })[0].sub[0].total);
    
            $('#fridge-cooking-recipes-list').fadeOut(400);
            
            $('#fridge-cook-recipe-container').html(
                `<h3>${recipe.label}</h3>
                <img class='cook-recipe-image' src='${recipe.image}'>
                <div class='cook-recipe-info'>
                    <div class='cook-recipe-calories'>
                        <span>${Math.floor(recipe.calories / recipe.yield)}</span>
                        Calories
                    </div>
                    <div class='cook-recipe-yield'>
                        <span>${recipe.yield}</span>
                        Servings
                    </div>
                    <div class='cook-recipe-carbs'>
                        <span>${carbs}</span>
                        Net Carbs
                    </div>
                    <div class='cook-recipe-url'>
                        <span><a href='${recipe.url}'>${recipe.source}</a></span>
                    </div>
                </div>
                <div>
                    ${recipe.ingredientLines.map(line =>{
                        return `<div class='cook-recipe-line'>${line}</div>`
                    }).join('')}
                </div>`
            );
            $('#fridge-cook-recipe-container').fadeIn(400);
            $('#fridge-explore-ingredients-button').text('Finished Cooking ?');
        }
    }
    if(type == 'grocery'){

        let selected_groceries = $('.recipe-ingredient-grocery-checkbox:checked');
        for(let i = 0; i < selected_groceries.length; i++){
            let grocery = selected_groceries[i]
            let id = grocery.attributes.valueId.value;
            let ingredient = grocery.attributes.valueIngredient.value;



            // Check if ingredient ID exists inside fridge
            let fridgeIngredients = fridge.getIngredients();
            let doesIngredientExistAlready = false;

            fridgeIngredients.forEach(ingredient =>{
                // If ingredient ID is already in fridge, mark true - so that it's not duplicated. 
                if(ingredient.id == id){
                    doesIngredientExistAlready = true;
                }
            })
            // Depending on ingredient existing, adds ingredient to fridge
            if(!doesIngredientExistAlready){
                //     addIngredient(id, ingredient string, available?, grocery?, cook?)
                fridge.addIngredient(id, ingredient, false, true, false, 'push');
                
                updateFridgeIngredientDisplay();
            }
        }
        updateGroceryListDisplay();
    }
}

// Grocery screen ___________________________________________________________

function updateGroceryListDisplay(){
    let groceryList = fridge.getIngredients().filter(item =>{
        if(item.grocery && !item.carted){
            return true;
        }
    })
    let cartedList = fridge.getIngredients().filter(item=>{
        if(item.carted){
            return true;
        }
    })
    
    $('#grocery-list-total').text((groceryList.length) ? `Shopping ${groceryList.length} ingredients` : 'Grocery List Empty');
    $('#cart-list-total').text(cartedList.length ? `Carted ${cartedList.length} ingredients` : 'Shopping Cart Empty');
    
    // Grocery List 
    $('#grocery-list-count-badge').html(groceryList.length)

    let groceryListHTML = ``
    if(!groceryList.length){
        $('#grocery-list-count-badge').css('display', 'none');
        groceryListHTML = (
            `<div class='ingredient-list-empty'>
                ${getUISVGSymbol('grocery')}
                <span>Going to go grocery shopping? Track it here</span>
            </div>`
        )
    }
    else{
        $('#grocery-list-count-badge').css('display', 'block');
        groceryListHTML = groceryList.map(grocery=>{
            return (
                `<div class='ingredient-list-item'>
                    <div class='ingredient-list-item-name'>
                        <input type='text'
                            value='${grocery.name}'
                            onFocus='ingredientFocus(this, true)'
                            onBlur='ingredientFocus(this,false)'
                            onInput="alterIngredientName('${grocery.id}', this, 'grocery')"
                        >
                    </div>
                    <div class='ingredient-list-item-options'>
                        <div class='grocery-list-item ingredient-list-item-options-main'>
                            <button 
                                id='grocery-remove-option'
                                onClick="groceryAction('${grocery.id}', 'remove')">
                                ${getUISVGSymbol('cancel')}
                            </button>
                            <button
                                id='grocery-cart-option'
                                class='carted'
                                onClick="groceryAction('${grocery.id}', 'cart')">
                                ${getUISVGSymbol('carted')}
                            </button>
                        </div>
                        <div class='ingredient-list-item-options-nested' id='grocery-remove-options-id-${grocery.id}'>
                            <button 
                                class='denial' 
                                onClick="groceryAction('${grocery.id}', 'removeConfirm')">
                                ${getUISVGSymbol('grocery')}
                            </button>
                            <button 
                                class='cancel' 
                                onClick="groceryAction('${grocery.id}', 'removeCancel')">
                                ${getUISVGSymbol('cancel')}
                            </button>
                        </div>
    
                        <div class='ingredient-list-item-options-nested' id='grocery-cart-options-id-${grocery.id}'>
                            <button 
                                class='confirm' 
                                onClick="groceryAction('${grocery.id}', 'cartConfirm')">
                                ${getUISVGSymbol('carted')}
                            </button>
                            <button 
                                class='cancel' 
                                onClick="groceryAction('${grocery.id}', 'cartCancel')">
                                ${getUISVGSymbol('cancel')}
                            </button>
                        </div>
                    </div>
                </div>`
                )
        }).join('');
    }
    $('#grocery-list-ingredient-container').html(groceryListHTML)

    // Cart elements
    let cartedListHTML = ``;
    
    if(!cartedList.length){
        // If Nothing in shopping cart, display empty list elements
        cartedListHTML = (
            `<div class='ingredient-list-empty'>
                ${getUISVGSymbol('carted')}
                <span>Move grocery list ingredients here once found</span>
            </div>`
        )
    }
    else{
        // Creates Shopping Cart List Elements when elements are carted
        cartedListHTML = cartedList.map((carted)=>{
            return (
                `<div class='ingredient-list-item'>
                    <div class='ingredient-list-item-name'>
                        <input type='text'
                            value='${carted.name}'
                            onFocus='ingredientFocus(this, true)'
                            onBlur='ingredientFocus(this,false)'
                            onInput="alterIngredientName('${carted.id}', this, 'grocery')"
                        >
                    </div>
                    <div class='ingredient-list-item-options'>
                        <div class='carted-list-item ingredient-list-item-options-main'>
                            <button 
                                id='grocery-infridge-option'
                                class='carted'
                                onClick="groceryAction('${carted.id}', 'decart')">
                                ${getUISVGSymbol('carted')}
                            </button>
                            <button
                                class='${carted.available ? 'available' : ''}'
                                id='grocery-infridge-option'
                                onClick="groceryAction('${carted.id}', 'infridge')">
                                ${getUISVGSymbol('fridge')}
                            </button>
                        </div>
                        <div class='ingredient-list-item-options-nested' id='grocery-infridge-options-id-${carted.id}'>
                            <button 
                                class='confirm' 
                                onClick="groceryAction('${carted.id}', 'infridgeConfirm')">
                                ${getUISVGSymbol('fridge')}
                            </button>
                            <button 
                                class='cancel' 
                                onClick="groceryAction('${carted.id}', 'infridgeCancel')">
                                ${getUISVGSymbol('cancel')}
                            </button>
                        </div>
                    </div>
                </div>` 
            )
        })
    }
    $("#cart-list-ingredient-container").html(cartedListHTML);
    
}
function groceryAction(id, action){

    let pace = 200;

    if(action == 'remove'){
        $(`#grocery-remove-options-id-${id}`).css('display', 'grid');
        $(`#grocery-remove-options-id-${id}`).animate({width: '100%'}, pace);
    }
    else if(action == 'removeConfirm' || action == 'removeCancel'){
        $(`#grocery-remove-options-id-${id}`).animate({width: '0%'}, pace   )
        setTimeout(()=>{
            $(`#grocery-remove-options-id-${id}`).css('display','none')
            if(action == 'removeConfirm'){
                fridge.switchGrocery(id);
                updateGroceryListDisplay();
                updateFridgeIngredientDisplay();
            }
        }, pace - 20)
    }
    else if(action == 'cart'){
        $(`#grocery-cart-options-id-${id}`).css('display', 'grid');
        $(`#grocery-cart-options-id-${id}`).animate({width: '100%'}, pace);
    }
    else if(action == 'cartConfirm' || action == 'cartCancel'){
        $(`#grocery-cart-options-id-${id}`).animate({width: '0%'}, pace);
        setTimeout(()=>{
            $(`#grocery-cart-options-id-${id}`).css('display','none')
            if(action == 'cartConfirm'){
                fridge.switchCarted(id);
                updateGroceryListDisplay();
                updateFridgeIngredientDisplay();
            }
        }, pace - 20);
    }
    else if(action == 'decart'){
        fridge.switchCarted(id);
        updateGroceryListDisplay();
        updateFridgeIngredientDisplay();
    }
    else if(action == 'infridge'){
        $(`#grocery-infridge-options-id-${id}`).css('display','grid')
        $(`#grocery-infridge-options-id-${id}`).animate({width: '100%'}, pace)
    }
    else if(action == 'infridgeConfirm' || action == 'infridgeCancel'){
        $(`#grocery-infridge-options-id-${id}`).animate({
            width: `0%`,
        })
        setTimeout(()=>{
            $(`#grocery-infridge-options-id-${id}`).css({
                display: 'none'
            })
            if(action == 'infridgeConfirm'){
                fridge.switchAvailable(id, true);
                updateGroceryListDisplay();
                updateFridgeIngredientDisplay();
            }
        }, pace - 20)
    }
    else{
        console.error(`groceryAction(..id, '${action}') is invalid`)
    }
}
updateGroceryListDisplay();

function cartAction(action){
    fridge.cartAllAction(action);
    updateGroceryListDisplay();
    updateFridgeIngredientDisplay();
}

// app bottom _______________________________________________________________

var isBottomRevealed = false;

function revealAppBottom(active, pace = 300){
    if(active){
        $('#app-bottom').animate({
            bottom: '0px',
            opacity: '1'
        }, pace)
    }
    else{
        $('#app-bottom').animate({
            bottom: '-260px',
            // opacity: '.5'
        }, pace)
        $('#app-bottom-main-info').animate({
            paddingTop: '0px'
        }, pace)
    }
}

$('#app-bottom').on('mouseenter', ()=>{
    // console.log('moused in');
    if(!isBottomRevealed){
        isBottomRevealed = 1;
        revealAppBottom(true);
    }
})
$('#app-bottom').on('mouseleave', ()=>{
    isBottomRevealed = 0;
    revealAppBottom(false);
})


// Find Recipes/ Search Fridge/ Shopping List Button UI Change
$('#app-option-buttons-container > button').on('click', (event)=>{
    let scrolledDown = $(document).scrollTop()
    let windowHeight = $(window).height();
    let documentHeight = $(document).height();

    if(scrolledDown + windowHeight <= documentHeight - 5 && isBottomRevealed){
        isBottomRevealed = false;
        revealAppBottom(false);
    }
})

$(window).on('scroll', ()=>{
    let scrolledDown = $(document).scrollTop()
    let windowHeight = $(window).height();
    let documentHeight = $(document).height();

    if(scrolledDown + windowHeight > documentHeight - 5 && !isBottomRevealed){
        isBottomRevealed = true;
        revealAppBottom(true, 400);
    }
    else if(scrolledDown + windowHeight <= documentHeight - 5 && isBottomRevealed){
        isBottomRevealed = false;
        revealAppBottom(false);
    }
    let scrollImageTop = (id, originalTop, rate) =>{
        let scrollRate = scrolledDown * rate;
        let scrollTop = `${Math.floor(originalTop - scrollRate)}px`;
        $(id).css('top', scrollTop)
    }
    scrollImageTop(`#background_image1`, 1600, .3);
    scrollImageTop(`#background_image2`, 1000, .3);
    scrollImageTop(`#background_image3`, 400, .3);
    scrollImageTop(`#background_image4`, 2200, .3);
    scrollImageTop(`#background_image5`, 100, .3);
})
// Common Functions _________________________________________________________

async function submitRecipeQuery(userInput, count = 18, random = false){

    let queryString = userInput + `&calories=${$('#calorie-range-min').val()}-${$('#calorie-range-max').val()}`
    
    return searchRecipeAPI(queryString, random).then((response)=>{
        // Save data globally
        exploreData = JSON.parse(response).hits;

        // Create recipe array HTML for display
        let recipes = ``;
        for(let i = 0; i < count; i++){
            let recipe = exploreData[i].recipe;
            recipes = recipes +  
            `<div class='recipe-container'>
                <img class='recipe-image' src='${recipe.image}'/>
                <div class='recipe-label'>${recipe.label}</div>
                <div class='recipe-info'>
                    <div class='recipe-calories'>
                        <span>${Math.floor(recipe.calories / recipe.yield)}</span>
                        Calories
                    </div>
                    <div class='recipe-servings'>
                        <span>${recipe.yield}</span>
                        Servings
                    </div>
                </div>
                <button class='recipe-ingredient-expand' onClick='expandExploredData(${i})'>
                    View Recipe
                </button>
            </div>`
        }
        return [1, recipes];
    }).catch(()=>{
        let error = 
        `<div class='no-recipes-found'>
            <div class='no-recipe-found-message'>No recipes found</div>
            <div class='no-recipe-found-image'>${getUISVGSymbol('cancel')}</div>
        </div>`
        return [0, error]
    })
}

function getUISVGSymbol(type){
    if(type == 'cook'){ return `<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127.24 133.97"><path d="M894.43,5472.86c-8.61.86-13.79.6-22.69-2.14-15.52-4.78-26.65-15.51-28-27.67-.58-5.22,1.52-11.78,13.5-23.33,13.86-13.37,21.32-17.52,31.63-36.74,6.22-11.61-2.8-22.71-2.8-22.71s36.06,23.95,3.33,58.64c-1.85,2-15.19,11.9-14.87,19.33.52,11.81,16.59,16,23.88,12.31,13.83-7,18.83-26.83,11.16-54.33,0,0,19.06,21.75,21.34,35.33C934.92,5455.58,918.68,5470.47,894.43,5472.86Zm-67.46-28c-.06-.52-.1-1-.13-1.57a36.62,36.62,0,0,1,.07-5c.58-7,5.92-16.57,13.09-23.9,7.48-7.64,35.78-30.44,40.41-52.33.26-1.23,1-4.64,0-5.54-2.48-2.18-12.67-17.14-12.67-17.14s2.74,22-41.38,59.79c-5.35,4.59-19.05,16.68-21.24,28.65-4,21.72,6.88,38.27,28.33,43.53,12.93,3.17,24.45,1.6,25.14,1.71l-14.45-6.19C833.16,5462.11,828.19,5456.67,827,5444.82Z" transform="translate(-804.27 -5339.32)"/></svg>`}
    else if(type == 'pan'){ return `<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 113.33 149.86"><path d="M376.26-60.73a56.64,56.64,0,0,0,28.41-49.11A56.67,56.67,0,0,0,348-166.5a56.67,56.67,0,0,0-56.67,56.66A56.67,56.67,0,0,0,348-53.17a56.63,56.63,0,0,0,16.21-2.37l16.07,35.07A6.55,6.55,0,0,0,389-17.24h0a6.56,6.56,0,0,0,3.23-8.69Zm-68.93-49.11A40.66,40.66,0,0,1,348-150.5a40.66,40.66,0,0,1,40.67,40.66A40.67,40.67,0,0,1,348-69.17,40.67,40.67,0,0,1,307.33-109.84Z" transform="translate(-291.33 166.5)"/><polygon points="74.74 80.06 83.27 76.16 77.4 63.36 77.29 63 63.32 67.2 61.05 62.25 60.94 61.88 47.99 65.78 45.58 60.5 45.47 60.13 24.51 66.44 27.21 75.42 40.29 71.48 42.26 75.77 42.68 77.17 42.87 77.11 42.91 77.2 43.55 76.91 55.77 73.23 58.39 78.95 61.4 77.57 72.12 74.34 74.74 80.06"/><polygon points="80.41 53.55 88.94 49.65 83.07 36.85 82.96 36.48 68.99 40.69 66.72 35.73 66.61 35.37 53.66 39.27 51.24 33.98 51.14 33.62 30.18 39.93 32.88 48.91 45.96 44.97 47.93 49.26 48.35 50.66 48.54 50.6 48.58 50.69 49.23 50.4 61.44 46.72 64.06 52.44 67.07 51.06 77.79 47.83 80.41 53.55"/></svg>` }
    else if(type == 'cancel'){ return `<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 152.49 152.49"><path d="M650.36-5106.22l-51.84,51.84,51.67,51.67a14.24,14.24,0,0,1,0,20.15h0a14.26,14.26,0,0,1-20.15,0l-51.67-51.67-51.83,51.83a14.24,14.24,0,0,1-20.15,0h0a14.24,14.24,0,0,1,0-20.15l51.83-51.83-52-52a14.24,14.24,0,0,1,0-20.15h0a14.26,14.26,0,0,1,20.15,0l52,52,51.84-51.84a14.26,14.26,0,0,1,20.15,0h0A14.26,14.26,0,0,1,650.36-5106.22Z" transform="translate(-502.05 5130.71)"/></svg>` }
    else if(type == 'grocery'){ return `<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150.79 113.3"><path d="M753,5238.41H731.65a8.62,8.62,0,0,0-.44-.78l-21.63-30.56a8.57,8.57,0,0,0-12-2h0a8.59,8.59,0,0,0-2,12l15.17,21.43h-50.4L675.52,5217a8.58,8.58,0,1,0-14-9.91l-21.63,30.56c-.17.25-.29.52-.44.78H619.37a8.58,8.58,0,0,0-8.57,8.58h0a8.57,8.57,0,0,0,8.31,8.56l20.83,46a8.57,8.57,0,0,0,5.42,15.22H727a8.57,8.57,0,0,0,5.36-15.27l20.81-45.92a8.58,8.58,0,0,0,8.39-8.57h0A8.58,8.58,0,0,0,753,5238.41ZM728.74,5269H643.56l-6.09-13.45h97.37ZM721,5286.16l-6.09,13.44H657.42l-6.09-13.44Z" transform="translate(-610.8 -5203.45)"/></svg>` }
    else if(type == 'list'){ return `<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 152.83 175.29"><path d="M637.51-5301.16h0a11.88,11.88,0,0,1,11.88,11.89v81.38a30.07,30.07,0,0,1-30.07,30.08H532a30.08,30.08,0,0,1-30.08-30.08V-5323A30.08,30.08,0,0,1,532-5353.11h53.93a11.89,11.89,0,0,1,11.89,11.89v.08a11.88,11.88,0,0,1-11.89,11.88H537.53a11.89,11.89,0,0,0-11.89,11.89v101.65a11.88,11.88,0,0,0,11.89,11.88h76.21a11.88,11.88,0,0,0,11.88-11.88v-73.55A11.89,11.89,0,0,1,637.51-5301.16Zm-6-48.59-25.28,24a6.28,6.28,0,0,0-1.37,1.89l-9.7,20.41c-2.21,4.65,2.87,10,7.63,8l20.89-8.6a6.66,6.66,0,0,0,2-1.27l25.28-24c5.21-4.94,5.08-13.52-.28-19.18h0C645.24-5354.11,636.67-5354.69,631.46-5349.75ZM617.71-5229.1h0a9.22,9.22,0,0,0-9.23-9.22H544a9.22,9.22,0,0,0-9.22,9.22h0a9.22,9.22,0,0,0,9.22,9.23h64.46A9.23,9.23,0,0,0,617.71-5229.1Zm-31-75.12h0a9.23,9.23,0,0,0-9.23-9.23H544a9.22,9.22,0,0,0-9.22,9.23h0A9.22,9.22,0,0,0,544-5295h33.46A9.22,9.22,0,0,0,586.71-5304.22Zm31,37.56h0a9.22,9.22,0,0,0-9.23-9.22H544a9.22,9.22,0,0,0-9.22,9.22h0a9.22,9.22,0,0,0,9.22,9.22h64.46A9.22,9.22,0,0,0,617.71-5266.66Z" transform="translate(-501.87 5353.11)"/></svg>`}
    else if(type == 'carted'){return `<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 172.73 122.39"><path d="M1013.44,5215.52h0a8.25,8.25,0,0,0-8.25-8.25h-20a8.65,8.65,0,0,0-7.88,5.08l-4.89,10.85s0,0,0,0H849.62a8.79,8.79,0,0,0-8.88,8,8.58,8.58,0,0,0,8.29,9.18h0l20.83,46h0a8.58,8.58,0,0,0-3.12,7.44,8.78,8.78,0,0,0,8.85,7.78h81a8.78,8.78,0,0,0,8.86-7.83,8.55,8.55,0,0,0-3.19-7.43h0l3.39-7.49h0l7.43-16.46,10-22v-.1l7.44-16.49h14.64A8.25,8.25,0,0,0,1013.44,5215.52Zm-63,56.42-5.65,12.47H887.34L881.25,5271h69.61l-.43,1Zm8.16-18.15a.05.05,0,0,1-.05,0H873.48l-6.09-13.44h97.19a0,0,0,0,1,0,.07Zm-7.75,75.86h-.66a11,11,0,0,1-11-11V5318a11,11,0,0,1,11-11h.66a11,11,0,0,1,11,11v.65A11,11,0,0,1,950.86,5329.65Zm-66.87,0h-.66a11,11,0,0,1-11-11V5318a11,11,0,0,1,11-11H884a11,11,0,0,1,11,11v.65A11,11,0,0,1,884,5329.65Z" transform="translate(-840.72 -5207.27)"/></svg>` }
    else if(type == 'fridge'){ return `<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 87.5 138.5"><path d="M184.25,199.17H114.92a9.08,9.08,0,0,0-9.09,9.08V328.58a9.09,9.09,0,0,0,9.09,9.09h69.33a9.08,9.08,0,0,0,9.08-9.09V208.25A9.07,9.07,0,0,0,184.25,199.17Zm-20.42,119a7.09,7.09,0,0,1-7.09,7.09H125.35a7.1,7.1,0,0,1-7.09-7.09V261.5a7.09,7.09,0,0,1,7.09-7.08h31.39a7.08,7.08,0,0,1,7.09,7.08Zm0-80.78a7.08,7.08,0,0,1-7.09,7.09H125.09a7.08,7.08,0,0,1-7.09-7.09v-20.5a7.09,7.09,0,0,1,7.09-7.09h31.65a7.09,7.09,0,0,1,7.09,7.09Zm19.95,83.67a4.2,4.2,0,1,1-8.39,0V214a4.2,4.2,0,1,1,8.39,0Z" transform="translate(-105.83 -199.17)"/></svg>` }
    else if(type == 'delete'){ return `<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 86.03 126.83"><path d="M78.34,9.94H60.46a7.48,7.48,0,0,0,.28-2A7.69,7.69,0,0,0,53.05.29H33A7.69,7.69,0,0,0,25.29,8a7.48,7.48,0,0,0,.28,2H7.69a7.69,7.69,0,0,0,0,15.38H78.34a7.69,7.69,0,0,0,0-15.38Z" transform="translate(0 -0.29)"/><path d="M76.44,31.9H9.6a8.33,8.33,0,0,0-8.33,8.33V118.8a8.32,8.32,0,0,0,8.33,8.32H76.44a8.32,8.32,0,0,0,8.32-8.32V40.23A8.33,8.33,0,0,0,76.44,31.9Zm-53.12,74a4.6,4.6,0,0,1-9.19,0V47.25a4.6,4.6,0,1,1,9.19,0Zm24.29,0a4.6,4.6,0,0,1-9.19,0V47.25a4.6,4.6,0,1,1,9.19,0Zm24.3-.78a4.6,4.6,0,0,1-9.19,0V46.47a4.6,4.6,0,1,1,9.19,0Z" transform="translate(0 -0.29)"/></svg>`}
    else if(type == 'checkmark'){ return `<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 142.84 127.06"><path d="M649.74-6552.42h0a12,12,0,0,1,2.57,16.8l-74.58,101.5a15.75,15.75,0,0,1-22,3.37l-39-28.66a12,12,0,0,1-2.57-16.8h0a12,12,0,0,1,16.8-2.56L563.27-6455l69.67-94.83A12,12,0,0,1,649.74-6552.42Z" transform="translate(-511.81 6554.75)"/></svg>`}
    else if(type == 'fridge'){ return `<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 87.5 138.5"><path d="M184.25,199.17H114.92a9.08,9.08,0,0,0-9.09,9.08V328.58a9.09,9.09,0,0,0,9.09,9.09h69.33a9.08,9.08,0,0,0,9.08-9.09V208.25A9.07,9.07,0,0,0,184.25,199.17Zm-20.42,119a7.09,7.09,0,0,1-7.09,7.09H125.35a7.1,7.1,0,0,1-7.09-7.09V261.5a7.09,7.09,0,0,1,7.09-7.08h31.39a7.08,7.08,0,0,1,7.09,7.08Zm0-80.78a7.08,7.08,0,0,1-7.09,7.09H125.09a7.08,7.08,0,0,1-7.09-7.09v-20.5a7.09,7.09,0,0,1,7.09-7.09h31.65a7.09,7.09,0,0,1,7.09,7.09Zm19.95,83.67a4.2,4.2,0,1,1-8.39,0V214a4.2,4.2,0,1,1,8.39,0Z" transform="translate(-105.83 -199.17)"/></svg>` }
    else if(type == 'logo'){ return `<img src="IMGs/Logo.svg">` }
    else{
        console.error('Error - Did not specify SVG return symbol');
    }
}