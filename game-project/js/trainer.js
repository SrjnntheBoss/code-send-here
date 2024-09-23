let selectedtofightpokemon;

class Trainer {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.bag = [];
    }
    attack() {
        // Ui banai paxi matra chainxa hola 
        


        
    }
   

    
}

// Create a new trainer 


function createTrainer(name ,id ){
   let  trainer1 = new Trainer(name, id);
    return trainer1;
};

// select pokemon for the fight 
function selectpokemon(trainer, selectedtofight){

    // check if the pokemon is already selected or not 
    if(trainer.bag.includes(selectedtofight)){
        selectedtofightpokemon = selectedtofight;
    }else{
        console.log("Sorry sir/madam u cannot select the pokemon ");

    }

}


// Add pokemon to the bag(selecting the pokemon)
function addpokemontobag(trainer, selectedpokemon){

    // Check if the bag is already occupied or not 
    if(trainer.bag.length<3){
        // Check if the selected pokemon already exists in the ball or not 
        for(let i = 0 ; i<3 ; i++)
            if(trainer.bag[i] == selectedpokemon){
                console.log("Error pokemon already taken");//Error message
            }else{
                trainer.bag.push(selectedpokemon);
                
            };

    }else{
        console.log('You cannot equip more than three pokemons!');//Error
    }

};
