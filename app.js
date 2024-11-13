let gameSeq=[];
let userSeq=[];
let btns =["yellow", "green", "red","purple"];
let start = false;
let level =0;
let maxScore = 0;
let h2 = document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(start == false){
        console.log("game started");
        start = true;
        levelup();
    }
});
function gameflash(btn){
    btn.classList.add("gameflash");
    setTimeout(function(){
        btn.classList.remove("gameflash");
    },100);
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },100);
}
function levelup(){
     userSeq = [];
    level++;
    h2.innerText = `level ${level}`;
    
    let randind = Math.floor(Math.random()*4);
    let randcolor = btns[randind];
    let randbtn = document.querySelector(`.${randcolor}`);
    gameSeq.push(randcolor);
    console.log(gameSeq);
    gameflash(randbtn);

}
function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){  
        if(userSeq.length == gameSeq.length){
            setTimeout(levelup,500);
        }
    }else{
        if (level > maxScore) {
            maxScore = level;
        }
        h2.innerHTML = `Game Over ! <br> Your score : <b> ${level}</b> <br> Your max Score : <b>${maxScore}</b> <br> Press any key to Restart`;
        reset();
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150);
    }
}
function btnpress(){
   let btn = this;
   userflash(btn);
   userColor = btn.getAttribute("id");
   userSeq.push(userColor);
   checkAns(userSeq.length-1);

}
let allbtns =document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
} 
function reset(){
     start = false;
     level =0;
     userSeq = [];
     gameSeq=[];
     
}