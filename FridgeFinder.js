
let fridge = {
    
    ingredients: [],
    randomID(){
        let RC = ()=>{ return String.fromCharCode(Math.floor(Math.random() * 25) + 65) }
        // Return 4 random chars + 6 digits based off Date object.
        return RC() + RC() + RC() + RC() + Math.floor(((Date.now() / 1000000) % 1) * 1000000);        
    },
    ingredientsUnavailable(){
        return this.ingredients.filter((item)=>{
            if(!item.available) return true;
        })
    },
    ingredientsAvailable(){
        return this.ingredients.filter((item)=>{
            if(item.available) return true;
        })
    },
    renameIngredient(id, name){
        this.ingredients = this.ingredients.map((item)=>{
            if(item.id == id) return {...item, name: name}
            else return item
        })
        this.saveFridgeState();
    },
    addIngredient(ingredient, available = true){
        this.ingredients.unshift({
            id: this.randomID(),
            name: ingredient,
            available: available,
            grocery: false,
            cook: false
        })
        this.saveFridgeState();
    },
    removeIngredient(id){
        this.ingredients = this.ingredients.filter((item)=>{
            if(item.id != id) return true;
            else return false
        })
        this.saveFridgeState();
    },
    switchGrocery(id){
        this.ingredients = this.ingredients.map((item)=>{
            if(item.id == id) return {...item, grocery: !item.grocery}
            else return item
        })
        this.saveFridgeState();
    },
    switchAvailable(id){
        this.ingredients = this.ingredients.map((item)=>{
            if(item.id == id){
                return {...item, available: !item.available}
            }
            else{
                return item
            }
        })
        this.saveFridgeState();
    },
    switchCooking(id){
        this.ingredients = this.ingredients.map((item)=>{
            if(item.id == id){
                return {...item, cook: !item.cook}
            } 
            else return item
        })
        this.saveFridgeState();
    },
    getIngredients(){
        return this.ingredients;
    },
    saveFridgeState(){
        localStorage.setItem(`FridgeMart_Fridge`,JSON.stringify(this.ingredients));
    },
    retrieveFridgeState(){
        return JSON.parse(localStorage.getItem(`FridgeMart_Fridge`));
    },
    resetFridgeState(){
        this.ingredients = [];
        this.saveFridgeState();
    },
}

if(localStorage.getItem(`FridgeMart_Fridge`) != null){
    fridge.ingredients = fridge.retrieveFridgeState()
}

