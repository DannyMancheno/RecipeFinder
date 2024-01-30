
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
    addIngredient(
        id = this.randomID(),
        name,
        available = true,
        grocery = false,
        cook = false,
        unshift = true
    ){
        if(unshift){
            this.ingredients.unshift({
                id: id,
                name: name,
                available: available,
                grocery: grocery,
                carted: false,
                cook: cook
            })
        }
        else{
            this.ingredients.push({
                id: id,
                name: name,
                available: available,
                grocery: grocery,
                carted: false,
                cook: cook
            })
        }
        this.saveFridgeState();
    },
    removeIngredient(id){
        this.ingredients = this.ingredients.filter((item)=>{
            if(item.id != id) return true;
            else return false
        })
        this.saveFridgeState();
    },
    switchCarted(id){
        this.ingredients = this.ingredients.map((item)=>{
            if(item.id == id) return {...item, carted: !item.carted}
            else return item
        })
        this.saveFridgeState();
    },
    doneCooking(){
        this.ingredients = this.ingredients.map((item)=>{
            return {...item, cook: false}
        })
        this.saveFridgeState();
    },
    cartAllAction(type){
        if(type == 'decart'){
            // Decart all carted
            this.ingredients = this.ingredients.map((item)=>{
                if(item.carted) return {...item, carted: false, grocery: true};
                else return item;
            })
        }
        else if(type == 'clear'){
            // Remove all carted from groceries
            this.ingredients = this.ingredients.map((item)=>{
                if(item.carted) return {...item, carted: false, grocery: false}
                else return item;
            })
        }
        else if(type == 'available'){
            // Mark all carted as available
            this.ingredients = this.ingredients.map((item)=>{
                if(item.carted) return {...item, grocery: false, available: true}
                else return item;
            })
        }
        else{
            console.error('cartAllAction error - incorrect parameter')
        }
        this.saveFridgeState();
    },
    switchGrocery(id){
        this.ingredients = this.ingredients.map((item)=>{
            if(item.id == id) return {...item, grocery: !item.grocery}
            else return item
        })
        this.saveFridgeState();
    },
    switchAvailable(id, state = null){
        this.ingredients = this.ingredients.map((item)=>{
            if(item.id == id){
                if(state !== null) return {...item, available: state}
                return {...item, available: !item.available}
            }
            else return item
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
    // fridge functions
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

