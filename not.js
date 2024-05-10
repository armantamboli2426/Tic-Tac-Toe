let boxes=document.querySelectorAll(".box");
let reset=document.querySelector(".reset");
let newbtn=document.querySelector(".op");
let msgcon=document.querySelector(".msgcon");
let msg=document.querySelector(".msg");
let turnO=true;
const winningpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],

]
const resetgame=()=>{
    turnO = true;
    enableboxes();
    msgcon.classList.add("hide");
}
boxes.forEach((box)=>{
box.addEventListener("click",()=>{

if(turnO){
    box.innerText="o";
    turnO=false;
    }else{
        box.innerText="x";
        turnO=true;
    }
    box.disabled=true;
    checkwinner();
})
}) 

const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showwinner=(winner)=>{
    msg.innerText= `congratulation winner is ${winner}`
    msgcon.classList.remove("hide");
    boxes.forEach((box) => {
        box.disabled = true;
    });
};
  

const checkwinner = () => {
    for (pattern of winningpatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
            if (pos1 === pos2 && pos2 === pos3) {
                showwinner(pos1);
                return; 
            }
        }
    }
};
newbtn.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);