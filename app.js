var blockValue = [];
var activePlayer = 1;

var block0 = document.querySelector(".block-0");
var block1 = document.querySelector(".block-1");
var block2 = document.querySelector(".block-2");
var block3 = document.querySelector(".block-3");
var block4 = document.querySelector(".block-4");
var block5 = document.querySelector(".block-5");
var block6 = document.querySelector(".block-6");
var block7 = document.querySelector(".block-7");
var block8 = document.querySelector(".block-8");

block0.addEventListener("click", function() {
  if (block0.textContent === "X" || block0.textContent === "O") {
  } else {
    if (activePlayer == 0) {
      block0.innerHTML = "X";
      activePlayer = 1;
      checkResult();
    } else {
      block0.innerHTML = "O";
      activePlayer = 0;
      checkResult();

    }
  }
});
block1.addEventListener("click", function() {
  if (block1.textContent === "X" || block1.textContent === "O") {
  } else {
    if (activePlayer == 0) {
      block1.innerHTML = "X";
      activePlayer = 1;
      checkResult();

    } else {
      block1.innerHTML = "O";
      activePlayer = 0;
      checkResult();

    }
  }
});
block2.addEventListener("click", function() {
  if (block2.textContent === "X" || block2.textContent === "O") {
  } else {
    if (activePlayer == 0) {
      block2.innerHTML = "X";
      activePlayer = 1;
      checkResult();

    } else {
      block2.innerHTML = "O";
      activePlayer = 0;
      checkResult();

    }
  }
});

block3.addEventListener("click", function() {
  if (block3.textContent === "X" || block3.textContent === "O") {
  } else {
    if (activePlayer == 0) {
      block3.innerHTML = "X";
      activePlayer = 1;
      checkResult();

    } else {
      block3.innerHTML = "O";
      activePlayer = 0;
      checkResult();

    }
  }
});
block4.addEventListener("click", function() {
  if (block4.textContent === "X" || block4.textContent === "O") {
  } else {
    if (activePlayer == 0) {
      block4.innerHTML = "X";
      activePlayer = 1;
      checkResult()
    } else {
      block4.innerHTML = "O";
      activePlayer = 0;
      checkResult()
    }
  }
});
block5.addEventListener("click", function() {
  if (block5.textContent === "X" || block5.textContent === "O") {
  } else {
    if (activePlayer == 0) {
      block5.innerHTML = "X";
      activePlayer = 1;
      checkResult()
    } else {
      block5.innerHTML = "O";
      activePlayer = 0;
      checkResult()
    }
  }
});
block6.addEventListener("click", function() {
  if (block6.textContent === "X" || block6.textContent === "O") {
  } else {
    if (activePlayer == 0) {
      block6.innerHTML = "X";
      activePlayer = 1;
      checkResult()
    } else {
      block6.innerHTML = "O";
      activePlayer = 0;
      checkResult()
    }
  }
});
block7.addEventListener("click", function() {
  if (block7.textContent === "X" || block7.textContent === "O") {
  } else {
    if (activePlayer == 0) {
      block7.innerHTML = "X";
      activePlayer = 1;
      checkResult()
    } else {
      block7.innerHTML = "O";
      activePlayer = 0;
      checkResult()
    }
  }
});
block8.addEventListener("click", function() {
  if (block8.textContent === "X" || block8.textContent === "O") {
  } else {
    if (activePlayer == 0) {
      block8.innerHTML = "X";
      activePlayer = 1;
      checkResult()
    } else {
      block8.innerHTML = "O";
      activePlayer = 0;
      checkResult()
    }
  }
});

function checkResult(){
    if (block1.textContent==="X" && block0.textContent=="X"  && block2.textContent=="X") {
        alert("Player "+ (activePlayer+1) +" Winner");
        location.reload();
    }
    else if (block1.textContent==="O" && block0.textContent=="O"  && block2.textContent=="O"){
        alert("Player "+ (activePlayer+1) +" Winner");
        location.reload();
    }
    else if (block3.textContent==="X" && block4.textContent=="X"  && block5.textContent=="X") {
        alert("Player "+ (activePlayer+1) +" Winner");
        location.reload();
    }
    else if (block3.textContent==="O" && block4.textContent=="O"  && block5.textContent=="O"){
        alert("Player "+ (activePlayer+1) +" Winner");
        location.reload();
    }
    else if (block6.textContent==="X" && block7.textContent=="X"  && block8.textContent=="X") {
        alert("Player "+ (activePlayer+1) +" Winner");
        location.reload();
    }
    else if (block6.textContent==="O" && block7.textContent=="O"  && block8.textContent=="O"){
        alert("Player "+ (activePlayer+1) +" Winner");
        location.reload();
    }
    else if (block0.textContent==="X" && block3.textContent=="X"  && block6.textContent=="X") {
        alert("Player "+ (activePlayer+1) +" Winner");
        location.reload();
    }
    else if (block0.textContent==="O" && block3.textContent=="O"  && block6.textContent=="O"){
        alert("Player "+ (activePlayer+1) +" Winner");
        location.reload();
    }
    else if (block1.textContent==="X" && block4.textContent=="X"  && block7.textContent=="X") {
        alert("Player "+ (activePlayer+1) +" Winner");
        location.reload();
    }
    else if (block1.textContent==="O" && block4.textContent=="O"  && block7.textContent=="O"){
        alert("Player "+ (activePlayer+1) +" Winner");
        location.reload();
    }
    else if (block2.textContent==="X" && block5.textContent=="X"  && block8.textContent=="X") {
        alert("Player "+ (activePlayer+1) +" Winner");
        location.reload();
    }
    else if (block2.textContent==="O" && block5.textContent=="O"  && block8.textContent=="O"){
        alert("Player "+ (activePlayer+1) +" Winner");
        location.reload();
    }
    else if (block0.textContent==="X" && block4.textContent=="X"  && block8.textContent=="X") {
        alert("Player "+ (activePlayer+1) +" Winner");
        location.reload();
    }
    else if (block0.textContent==="O" && block4.textContent=="O"  && block8.textContent=="O"){
        alert("Player "+ (activePlayer+1) +" Winner");
        location.reload();
    }
    else if (block2.textContent==="X" && block4.textContent=="X"  && block6.textContent=="X") {
        alert("Player "+ (activePlayer+1) +" Winner");
        location.reload();
    }
    else if (block2.textContent==="O" && block4.textContent=="O"  && block6.textContent=="O"){
        alert("Player "+ (activePlayer+1) +" Winner");
        location.reload();
    }else if(block0.textContent != "" && block1.textContent !="" && block2.textContent !="" && block3.textContent !="" &&
    block4.textContent != "" && block5.textContent !="" && block6.textContent !="" && block7.textContent !="" &&
    block8.textContent != ""  ){
      alert("Draw!!! ");
      location.reload();
      
    }
    document.querySelector(".player").innerHTML = (activePlayer+1);
}

