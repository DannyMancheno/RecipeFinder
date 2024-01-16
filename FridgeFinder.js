

console.warn('FridgeFinder');


let fridge = {
    ingredients: [
        {
            name: "Cheese",
            available: false
        },{
            name: "Eggs",
            available: true
        },{
            name: "Spinach",
            available: true
        },{
            name: "Salt",
            available: false
        }
    ],
    randomID(){
        
    },
    shopMissing(){
        let missingIngredients = []
        this.ingredients.forEach((item)=>{
            if(!item.available){
                missingIngredients.push(item);
            }
        })
        return missingIngredients;
    }
    // searchAvailable(){

    // }

}

let shop = fridge.shopMissing();
console.log(shop);

