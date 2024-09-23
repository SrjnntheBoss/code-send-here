let trainer;
let trainer_poke;
class GameEngine {
    constructor() {
        let name1 = prompt("Enter the Player1 Name");
        let name2 = prompt("Enter the Player2 Name");
        this.player_1 = this.createPlayer(1,name1).name ;
        this.player_2 = this.createPlayer(2,name2).name;

        this.arena = new Arena();
        this.availablePokemons = []
        this.activePlayer = this.player_1;
        this.readyToBattle = false;
    };

    createAllAvailablePokemons() {
        const pikachu = pokemon1;
        const charmander = pokemon3;
        const balbasaur = pokemon4;
        const giglypuff= pokemon2; 
        const squirtle= pokemon5;
        const starmi = pokemon6;
        this.availablePokemons = [pikachu, charmander, balbasaur, giglypuff, squirtle, starmi];
    };

    createPlayer(id, name) {
        const player = new Trainer(name, id);
        return player;
    };

    createPlayer1(name) {
        this.player_1 = this.createPlayer(1, name);
    };

    createPlayer2(name) {
        this.player_2 = this.createPlayer(2, name);
    };

    selectRandomActivePlayer() {
        // Get the random number between 1 and 2 
        const randomInteger = Math.floor(Math.random() * (2 - 1 + 1)) + 1;

        //  select the active player based on the random number generation.....
         if(randomInteger === 1){
            this.activePlayer = this.player_1;
         }else{
            this.activePlayer = this.player_2;
         };

        //  alert(`the active player is ${this.activePlayer}`);
         return this.activePlayer;


        
    };
    addPokemonToPlayer(trainerClass, trainer_poke){
        // Select all divs with the class 'pokemons'
const divs = document.getElementsByClassName('pokemons');

// Convert HTMLCollection to an array
Array.from(divs).forEach(div => {
    div.addEventListener('click', () => {
        console.log(`You clicked on: ${div.id}`);
        
        let pokemonToRemove = document.getElementById(`${div.id}`);
        pokemonToRemove.remove();
        // now add to another div
        let trainerPlace = document.getElementsByClassName(`${trainerClass}`)[0];
        trainerPlace.innerHTML+=`
           <div class="${trainer_poke}" id = "${div.id}">
            ${div.id};
        </div>
        
        `
        addRestriction();
        ;
        

    

    });
 });
  };

    accessToActivePlayer(){
        let Active = this.activePlayer;

        // First the player will be assigned to choose pokemons to the bag
          console.log(Active); 
          console.log(this.player_1); 
          console.log(this.player_2); 

          if(Active == this.player_1){
                  this.addPokemonToPlayer('trainer1-place' , 'trainer1-pokemons');
                
                 

          }else{
            
                this.addPokemonToPlayer('trainer2-place' , 'trainer2-pokemons');

               
            }
              
            
            

          }
        


    
    
    addPokemonToBag(id) {
        const selectedPokemon = this.availablePokemons.find(poke => poke.id === id);

        // if (this.activePlayer.bag.length < 3) {
        //     this.activePlayer.addToBag(selectedPokemon);
        // }

        this.render();
        

        let pokemon_name = gameEngine.availablePokemons;
        // Load all the pokemons to the pokemon container
        const addpoke = document.getElementsByClassName('allpokemons')[0];
        let pokemonsHTML = '';
    
        for (let i = 0; i < 6; i++) {
            pokemonsHTML+= `
               
                <div class="pokemons" id = "${pokemon_name[i].name}">
                    ${pokemon_name[i].name}
                </div>
            `
        };
        addpoke.innerHTML = pokemonsHTML;


    };



    addPokemonToArena(pokemon) {
        this.activePlayer.addPokemonToArena(pokemon)

        //  ADD THE SELECTED POKEMON TO THE ARENA
        this.arena.addPokemon(pokemon)

        //  CHECK THE NUMBER OF POKEMONS ADDED TO THE ARENA

        //  ENABLE SKILL SELECTION STAGE AFTER BOTH PLAYERS HAVE ADDED THE POKEMONS TO THE ARENA

    };

    render() {

    }

    rendeAvailablePokemons() {
        const availableContainer = document.querySelector('.allPokemons');
        const allPokemons = this.availablePokemons;
        const allPokeDivs = allPokemons.map(poke => {
            const newPokeDiv = document.createElement('div');
            newPokeDiv.className = `pokeball ${poke.name}`;
            newPokeDiv.innerText = poke.name;
            return newPokeDiv;
        })


    }

    renderBags() {

    }

    renderPlayers() {

    }


};

// // Add restriction

function addRestriction(){
    const trainer1div = document.getElementById('trainer1-pokemons');
    const trainer2div = document.getElementById('trainer2-pokemons');
    if(trainer1div && trainer1div.children.length<=3){
        this.addPokemonToPlayer('trainer2-place' , 'trainer2-pokemons');
        console.log(document.getElementById('trainer1-pokemons').children.length);

    }else if(trainer2div && trainer2div.children.length<=3){
        this.addPokemonToPlayer('trainer2-place' , 'trainer2-pokemons');

    }
};
function movePokemonToArena(){
    // Get the queryselector of all
    let divs = document.getElementsByClassName('pokemons');
    Array.from(divs).forEach(div =>{
        div.addEventListener('click' , () =>{
            console.log(`U clicked on ${div.id}`);
        })
    })
    

    
}
