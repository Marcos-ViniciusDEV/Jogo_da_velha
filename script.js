    //initial Data
    
    let square = {
        a1: '', a2: '', a3: '',
        b1: '', b2: '', b3: '',
        c1: '', c2: '', c3: ''
    };
    let player = '';
    let warning = '';
    let playing = false;
    let winner = '';

    //Events

    document.querySelector('.reset').addEventListener('click', reset);
    document.querySelectorAll('.item').forEach(item => {
        item.addEventListener('click', itemClick);
    });

reset();

    //functions

function itemClick(event){
    let item = event.target.getAttribute('data-item');
    if(square[item] === ''){
        square[item] = player;
        renderSquare();
        tooglePlayer();
    }
}



function reset(){
    warning = '';
    let ramdom = Math.floor(Math.random() * 2);
    player = ramdom === 0 ? 'X' : 'O';

    for(let i in square){
        square[i] = '';
    }

    playing = true;

    renderSquare();
    renderInfo();

}

function renderSquare() {
    for(let i in square){
    let item = document.querySelector(`div[data-item="${i}"]`);
    //item.innerHTML = square[i];
    if(square[i] !== ''){
        item.innerHTML = square[i];
    }else {
        item.innerHTML = '';
    }
}

    checkGame();
    

}


function renderInfo() {

    document.querySelector('.vez').innerHTML = player;
    document.querySelector('.resultado').innerHTML = warning;



}

function tooglePlayer() {
 player = player === 'X' ? 'O' : 'X';
 renderInfo();
}

function checkGame() {
    if(checkWinnerFor('X')) {
        warning = 'O jogador "X" venceu!';
        playing = false;
    }else if(checkWinnerFor('O')) {
        warning = 'O jogador "O" venceu!';
        playing = false;
    }else if(isFull()) {
        warning = 'O jogo empatou!';
        playing = false;
    }
}
  
function checkWinnerFor(player) {
    let pos = [
        'a1,a2,a3',
        'b1,b2,b3',
        'c1,c2,c3',

        'a1,b1,c1',
        'a2,b2,c2',
        'a3,b3,c3',

        'a1,b2,c3',
        'a3,b2,c1'

     
    ];


    for(let w in pos){
        let pArray = pos[w].split(',');
        let hasOn = pArray.every(option => square[option] === player);

        if(hasOn){
            return true;
        }
    }
    return false;
}


function isFull() {
    for(let i in square) {
        if(square[i] === '') {
            return false;
        }
    }
    return true;
}
 
    let pos = [
        'a1,a2,a3',
        'b1,b2,b3',
        'c1,c2,c3',

        'a1,b1,c1',
        'a2,b2,c2',
        'a3,b3,c3',

        'a1,b2,c3',
        'a3,b2,c1'

     
    ];


    console.log(pos[1].split(','));