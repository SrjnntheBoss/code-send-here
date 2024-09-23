// let clickedskill; 
// let damage;
// let oponent;


// class Pokemon{
//     constructor(name , type , hp, skill, id, defence){
//         this.name = name;
//         this.type = type;
//         this.hp = hp;
//         this.skill = skill;
//         this.id = id;
//         this.defence = defence;
//         this.owner = false;
//     }
//     attack(oponent){
//         skills = selectedtofightpokemon.skill; // get all the skill of the pokemon 

//         // when the user click on the skill get it's damage value 


//         damage = clickedskill.damage;

//         // now damaging the oponent 

//         oponentHealth = oponent.selectedtofightpokemon.hp;

//         oponentHealth -=damage;
//         // if()what 
        
        

        

//     }
//     defence(){

//     }
   
// }
// const pokemon1 = new Pokemon("Pikachu", 'Electric',200,[attacks.thunderbolt,attacks.bite,attacks.scratch],7,70);
// const pokemon2 = new Pokemon("Giglypuff", 'Grass',200,[attacks.sleepysong,attacks.bite,attacks.scratch],7,60);
// const pokemon3 = new Pokemon("Charmander", 'Fire',200,[attacks.tornadoLeaf,attacks.bite,attacks.scratch],7,40);
// const pokemon4 = new Pokemon("Balbasaur", 'Grass',200,[attacks.solarbeam,attacks.bite,attacks.scratch],7,60);
// const pokemon5 = new Pokemon("Squirtle", 'Water',200,[attacks.hydropump,attacks.bite,attacks.scratch],7,70);
// const pokemon6 = new Pokemon("Starmi", 'Water',200,[attacks.punch,attacks.bite,attacks.scratch],7,60);
let clickedskill; 
let damage;
let oponent;


class Pokemon{
    constructor(name , type , hp, skill, id, defence){
        this.name = name;
        this.type = type;
        this.hp = hp;
        this.skill = skill;
        this.id = id;
        this.defence = defence;
        this.owner = false;
    }
    attack(oponent){
        skills = selectedtofightpokemon.skill; // get all the skill of the pokemon 

        // when the user click on the skill get it's damage value 


        damage = clickedskill.damage;

        // now damaging the oponent 

        oponentHealth = oponent.selectedtofightpokemon.hp;

        oponentHealth -=damage;
        // if()what 
        
        

        

    }
    defence(){

    }
   
}
const pokemon1 = new Pokemon("Pikachu", 'Electric',600,[attacks.thunderbolt,attacks.bite,attacks.scratch],7,70);
const pokemon2 = new Pokemon("Giglypuff", 'Grass',200,[attacks.sleepysong,attacks.bite,attacks.scratch],7,60);
const pokemon3 = new Pokemon("Charmander", 'Fire',200,[attacks.tornadoLeaf,attacks.bite,attacks.scratch],7,40);
const pokemon4 = new Pokemon("Balbasaur", 'Grass',200,[attacks.solarbeam,attacks.bite,attacks.scratch],7,60);
const pokemon5 = new Pokemon("Squirtle", 'Water',200,[attacks.hydropump,attacks.bite,attacks.scratch],7,70);
const pokemon6 = new Pokemon("Starmi", 'Water',200,[attacks.punch,attacks.bite,attacks.scratch],7,60);