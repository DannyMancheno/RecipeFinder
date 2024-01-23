// Initial setup. 
$(document).ready(()=>{
    $('.app-option')[0].click();
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

    // Dealing with app bottom;
    let scrolledDown = $(document).scrollTop()
    let windowHeight = $(window).height();
    let documentHeight = $(document).height();

    if(scrolledDown + windowHeight <= documentHeight - 20 && isBottomRevealed){
        
        isBottomRevealed = false;
        $('#app-bottom').animate({
            bottom: '-260px',
            opacity: '.5'
        }, 300, ()=>{
        })
    }
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
    // $('#search-screen-search-recipes').html(await submitRecipeQuery($('#search-bar-input').val()));
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
        fridge.addIngredient(value)   
    }
    updateFridgeIngredientDisplay();
})

function updateFridgeIngredientDisplay(){
    let ingredients = fridge.getIngredients().map((ingredient)=>{
        return (
            `<div class='fridge-ingredient ${(ingredient.available) ? '' : 'fridge-ingredient-unavailable'}'>
                <div class='fridge-ingredient-name'>
                    <input type='text' 
                        value='${ingredient.name}' 
                        class='fridge-ingredient-name-input' 
                        onFocus='ingredientFocus(this, true)' 
                        onBlur='ingredientFocus(this,false)'
                        onInput="alterIngredientName('${ingredient.id}', this)"
                    >
                </div>
                <div class='fridge-ingredient-options'>
                    <button 
                        class='fridge-ingredient-option-button delete-option' 
                        onClick="fridgeAction('${ingredient.id}', 'delete')">
                        ${getUISVGSymbol('delete')}
                    </button>
                    <button 
                        class='fridge-ingredient-option-button grocery-option ${(ingredient.grocery) ? 'grocery-list': ''}' 
                        onClick="fridgeAction('${ingredient.id}', 'grocery')">
                        ${getUISVGSymbol('grocery')}
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
    });
    $('#fridge-ingredient-container').html(ingredients);
    $('#fridge-screen-total').text(`${ingredients.length} ingredients`);
    let Cooking = fridge.getIngredients().filter((item)=>{
        if(item.cook && item.available) return true;
        else{
            return false;;
        }
    })
    $('#ingredient-cook-total').text(`${Cooking.length} selected`)
    Cooking = Cooking.map(item=>{
        return (
            `<div class='cook-ingredient'>
                <div class='cook-ingredient-name'>
                    ${item.name}
                </div>
            </div>`
        )
    })
    $('#fridge-cooking-list').html(Cooking);
    $('#fridge-cooking-recipes-list').html(
        `<div class="no-recipes-searched">
            <img src="IMGs/Logo.svg">
            <p>Explore recipes from your fridge!</p>
        </div>`
    );
}

function fridgeAction(id, action){
    if(action == 'delete'){
        $(`#delete-option-id-${id}`).css({
            display: 'grid'
        })
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
            }
        }, 180)
    }
    else if(action == 'available'){
        fridge.switchAvailable(id);
        updateFridgeIngredientDisplay();
    }
    else if(action == 'grocery'){
        fridge.switchGrocery(id);
        updateFridgeIngredientDisplay();
    }
    else if(action == 'cook'){
        fridge.switchCooking(id);
        updateFridgeIngredientDisplay();
    }
}

function alterIngredientName(id, target){
    fridge.renameIngredient(id, target.value);
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
    }
    else{
        let selected = ''
        fridge.getIngredients().filter(item=>{
            if(item.cook) return true;
        }).forEach(item =>{
            selected += `${item.name} `
        })
        
        let result =  await submitRecipeQuery(selected, 6, true);
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

async function expandExploredData(index){
    let recipe = exploreData[index].recipe;
    $('body').append(
        `<div class='recipe-dialog-box'>
            <div class='dialog-box-recipe-container'>
                <img class='recipe-image' src='${recipe.image}'>         
                <div class='recipe-label'>${recipe.label}</div>
                <div class='recipe-calories'>${Math.floor(recipe.calories / recipe.yield)} Calories Per Serving</div>
                <div class='recipe-yield'>${recipe.yield} Servings Total</div>
                <h3> ${recipe.ingredientLines.length} Ingredients</h3>
                <div class='recipe-ingredient-list'>
                    ${ recipe.ingredientLines.map(ingredient => `<div class='recipe-ingredient'>${ingredient}</div>`).join('') }
                </div>
                <div class='dialog-box-options'>
                    <button 
                        id='dialog-box-cook-option'
                        onClick="dialogBoxRecipe('cook', ${index})"
                    >
                        ${getUISVGSymbol(`cook`)}
                    </button>
                    <button 
                        id='dialog-box-grocery-option'
                        onClick="dialogBoxRecipe('grocery', ${index})"
                    >
                        ${getUISVGSymbol('grocery')}
                    </button>
                    <button 
                        id='dialog-box-cancel-option'
                        onClick="dialogBoxRecipe()"
                    >
                        ${getUISVGSymbol('cancel')}
                    </button>
                </div>
            </div>
        </div>`
  );
}
var isCookActive = 0;
function dialogBoxRecipe(type, index){
    
    // Remove dialog box 
    $('.recipe-dialog-box').fadeOut()

    // Continue with dialog data
    if(type == 'cook'){
        isCookActive = 1;
    
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
        $('#fridge-explore-ingredients-button').text('Finished Cooking?');

    }
}

// Grocery screen ______________________________________________________________


// app bottom _______________________________________________________________

var isBottomRevealed = false;

$(window).on('scroll', ()=>{
    let scrolledDown = $(document).scrollTop()
    let windowHeight = $(window).height();
    let documentHeight = $(document).height();

    if(scrolledDown + windowHeight > documentHeight - 20 && !isBottomRevealed){
        isBottomRevealed = true;
        $('#app-bottom').animate({
            bottom: '0px',
            opacity: '1'
        }, 300, ()=>{
        })
    }
    else if(scrolledDown + windowHeight <= documentHeight - 20 && isBottomRevealed){
        isBottomRevealed = false;
        $('#app-bottom').animate({
            bottom: '-260px',
            opacity: '.5'
        }, 300, ()=>{
        })
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
    if(type == 'cook'){
        return (
            `<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 113.33 149.86">
                <path d="M376.26-60.73a56.64,56.64,0,0,0,28.41-49.11A56.67,56.67,0,0,0,348-166.5a56.67,56.67,0,0,0-56.67,56.66A56.67,56.67,0,0,0,348-53.17a56.63,56.63,0,0,0,16.21-2.37l16.07,35.07A6.55,6.55,0,0,0,389-17.24h0a6.56,6.56,0,0,0,3.23-8.69Zm-68.93-49.11A40.66,40.66,0,0,1,348-150.5a40.66,40.66,0,0,1,40.67,40.66A40.67,40.67,0,0,1,348-69.17,40.67,40.67,0,0,1,307.33-109.84Z" transform="translate(-291.33 166.5)"/><polygon points="74.74 80.06 83.27 76.16 77.4 63.36 77.29 63 63.32 67.2 61.05 62.25 60.94 61.88 47.99 65.78 45.58 60.5 45.47 60.13 24.51 66.44 27.21 75.42 40.29 71.48 42.26 75.77 42.68 77.17 42.87 77.11 42.91 77.2 43.55 76.91 55.77 73.23 58.39 78.95 61.4 77.57 72.12 74.34 74.74 80.06"/><polygon points="80.41 53.55 88.94 49.65 83.07 36.85 82.96 36.48 68.99 40.69 66.72 35.73 66.61 35.37 53.66 39.27 51.24 33.98 51.14 33.62 30.18 39.93 32.88 48.91 45.96 44.97 47.93 49.26 48.35 50.66 48.54 50.6 48.58 50.69 49.23 50.4 61.44 46.72 64.06 52.44 67.07 51.06 77.79 47.83 80.41 53.55"/>
            </svg>`
        ) 
    }
    else if(type == 'cancel'){
        return (
            `<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 152.49 152.49">
                <path d="M650.36-5106.22l-51.84,51.84,51.67,51.67a14.24,14.24,0,0,1,0,20.15h0a14.26,14.26,0,0,1-20.15,0l-51.67-51.67-51.83,51.83a14.24,14.24,0,0,1-20.15,0h0a14.24,14.24,0,0,1,0-20.15l51.83-51.83-52-52a14.24,14.24,0,0,1,0-20.15h0a14.26,14.26,0,0,1,20.15,0l52,52,51.84-51.84a14.26,14.26,0,0,1,20.15,0h0A14.26,14.26,0,0,1,650.36-5106.22Z" transform="translate(-502.05 5130.71)"/>
            </svg>`
        )
    }
    else if(type == 'grocery'){
        return (
            `<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150.79 113.3">
                <path d="M753,5238.41H731.65a8.62,8.62,0,0,0-.44-.78l-21.63-30.56a8.57,8.57,0,0,0-12-2h0a8.59,8.59,0,0,0-2,12l15.17,21.43h-50.4L675.52,5217a8.58,8.58,0,1,0-14-9.91l-21.63,30.56c-.17.25-.29.52-.44.78H619.37a8.58,8.58,0,0,0-8.57,8.58h0a8.57,8.57,0,0,0,8.31,8.56l20.83,46a8.57,8.57,0,0,0,5.42,15.22H727a8.57,8.57,0,0,0,5.36-15.27l20.81-45.92a8.58,8.58,0,0,0,8.39-8.57h0A8.58,8.58,0,0,0,753,5238.41ZM728.74,5269H643.56l-6.09-13.45h97.37ZM721,5286.16l-6.09,13.44H657.42l-6.09-13.44Z" transform="translate(-610.8 -5203.45)"/>
            </svg>`
        )
    }
    else if(type == 'fridge'){
        return (
            `<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 87.5 138.5">
                <path d="M184.25,199.17H114.92a9.08,9.08,0,0,0-9.09,9.08V328.58a9.09,9.09,0,0,0,9.09,9.09h69.33a9.08,9.08,0,0,0,9.08-9.09V208.25A9.07,9.07,0,0,0,184.25,199.17Zm-20.42,119a7.09,7.09,0,0,1-7.09,7.09H125.35a7.1,7.1,0,0,1-7.09-7.09V261.5a7.09,7.09,0,0,1,7.09-7.08h31.39a7.08,7.08,0,0,1,7.09,7.08Zm0-80.78a7.08,7.08,0,0,1-7.09,7.09H125.09a7.08,7.08,0,0,1-7.09-7.09v-20.5a7.09,7.09,0,0,1,7.09-7.09h31.65a7.09,7.09,0,0,1,7.09,7.09Zm19.95,83.67a4.2,4.2,0,1,1-8.39,0V214a4.2,4.2,0,1,1,8.39,0Z" transform="translate(-105.83 -199.17)"/>
            </svg>`
        )
    }
    else if(type == 'delete'){
        return (
            `<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 86.03 126.83">
                <path d="M78.34,9.94H60.46a7.48,7.48,0,0,0,.28-2A7.69,7.69,0,0,0,53.05.29H33A7.69,7.69,0,0,0,25.29,8a7.48,7.48,0,0,0,.28,2H7.69a7.69,7.69,0,0,0,0,15.38H78.34a7.69,7.69,0,0,0,0-15.38Z" transform="translate(0 -0.29)"/><path d="M76.44,31.9H9.6a8.33,8.33,0,0,0-8.33,8.33V118.8a8.32,8.32,0,0,0,8.33,8.32H76.44a8.32,8.32,0,0,0,8.32-8.32V40.23A8.33,8.33,0,0,0,76.44,31.9Zm-53.12,74a4.6,4.6,0,0,1-9.19,0V47.25a4.6,4.6,0,1,1,9.19,0Zm24.29,0a4.6,4.6,0,0,1-9.19,0V47.25a4.6,4.6,0,1,1,9.19,0Zm24.3-.78a4.6,4.6,0,0,1-9.19,0V46.47a4.6,4.6,0,1,1,9.19,0Z" transform="translate(0 -0.29)"/>
            </svg>`
        )
    }
    else if(type == 'fridge'){
        return (
            `<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 87.5 138.5">
                <path d="M184.25,199.17H114.92a9.08,9.08,0,0,0-9.09,9.08V328.58a9.09,9.09,0,0,0,9.09,9.09h69.33a9.08,9.08,0,0,0,9.08-9.09V208.25A9.07,9.07,0,0,0,184.25,199.17Zm-20.42,119a7.09,7.09,0,0,1-7.09,7.09H125.35a7.1,7.1,0,0,1-7.09-7.09V261.5a7.09,7.09,0,0,1,7.09-7.08h31.39a7.08,7.08,0,0,1,7.09,7.08Zm0-80.78a7.08,7.08,0,0,1-7.09,7.09H125.09a7.08,7.08,0,0,1-7.09-7.09v-20.5a7.09,7.09,0,0,1,7.09-7.09h31.65a7.09,7.09,0,0,1,7.09,7.09Zm19.95,83.67a4.2,4.2,0,1,1-8.39,0V214a4.2,4.2,0,1,1,8.39,0Z" transform="translate(-105.83 -199.17)"/>
            </svg>`
        )
    }
    else if(type == 'logo'){
        return (
            `<img src="IMGs/Logo.svg">`
        )
    }
    else{
        console.error('Error - Did not specify SVG return symbol');
    }
}