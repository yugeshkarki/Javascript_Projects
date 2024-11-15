let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#resetbtn");
let newbtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turnO=true;
const winpattrens=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
     [2,5,8],
    [2,4,6],
    [3,4,5],
   [6,7,8],
  ];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        
     if(turnO){
        box.innerText="O";
        turnO=false;
     }
     else{
        box.innerText="X";
        turnO=true;
     }
     box.disabled=true;
     checkwinner();
    });
});
const disabledboxes=() =>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableboxes=() =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner= (winner) =>{
msg.innerText='congratulations ,winner is $(winner)';
msgcontainer.classList.remove("hide");
disabledboxes();
}
 
   const checkwinner = () => {
   for(let pattren of winpattrens){
    let pos1val= boxes[pattren[0]].innerText;
    let pos2val= boxes[pattren[1]].innerText;
    let pos3val= boxes[pattren[2]].innerText;

    if(pos1val !="" && pos2val !=""&& pos3val !="" ){
        if(pos1val===pos2val && pos2val===pos3val){
            console.log("winner",pos1val);
            showWinner(pos1val);
        }
    }
   }
   };
   const resetgame=()=>{
    turnO=true;
    enableboxes();
    msgcontainer.classList.add("hide");
   }
   newbtn.addEventListener("click",resetgame);
  resetbtn.addEventListener("click",resetgame);