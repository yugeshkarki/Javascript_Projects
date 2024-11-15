let userscore=0;
let compscore=0;
const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#computer-score");
const msg=document.querySelector("#msg");
const choices=document.querySelectorAll(".choice");
const gencompchoice=()=>{
    const options=["rock","paper","scissor"];
    const randidx=Math.floor(Math.random()*3);
    return options[randidx];
}
const showwinner=(userwin ) =>{
    if(userwin){
        userscore++;
        userscorepara.innerText=userscore;
        msg.innerText="you win!";
        
        msg.style.backgroundColor="green";
      }
  else{
    compscore++;
    compscorepara.innerText=compscore;
    console.log("you  lose ");
    msg.innerText="you lose!";
    msg.style.backgroundColor="red";
  }
}
 const drawGAme= ()=>{
    console.log("game was draw");
    msg.innerText="GAme was draw !play again";
    msg.style.backgroundColor="black";
 }
const playGame=(userchoice)=>{
 console.log("user choice=",userchoice);
  const compchoice=gencompchoice();
  console.log("computer choice=",compchoice);
   if(userchoice===compchoice){
    drawGAme();
   }
   else{
    let userwin=true;
    if(userchoice==="rock"){
        userwin=compchoice==="paper" ?false:true;
    }
    else if(userchoice==="paper"){
        userwin=compchoice==="scissors"? flase:true;
    }
      else{
        compchoice==="rock"?false:true;
    }
    showwinner(userwin);
   }

}
  choices.forEach((choice) =>{
   
    choice.addEventListener("click", ()=>{
        let userchoice=choice.getAttribute("id");
      playGame(userchoice);
  })
  })