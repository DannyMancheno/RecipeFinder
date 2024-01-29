// Initial setup. 
$(document).ready(()=>{
    $('.app-option')[2].click();
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
    let ingredientsHTML = ``;
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
        ingredientsHTML =  (
            `<div class='fridge-no-ingredients'>
                ${getUISVGSymbol('fridge')}
                <span>Fridge is empty</span>
            </div>`
        )
    }
    else{
        ingredientsHTML = fridge.getIngredients().map((ingredient)=>{
            return (
                `<div class='fridge-ingredient ${(ingredient.available) ? '' : 'fridge-ingredient-unavailable'}'>
                    <div class='fridge-ingredient-name'>
                        <input type='text' 
                            value='${ingredient.name}' 
                            class='fridge-ingredient-name-input' 
                            onFocus='ingredientFocus(this, true)' 
                            onBlur='ingredientFocus(this,false)'
                            onInput="alterIngredientName('${ingredient.id}', this, 'fridge')"
                        >
                    </div>
                    <div class='fridge-ingredient-options'>
                        <button 
                            class='fridge-ingredient-option-button delete-option' 
                            onClick="fridgeAction('${ingredient.id}', 'delete')">
                            ${getUISVGSymbol('delete')}
                        </button>
                        <button 
                            class='fridge-ingredient-option-button grocery-option ${(ingredient.grocery || ingredient.carted) ? 'grocery-list': ''}' 
                            onClick="${(ingredient.carted) ? `fridgeAction('${ingredient.id}', 'carted')` : `fridgeAction('${ingredient.id}', 'grocery')`} ">
                            ${(ingredient.carted) ? getUISVGSymbol('carted') : getUISVGSymbol('grocery')}
                        </button>
                        <button 
                            class='fridge-ingredient-option-button fridge-option' 
                            onClick="fridgeAction('${ingredient.id}', 'available')">
                            ${getUISVGSymbol('fridge')}
                        </button>
                        <button 
                            class='fridge-ingredient-option-button cook-option ${(ingredient.cook) ? 'cooking-list': ''}'' 
                            onClick="fridgeAction('${ingredient.id}', 'cook')">
                            ${getUISVGSymbol('cook')}
                        </button>
                        <div class='ingredient-delete-options' id='delete-option-id-${ingredient.id}'>
                            <button 
                                class='ingredient-delete-option delete' 
                                onClick="fridgeAction('${ingredient.id}', 'deleteConfirm')">
                                ${getUISVGSymbol('delete')}
                            </button>
                            <button 
                                class='ingredient-delete-option cancel' 
                                onClick="fridgeAction('${ingredient.id}', 'deleteCancel')">
                                ${getUISVGSymbol('cancel')}
                            </button>
                        </div>
                    </div>
                </div>`
            )
        })
    }
    $('#fridge-ingredient-container').html(ingredientsHTML);

    // Cooking elements
    let cookingHTML = ``

    if(!Cooking.length){
        cookingHTML = 
        `<div class='cook-no-ingredients'>
            ${getUISVGSymbol('cook')}
            <span>No Active Recipe!</span>
        </div>`
    }
    else{
        cookingHTML = Cooking.map(item=>{
            return (
                `<div class='cook-ingredient'>
                    <div class='cook-ingredient-name'>
                        ${item.name}
                    </div>
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
        $('#fridge-explore-ingredients-button').text('Explore Selected?');
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
    }
    else{
        let selected = ''
        fridge.getIngredients().filter(item=>{
            if(item.cook) return true;
        }).forEach(item =>{
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
})


$(document).ready(()=>{
    updateFridgeIngredientDisplay();  
})



// HTML string function
let exploreData = ``;

// TEMPORARY


async function expandExploredData(index){
    let recipe = exploreData[index].recipe;
    $('body').append(
        `<div class='recipe-dialog-box'>
            <div class='dialog-box-recipe-container'>
                <img class='recipe-image' src='${recipe.image}'>         
                <div class='recipe-label'>${recipe.label}</div>
                <div class='recipe-calories'>${Math.floor(recipe.calories / recipe.yield)} Calories Per Serving</div>
                <div class='recipe-yield'>${Number.parseFloat(recipe.yield).toFixed(2)} Servings Total</div>
                <h3>
                    ${getUISVGSymbol('grocery')}
                    ${recipe.ingredientLines.length} Ingredients
                </h3>
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
                <div class='dialog-box-options'>
                    <button 
                        id='dialog-box-cook-option'
                        onClick="dialogRecipeAction(this, 'cook', ${index})"
                    >
                        ${getUISVGSymbol(`cook`)}
                    </button>
                    <button 
                        id='dialog-box-grocery-option'
                        onClick="dialogRecipeAction(this, 'grocery', ${index})"
                    >
                        ${getUISVGSymbol('grocery')}
                    </button>
                    <button 
                        id='dialog-box-cancel-option'
                        onClick="dialogRecipeAction(this, 'remove')"
                    >
                        ${getUISVGSymbol('cancel')}
                    </button>
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
    $('#grocery-list-count-badge').text(groceryList.length)
    let groceryListHTML = ``
    if(!groceryList.length){
        $('#grocery-list-count-badge').css('display', 'none');
        groceryListHTML = (
            `<div class='grocery-list-no-ingredients'>
                ${getUISVGSymbol('grocery')}
                <span>No Groceries</span>
            </div>`
        )
    }
    else{
        $('#grocery-list-count-badge').css('display', 'block');
        groceryListHTML = groceryList.map(grocery=>{
            return (
                `<div class='grocery-ingredient'>
                    <div class='grocery-ingredient-name'>
                        <input type='text'
                            value='${grocery.name}'
                            class='grocery-ingredient-name-input'
                            onFocus='ingredientFocus(this, true)'
                            onBlur='ingredientFocus(this,false)'
                            onInput="alterIngredientName('${grocery.id}', this, 'grocery')"
                        >
                    </div>
                    <div class='grocery-ingredient-options'>
                        <button 
                            id='grocery-remove-option'
                            class='grocery-ingredient-option-button remove-option'
                            onClick="groceryAction('${grocery.id}', 'remove')"
                        >
                            ${getUISVGSymbol('cancel')}
                        </button>
                        <button
                            id='grocery-cart-option'
                            class='grocery-ingredient-option-button cart-option'
                            onClick="groceryAction('${grocery.id}', 'cart')"
                        >
                            ${getUISVGSymbol('carted')}
                        </button>
                        <div class='grocery-remove-options' id='grocery-remove-options-id-${grocery.id}'>
                            <button 
                                class='grocery-remove-option confirm' 
                                onClick="groceryAction('${grocery.id}', 'removeConfirm')">
                                ${getUISVGSymbol('grocery')}
                            </button>
                            <button 
                                class='grocery-remove-option cancel' 
                                onClick="groceryAction('${grocery.id}', 'removeCancel')">
                                ${getUISVGSymbol('cancel')}
                            </button>
                        </div>
    
                        <div class='grocery-cart-options' id='grocery-cart-options-id-${grocery.id}'>
                            <button 
                                class='grocery-cart-option confirm' 
                                onClick="groceryAction('${grocery.id}', 'cartConfirm')">
                                ${getUISVGSymbol('carted')}
                            </button>
                            <button 
                                class='grocery-cart-option cancel' 
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
        $('#grocery-list-count-badge').css('display', 'none');
        cartedListHTML = (
            `<div class='cart-list-no-ingredients'>
                ${getUISVGSymbol('carted')}
                <span>Shopping Cart Empty!</span>
            </div>`
        )
    }
    else{
        // Creates Shopping Cart List Elements when elements are carted
        cartedListHTML = cartedList.map((carted)=>{
            return (
                `<div class='cart-ingredient'>
                    <div class='cart-ingredient-name'>
                        <input type='text'
                            value='${carted.name}'
                            class='cart-ingredient-name-input'
                            onFocus='ingredientFocus(this, true)'
                            onBlur='ingredientFocus(this,false)'
                            onInput="alterIngredientName('${carted.id}', this, 'grocery')"
                        >
                    </div>
                    <div class='cart-ingredient-options'>
                        <button 
                            id='grocery-infridge-option'
                            class='grocery-ingredient-option-button decart-option'
                            onClick="groceryAction('${carted.id}', 'decart')"
                        >
                            ${getUISVGSymbol('carted')}
                        </button>
                        <button 
                            id='grocery-infridge-option'
                            class='grocery-ingredient-option-button infridge-option ${(!carted.available) ? 'infridge-option-unavailable': 'infridge-option-available'}'
                            onClick="groceryAction('${carted.id}', 'infridge')"
                        >
                            ${getUISVGSymbol('fridge')}
                        </button>
                        <div class='grocery-infridge-options' id='grocery-infridge-options-id-${carted.id}'>
                            <button 
                                class='grocery-infridge-option confirm' 
                                onClick="groceryAction('${carted.id}', 'infridgeConfirm')">
                                ${getUISVGSymbol('fridge')}
                            </button>
                            <button 
                                class='grocery-infridge-option cancel' 
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
        $(`#grocery-remove-options-id-${id}`).animate({width: '0%'}, pace - 20)
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

async function submitRecipeQuery(queryString, count = 18, random = false){
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
    if(type == 'cook'){ return `<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 113.33 149.86"><path d="M376.26-60.73a56.64,56.64,0,0,0,28.41-49.11A56.67,56.67,0,0,0,348-166.5a56.67,56.67,0,0,0-56.67,56.66A56.67,56.67,0,0,0,348-53.17a56.63,56.63,0,0,0,16.21-2.37l16.07,35.07A6.55,6.55,0,0,0,389-17.24h0a6.56,6.56,0,0,0,3.23-8.69Zm-68.93-49.11A40.66,40.66,0,0,1,348-150.5a40.66,40.66,0,0,1,40.67,40.66A40.67,40.67,0,0,1,348-69.17,40.67,40.67,0,0,1,307.33-109.84Z" transform="translate(-291.33 166.5)"/><polygon points="74.74 80.06 83.27 76.16 77.4 63.36 77.29 63 63.32 67.2 61.05 62.25 60.94 61.88 47.99 65.78 45.58 60.5 45.47 60.13 24.51 66.44 27.21 75.42 40.29 71.48 42.26 75.77 42.68 77.17 42.87 77.11 42.91 77.2 43.55 76.91 55.77 73.23 58.39 78.95 61.4 77.57 72.12 74.34 74.74 80.06"/><polygon points="80.41 53.55 88.94 49.65 83.07 36.85 82.96 36.48 68.99 40.69 66.72 35.73 66.61 35.37 53.66 39.27 51.24 33.98 51.14 33.62 30.18 39.93 32.88 48.91 45.96 44.97 47.93 49.26 48.35 50.66 48.54 50.6 48.58 50.69 49.23 50.4 61.44 46.72 64.06 52.44 67.07 51.06 77.79 47.83 80.41 53.55"/></svg>` }
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