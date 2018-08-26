// var stringOutput = document.getElementById("stringOutput");
// stringOutput.textContent = "Chump";
// var mainOutput = document.getElementById("mainOutput");
// stringOutput.textContent += "shushamushamsosconstantinople";
// console.log(stringOutput.textContent);
// console.log(mainOutput.textContent);
//
// const mainScreen = document.getElementById("mainScreen");
// mainScreen.children[0].textContent = "Hello boys";
// console.log(mainScreen.innerHTML);

// Okay, so far I have a good idea of what I have to do. Each button has a different process associated with it. Clear, delete, help is pretty independent. The idea is to have a main output that takes in numbers specifically and when a operator button is clicked, we push it all to the string output. The event of equal sign being clicked will call a function that evaluates the string output, which will probably be the most difficult part since we have to do order of operations. Maybe a multi step process with validation first and foremost. Parenthesis priority will take a while though it really is just slicing the portion, evaluating and returning it back kinda like recursion. +- sign change is simply to change the sign of the mainOutput to negative. Don't forget to convert string to number when evaluating.

// var stringOutput = document.getElementById("stringOutput");
// const buttons = document.querySelectorAll(".button");
// buttons.forEach(button => {
//   button.addEventListener("click", (e) => {
//     stringOutput.textContent += button.children[0].textContent;
//   })
// })

// isNaN(passiveExpression.textContent.slice(-1)) && passiveExpression.textContent.slice(-1) != "." && passiveExpression.textContent.slice(-1) != "(" &&
// passiveExpression.textContent.slice(-1) != ")"

var activeExpression = document.getElementById("activeExpression");
var passiveExpression = document.getElementById("passiveExpression");

function activeEventListener(){
  const activeButtons = document.querySelectorAll(".active");
  activeInput(activeButtons);
}
function activeInput(activeButtons){
  activeButtons.forEach(button => {
    button.addEventListener("click", (e) => {
      if(activeExpression.textContent === "Invalid Input"){
        activeExpression.textContent = "";
      }
      activeExpression.textContent += button.children[0].textContent;

    })
  });
}

function passiveEventListener(){
  const passiveButtons = document.querySelectorAll(".passive");
  passiveInput(passiveButtons);
}
function passiveInput(passiveButtons){
  passiveButtons.forEach(button => {
    button.addEventListener("click", (e) => {
      if(activeExpression.textContent === "" && passiveExpression.textContent === ""){
        activeExpression.textContent = "Invalid Input";
      }else if(activeExpression.textContent === "" && (passiveExpression.textContent.slice(-1) === "+" ||
      passiveExpression.textContent.slice(-1) === "-" ||
      passiveExpression.textContent.slice(-1) === "x" ||
      passiveExpression.textContent.slice(-1) === "/" ||
      passiveExpression.textContent.slice(-1) === "^" ||
      passiveExpression.textContent.slice(-1) === "%")){
        passiveExpression.textContent = passiveExpression.textContent.slice(0, passiveExpression.textContent.length - 1);
        passiveExpression.textContent += button.children[0].textContent;
      }else{
        if(activeExpression.textContent === "Invalid Input"){
          return;
        }else{
          passiveExpression.textContent += activeExpression.textContent;
          passiveExpression.textContent += button.children[0].textContent;
          activeExpression.textContent = "";
        }

        // passiveExpression.textContent += activeExpression.textContent + button.children[0].textContent;
        // activeExpression.textContent = "";
      }


    })
  })
}

// const activeButtons = document.querySelectorAll(".active");
// activeButtons.forEach(button => {
//   button.addEventListener("click", (e) => {
//     activeExpression.textContent += button.children[0].textContent;
//   })
// });

// console.log("Hello");
// const active = document.querySelectorAll(".active");
// active.forEach(activeButton => {
//   activeButton.addEventListener("click", (e) => {
//     console.log("Hello");
//     // activeExpression.textContent += "crest";
//   })
// });




function clearEventListener(){
  const clearButton = document.getElementById("clearButton");
  clearButton.addEventListener("click", (e) =>{
    clear();
  });
}
function clear(){
  passiveExpression.textContent = "";
  activeExpression.textContent = "";
}

function deleteEventListener(){
  const deleteButton = document.getElementById("deleteButton");
  deleteButton.addEventListener("click", (e) =>{
    del();
  });
}
function del(){
  if(activeExpression.textContent.length != 0){
    if(passiveExpression.textContent.slice(-1) === "="){
      passiveExpression.textContent = "";
    }else{
      activeExpression.textContent = activeExpression.textContent.slice(0, activeExpression.textContent.length - 1);
    }

  }else{
    if(isNaN(passiveExpression.textContent.slice(-1))){
      passiveExpression.textContent = passiveExpression.textContent.slice(0, passiveExpression.textContent.length - 1);
    }else{
      passiveExpression.textContent = "";
    }
  }
}

function signEventListener(){
  const signButton = document.getElementById("signButton");
  signButton.addEventListener("click", (e) => {
    changeSign();
  });
}
function changeSign(){
  if(activeExpression.textContent.slice(0,1) === "-"){
    activeExpression.textContent = activeExpression.textContent.slice(1);
  }else{
    activeExpression.textContent = "-" + activeExpression.textContent;
  }
}

function decimalEventListener(){
  const decimalButton = document.getElementById("decimalButton");
  decimalButton.addEventListener("click", (e) => {
    if(activeExpression.textContent.length === 0){
      activeExpression.textContent += "0."
    }
    var containsDecimal = false;
    var string = activeExpression.textContent;
    var i = 0;
    for(i; i < string.length; i++){
      if(string[i] === "."){
        containsDecimal = true;
      }
    }
    if(containsDecimal === true){
      console.log("Already have a decimal, error message but does nothing.");
    }else{
      activeExpression.textContent += ".";
    }
  })
}

clearEventListener();
deleteEventListener();
signEventListener();
activeEventListener();
passiveEventListener();
decimalEventListener();
