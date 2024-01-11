
// Initial setup. 
$(document).ready(()=>{
    $('.app-option')[0].click();
})

// Find Recipes/ Search Fridge/ Shopping List Button UI Change
$('#app-option-buttons-container > button').on('click', (event)=>{
    $('.app-option').removeClass('selected');
    $(event.target).addClass('selected');
    
    $('.app-screen').css('display', 'none');
    $(`#app-screen-${event.target.value}`).css('display', 'grid');
})

// Search screen ____________________________________________________________
$('#app-screen-search').html(`
    <div id='search-screen-categories'>
        <h3>
            Categories
        </h3>
        <h4>Diet</h4>
        <button value='vegan_diet'>Vegan</button>
        <button value='vegetarian_diet'>Vegetarian</button>
        <button value='ketogenic_diet' class='selected'>Ketogenic</button>
        <button value='paleo_diet'>Paleo</button>

        <h4>Allergens</h4>
        <button value='dairy_allergy'>Dairy</button>
        <button value='gluten_allergy'>Gluten</button>
        <button value='selfish_allergy'>Selfish</button>
        <button value='nut_allergy'>Nut</button>

        <h4>Cuisines</h4>
        <button value='asian_cuisine'>Asian</button>
        <button value='italian_cuisine'>Italian</button>
        <button value='indian_cuisine'>Indian</button>
        <button value='french_cuisine'>French</button>
        
        <h4>Goals</h4>
        <button value='weight_goal'>Weight Loss</button>
        <button value='freshness_goal'>Freshness</button>
        <button value='nutrition_goal'>Nutrition</button>

    </div>
    <div id='search-screen-search-bar'>
        <h3>
            Recipes
        </h3>
        <form id='search-bar-form'>
            <input id='search-bar-input' type='text' placeholder='Search'>
            <button id='search-bar-button'>
                <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140.37 159.56">
                    <path d="M476.93,4693.6c-4.4-5.09-21.33-19.83-35.39-28.74a58.42,58.42,0,1,0-16.49,11.64c6.6,15.47,19.64,35.74,24.23,41.05,7.11,8.21,19.07,9.5,26.7,2.89S484,4701.81,476.93,4693.6Zm-115.88-70a39.08,39.08,0,1,1,39.08,39.08A39.12,39.12,0,0,1,361.05,4623.59Z" transform="translate(-341.63 -4565.1)"/>
                </svg>            
            </button>
        </form>
    </div>
    <div id='search-screen-search-recipes'>
    </div>
`)
$('#search-bar-button').on('mouseover', ()=>{
    $('#Layer_1').css('animation', 'search-button-hovered .4s forwards')
})
$('#search-bar-button').on('mouseleave', ()=>{
    $('#Layer_1').css('animation', '')
})

$('#search-bar-form').on('submit', (event)=>{
    
    // Remove New Input Styling
    $('#search-bar-form').removeClass('new-input-style');
    $('#Layer_1').removeClass('new-input-style');
    
    event.preventDefault();

    var $searchInput = $('#search-bar-input').val();
    
    let results = searchRecipe($searchInput);

    // searchRecipe()
})
$('#search-bar-input').on('keydown', ()=>{

    // Add New Input Styling
    $('#search-bar-form').addClass('new-input-style');
    $('#Layer_1').addClass('new-input-style');
  
})
// Fridge screen ____________________________________________________________
// Shop screen ______________________________________________________________
