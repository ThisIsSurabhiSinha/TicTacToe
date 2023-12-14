
let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newgamebtn = document.querySelector("#newgame");
let msgcon = document.querySelector(".msg");
let p = document.querySelector("#displaywinner");
let turn = true; //O
let count = 0;
let disableBtn=()=>{{
  boxes.forEach((box)=>{

    box.disabled=true;
  })
}}
let EnableBtn=()=>{{
  boxes.forEach((box)=>{
    
    box.disabled=false;
  })
}}
const win = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const Reset = () => {
  turn = true;
  count=0;
  for (box of boxes) {
    box.disabled = false;
    box.innerText = "";
    box.style.backgroundColor="#9DA39A";
    box.style.color = "#040f4b";
  }
  msgcon.classList.add("hide");
};
function removeHideClassWithDelay() {
  setTimeout(() => {
    msgcon.classList.remove("hide");
  }, 600); // Replace 2000 with the delay time in milliseconds (2 seconds in this example)
}

let flag = 0;
const checkWinner = () => {
  for (let pat of win) {
    let box1 = boxes[pat[0]].innerText;
    let box2 = boxes[pat[1]].innerText;
    let box3 = boxes[pat[2]].innerText;

    if (box1 != "" && box2 != "" && box3 != "") {
      if (box1 === box2 && box2 === box3) {
        flag = 1;
        winner = box1;
        disableBtn();
        p.innerText = "Congratulations !! Winner is " + winner;
        removeHideClassWithDelay();
        boxes[pat[0]].style.backgroundColor = "green";
        boxes[pat[1]].style.backgroundColor = "green";
        boxes[pat[2]].style.backgroundColor = "green";
        boxes[pat[0]].style.color = "#8ac926";
        boxes[pat[1]].style.color = "#8ac926";
        boxes[pat[2]].style.color = "#8ac926";
        count = 0;
        disableBtn();
        // for (box of boxes) {
        //   box.disabled = false;
        //  box.style.backgroundColor="#9DA39A";
        // }
        return true;
      }
    }
  }
  return false;
};
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn) {
      box.innerText = "O";
      turn = false;
    } else {
      box.innerText = "X";
      turn = true;
    }
    count++;
    box.disabled = true;
    let g = checkWinner();
    if (count == 9 && g==false) {
      p.innerText = " It's a draw.Try again";
      msgcon.classList.remove("hide");
      count = 0;
      for (box of boxes) {
        box.disabled = false;
      }
    }
  });
});
reset.addEventListener("click", Reset);
newgamebtn.addEventListener("click", Reset);

