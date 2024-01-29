'use strict';

//Sélection des éléments
const totalScore1 = document.getElementById('total-score-player1');
const totalScore2 = document.getElementById('total-score-player2');
const tempScore1 = document.getElementById('temp-score-player1');
const tempScore2 = document.getElementById('temp-score-player2');
const diceGame = document.querySelector('.dice');
const btnNewGame = document.querySelector('.btn-newgame');
const btnRollDice = document.querySelector('.btn-roll-dice');
const btnHoldScore = document.querySelector('.btn-hold-score');
const greenDot1 = document.querySelector('.green-dot1');
const greenDot2 = document.querySelector('.green-dot2');

//Déclaration des variables
let globalScore1,globalScore2, tempScore, activePlayer, lose;

//initialisation des variables
initJeu();


//Lancement du dé
btnRollDice.addEventListener('click', ()=> {
    
lose=0;
if (globalScore1 >=100 || globalScore2 >=100) {
    initJeu();
                                            }

//résultat aléatoire
const dice = Math.trunc(Math.random()*6)+1;

switch(dice) {
    case 1:
        diceGame.src = 'assets/dice1.svg';
        tempScore=0;
       lose=1;
        if (activePlayer==1){
            document.getElementById('temp-score-player1').textContent ='0';
            activePlayer=2
            greenDot1.style.opacity = "0";
            greenDot2.style.opacity = "1";
        }
        else {activePlayer=1;
            document.getElementById('temp-score-player2').textContent ='0';
            greenDot1.style.opacity = "1";
            greenDot2.style.opacity = "0";

        }
        break;
    case 2:
        diceGame.src = 'assets/dice2.svg';
        break;
    case 3:
        diceGame.src = 'assets/dice3.svg'; 
        break;   
    case 4:
        diceGame.src = 'assets/dice4.svg';
        break; 
    case 5:
        diceGame.src = 'assets/dice5.svg'; 
        break;
    case 6:
        diceGame.src = 'assets/dice6.svg'; 
        break;
    default:           
        diceGame.src = 'assets/dice5.svg';
                 }

                 console.log(dice);                     
                 console.log(tempScore);

//Condition pour le comptage des points
    if (dice !== 1) {

    tempScore += dice;
    
    console.log(tempScore);
//document.getElementById('temp-score-player1').textContent = tempScore.toString(); 
   if (activePlayer==1){
    tempScore1.textContent = tempScore.toString();
                        }

   if (activePlayer==2){
     tempScore2.textContent = tempScore.toString();
                         }
                        }
       
                     });


btnHoldScore.addEventListener('click', ()=> {   
    console.log(tempScore);
        if (globalScore1 >=100 || globalScore2 >=100) {
            initJeu();
                                                    }
        if (lose!==1) 
            
            {
            document.getElementById('temp-score-player1').textContent ='0';  
            document.getElementById('temp-score-player2').textContent ='0';
            console.log(globalScore1);
            if (activePlayer==1){
            globalScore1+=tempScore;    
            totalScore1.textContent= globalScore1.toString(); 
            tempScore=0;
            activePlayer=2;
            greenDot1.style.opacity = "0";
            greenDot2.style.opacity = "1";

                                }
   else {
        globalScore2+=tempScore;
        totalScore2.textContent= globalScore2.toString(); 
        tempScore=0;
        activePlayer=1
        greenDot1.style.opacity = "1";
        greenDot2.style.opacity = "0";
                        }
                    }
                    

                                               })
                                               

btnNewGame.addEventListener('click', ()=> { 
        initJeu();
     })
        //console.log(tempScore);
        //console.log(globalScorecore);



 function initJeu () {
    tempScore=0;
    activePlayer=1;
    globalScore1=0;
    globalScore2=0;
    lose=0;
    tempScore1.textContent = tempScore.toString();
    tempScore2.textContent = tempScore.toString();
    totalScore1.textContent = globalScore1.toString();
    totalScore2.textContent = globalScore2.toString();
    greenDot1.style.opacity = "1";
    greenDot2.style.opacity = "0";

                            }
                                                
