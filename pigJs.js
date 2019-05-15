var scores, roundScores, activePlayer, gamePlaying;

init();

var lastDice

//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

//var x = document.querySelector('#score-0').textContent;
//console.log(x);


/*
function btn() {
    //Do something here
}
btn();
*/
document.querySelector('.btn-roll').addEventListener('click', function() {
   if (gamePlaying) {
       // 1. Random numer
    var dice = Math.floor(Math.random() * 6) + 1
    var dice2 = Math.floor(Math.random() * 6) + 1
    // 2. Display result
    var diceDOM = document.querySelector('.dice')
    var diceDOM2 = document.querySelector('.dice2')
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    diceDOM2.style.display = 'block';
    diceDOM2.src = 'dice-' + dice2 + '.png';
       if(dice === 6 && lastDice === 6) {
       activePlayer = 0;
       document.querySelector('#score-' + activePlayer).textContent = '0';    
       } else if(dice !== 1) {
        //add score
        roundScore += dice + dice2;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        //next player
        nextPlayer();
        
        /*
        if(activePlayer === 0) {
            activePlayer = 1;
        } else {
            activePlayer = 0;
        }
        */
    }
       lastDice = dice;
   }
                  
    
}); 
           

document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {
     //Add CURRENT score to GLOBAL score
    scores[activePlayer] += roundScore;
    var input = document.querySelector('.final-score').value;
        var winningScore
        
        if(input) {
        winningScore = input;    
        } else {
            winningScore = 100;
        }
    
    //Update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    
    //Check if player won the game
    if (scores[activePlayer] >= winningScore) {
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.dice2').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        gamePlaying = false;
    } else {
        nextPlayer();
    }
       
    }
    
    
    
     
});


function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
        
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        
        
        //document.querySelector('.player-0-panel').classList.remove('active');
        //document.querySelector('.player-1-panel').classList.add('active');
        document.querySelector('.dice').style.display = 'none'
        document.querySelector('.dice2').style.display = 'none'
}

document.querySelector('.btn-new').addEventListener('click', init);


function init() {
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice2').style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = ('Player 1');
    document.getElementById('name-1').textContent = ('Player 2');
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    gamePlaying = true;
}
