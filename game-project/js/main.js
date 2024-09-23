const gameEngine = new GameEngine();
gameEngine.createAllAvailablePokemons();
gameEngine.render();
gameEngine.addPokemonToBag();
gameEngine.selectRandomActivePlayer();
// gameEngine.addPokemonToPlayer();
gameEngine.accessToActivePlayer();
giveNames();
dispActivePlayer();
movePokemonToArena();


// Stage-1.games==>createusername
function createUsers(){
    const name1 = document.querySelector('#name1').value;
    const name2 = document.querySelector('#name2').value;
    if(name1 === '' || name2 === ''){
        console.log("Error names of the trainer cannot be empty");
    }else{
        console.log("Player created Successfully", gameEngine);

        gameEngine.createPlayer1(name1);
        gameEngine.createPlayer2(name2);
        console.log("Player created Successfully");

    }

};
function removeFirstElems(){
    let firstelems = document.querySelectorAll('.player-1, .player-2'); 

    // Loop through the NodeList and remove each element
    firstelems.forEach(elem => {
        elem.parentNode.removeChild(elem);
    });

};
// Add second Element 
function addSecondElems(){
    const myElement = document.getElementById('main-id');
    myElement.innerHTML = `
    
    
    
    
    
    
    ` ;
};

// Give the names to the players
function giveNames(){
    let pl_1 = gameEngine.player_1;
    let pl_2 = gameEngine.player_2;

    document.getElementById('Player-1').innerText = pl_1;
    document.getElementById('Player-2').innerText = pl_2;

    console.log(pl_1);
    console.log(pl_2);



}
// Display Active Players
function dispActivePlayer(){
    active = gameEngine.activePlayer;
    
    document.getElementById('Aplayer').innerText = `The active Player is : ${active}!`;
}