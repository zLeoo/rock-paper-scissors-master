const rulesButton = document.querySelector('.btn-rules'); 
const modal = document.querySelector('.modal-bg');
const closeButton = document.querySelector('.modal-bg img');
const actionButtons = document.querySelectorAll('.game .btn');
const gameContainer = document.querySelector('.game');
const displayWinner = document.querySelector('.display-winner');
const displayButtons = document.querySelectorAll('.btn-wrapper .btn');
const finalMsg = document.querySelector('.final-msg');
const msg = document.querySelector('.final-msg h1');
const playButton = document.querySelector('.btn-play');
const scoreBoard = document.querySelector('.score');

let score = 0; 
let userAction;

function getRandomPlay(){
    let randomNum = Math.floor(Math.random() * actionButtons.length);
    let pc = actionButtons[randomNum].classList[2];
    return pc;
}

function actionHandler(){
    pc = getRandomPlay();
    player = this.classList[2];

    
    
    if(player === pc){
        //console.log('deu empate - pc: '+pc+' player: '+player);
        msg.innerHTML = 'Tied';
    }
    if(player === "btn-paper" && pc === "btn-rock" || player === "btn-rock" && pc === "btn-scissors" || player === "btn-scissors" && pc === "btn-paper"){
        //console.log('player ganhou do pc - player: '+player+' pc: '+pc);
        score++;
        
        msg.innerHTML = 'You win';
    }
    if(player === "btn-paper" && pc === "btn-scissors" || player === "btn-rock" && pc === "btn-paper" || player === "btn-scissors" && pc === "btn-rock"){
        //console.log('player perdeu do pc - player: '+player+' pc: '+pc);
        score--; 
        msg.innerHTML = 'You lose';
    }

    gameContainer.classList.add('remove-item');
    displayWinner.classList.remove('remove-item');

    for(let i = 0;  i < displayButtons.length; i++){
        let players = [player,pc];
        displayButtons[i].classList.add(players[i]);
        displayButtons[i].style.pointerEvents = "none";
    }

    setTimeout(() => {
        displayWinner.style.width = "900px";
        finalMsg.classList.remove('remove-item');
        playButton.addEventListener('click', playAgain);
        scoreBoard.innerHTML = score
    }, 2000);

}
function playAgain(){
    displayWinner.style.width = "700px";
    finalMsg.classList.add('remove-item');
    gameContainer.classList.remove('remove-item');
    displayWinner.classList.add('remove-item');
    displayButtons[0].classList.remove(player);
    displayButtons[1].classList.remove(pc);
}

actionButtons.forEach(action => action.addEventListener('click', actionHandler));

modal.addEventListener('click', () => {
    modal.classList.remove('modal-active');
})

rulesButton.addEventListener('click',() => {
    modal.classList.add('modal-active');
})

closeButton.addEventListener('click', () => {
    modal.classList.remove('modal-active');
})