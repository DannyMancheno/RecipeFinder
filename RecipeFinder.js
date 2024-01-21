// Raw data function

async function searchRecipeAPI(queryString, random){
    return new Promise((resolve, reject)=>{
        var appId = 'fe38140b'
        var apiKey = '9458afc7ed4bbd275c4ca83e4d421e8a'
        var accessPoint = 'https://api.edamam.com/api/recipes/v2';
        var searchURL = `${accessPoint}?type=public&q=${queryString}&app_id=${appId}&app_key=${apiKey}&random=${random}`
    
        let xhr = new XMLHttpRequest();
        xhr.open(`GET`, searchURL);
        xhr.setRequestHeader('Content-Type', 'application/json');   
        xhr.onload = function(){
            let count = JSON.parse(xhr.responseText).count
            if(count){
                resolve(xhr.responseText);
            }
            else{
                reject('No recipes found!');
            }
        }
        xhr.send();
    })
}

