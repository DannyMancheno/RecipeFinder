
async function searchRecipe(queryString, random){
    return new Promise((resolve)=>{
        var appId = 'fe38140b'
        var apiKey = '9458afc7ed4bbd275c4ca83e4d421e8a'
        var accessPoint = 'https://api.edamam.com/api/recipes/v2';
        var searchURL = `${accessPoint}?type=public&q=${queryString}&app_id=${appId}&app_key=${apiKey}&calories=300&random=${random}`
    
        let xhr = new XMLHttpRequest();
        xhr.open(`GET`, searchURL);
        xhr.setRequestHeader('Content-Type', 'application/json');   
        xhr.onreadystatechange = function(){
            if(this.readyState === 4 && this.status === 200){
                resolve(xhr.responseText);
            }
        }
        xhr.send();
    })
}
