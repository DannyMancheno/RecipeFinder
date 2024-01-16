// Initial setup. 
$(document).ready(()=>{
    $('.app-option')[1].click();
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

$('.search_category').on('click', (event)=>{
    $('.search_category').removeClass('selected');
    $(event.target).addClass('selected');

    let categoryValue = event.target.value.split('_')[0].charAt(0).toUpperCase() + event.target.value.split('_')[0].slice(1);
    $('#search-bar-input').val(categoryValue)
    submitRecipeQuery(true)
})

$('#search-bar-button').on('mouseover', ()=>{
    $('#search-bar-button-image').css('animation', 'search-button-hovered .4s forwards')
})
$('#search-bar-button').on('mouseleave', ()=>{
    $('#search-bar-button-image').css('animation', '')
})

$('#search-bar-form').on('submit', (event)=>{
    // Remove New Input Styling
    $('#search-bar-form').removeClass('new-input-style');
    $('#search-bar-button-image').removeClass('new-input-style');
    event.preventDefault();
    submitRecipeQuery()
});

async function submitRecipeQuery(random = false){
    // Send user Input to async search recipe function (which sends query to API)
    let data = JSON.parse(await searchRecipe($('#search-bar-input').val(), random));
    let recipes = data.hits.map(dataItem =>{
        let recipe = dataItem.recipe;
        return (
            `<div class='recipe-container'>
                <img class='recipe-image' src='${recipe.image}'/>
                <div class='recipe-label'>${recipe.label}</div>
                <div class='recipe-ingredient-list'>
                    ${ recipe.ingredientLines.map(ingredient => `<div class='recipe-ingredient'>${ingredient}</div>`).join('') }
                </div>
            </div>`
        )
    });
    $('#search-screen-search-recipes').html(recipes);
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
    
    $('#tag-bar-input').val(``);
})

// Shop screen ______________________________________________________________