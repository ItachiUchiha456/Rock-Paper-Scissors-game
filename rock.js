let temp1
var humans
let comp
let body = document.querySelector("body")
let human = document.getElementById("humanity")
let titan = document.getElementById("titans")

let lastLine = document.getElementById("lastLine")
let user
//Execution
function Rock(){
    user = 1
      human.innerHTML = "Humanity chose their most powerful weapon 'The Rock'💪"
      comp =  Math.floor((Math.random()*3)+1);
      compChoice()
      console.log(comp)
      GameLogic(user,comp)
} 

function Paper(){
    user = 2
    human.innerHTML = "Humanity chose Paper"
    comp =  Math.floor((Math.random()*3)+1);
    compChoice()
    GameLogic(user,comp);
}

function Scissor(){
    user = 3
    human.innerHTML = "Humanity chose Scissor"
    comp = Math.floor((Math.random()*3)+1);
    compChoice()
    GameLogic(user,comp);
}

let compC = Math.floor((Math.random()*3)+1)

//Comp choice
function compChoice(){
    if(comp == 1){
        titan.innerHTML = "Titans chose normal Rock😆"
        return compC;
    }
    else if(comp == 2){
        titan.innerHTML = "Titans chose paper"
        return compC
    }
    else if(comp == 3){
        titan.innerHTML = "Titans chose scissor"
        return compC
    }
    rounds(temp1)
}


//Game logic
function GameLogic(user,comp){

    if(user == 1 & comp == 1){
        lastLine.innerHTML = "It's a tie👀"
        humans = 69
    }
    if(user == 2 & comp == 2){
        lastLine.innerHTML = "It's a tie👀"
        humans = 69
    }
    if(user == 3 & comp == 3){
        lastLine.innerHTML = "It's a tie👀"
        humans = 69
    }
    if(user == 1 & comp == 2){
        lastLine.innerHTML = "Titans won this round😢"
        humans = 0
    }
    if(user == 1 & comp == 3){
        lastLine.innerHTML = "Humanity won this round😇"
        humans = 1
    }
    if(user == 2 & comp == 1){
        lastLine.innerHTML = "Humanity won this round😇"
        humans = 1
    }
    if(user == 2 & comp == 3){
        lastLine.innerHTML = "Titans won this round😢"
        humans = 0
    }
    if(user == 3 & comp == 1){
        lastLine.innerHTML = "Titans won this round😢"
        humans = 0
    }
    if(user == 3 & comp == 2){
        lastLine.innerHTML = "Humanity won this round😇"
        humans = 1
    }
    al(humans)
    if(temp1 == 5){
        let again = document.getElementById("again")
        let winner = document.getElementById("winner")
        winner.innerHTML = "Humanity got saved from titans🥳"
        again.style.display = "block"
        
    }
    if(temp4 == 5){
        let again = document.getElementById("again")
        let winner = document.getElementById("winner")
        winner.innerHTML = "Titans erased the humanity☠️"
        again.style.display = "block"
    }
}

let mode = document.getElementById("mode")
let imgggg = document.getElementById('r');
let temp = 0;

mode.addEventListener("click",function(){
    if(temp == 0){
    let again = document.getElementById("again")
    body.style.backgroundColor = "#E7E9EC"
    body.style.color = "#48515B"
    imgggg.style.border = "5px solid purple"
    temp = 1;
    again.style.backgroundColor = "#48515B"
    again.style.color = "#E7E9EC"
}

    else{
        body.style.backgroundColor = "#131618"
        body.style.color = "#E7E9EC"
        imgggg.style.border = "5px solid purple"
        temp = 0;
    }
})
let b1 = document.getElementById("pl")
let b2 = document.getElementById("zr2")
temp1 = 0;
let temp4 = 0;
function al(humans){
    if(humans == 1){
        temp1 = temp1+1
        b1.innerHTML = temp1
    }
    if(humans == 0){
        temp4 = temp4+1
        b2.innerHTML = temp4
    }
}
function play(){
    location.reload()
}








