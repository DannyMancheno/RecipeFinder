
console.warn('Interface loaded');
 


// Common Functions
 
let IDElement = x =>{return document.getElementById(x)}
let ClassElement = x => {return document.getElementsByClassName(x)}
let QueryAll = x => {return document.querySelectorAll(x)}

IDElement('submitSearch').addEventListener('click',  async ()=>{
    
    let query = IDElement('typeSearch').value;

    let results = JSON.parse(await searchRecipe(query));
    console.log(results);

})