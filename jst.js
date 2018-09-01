// Plan on adding support for keyboard and touchscreen by simply adding eventListeners for keydown as well as touch. Right now the calculator is functional through mouse clicks so that's pretty much the assignment, but I want to make it something I am proud of and can show off. So more work later.
// Forgot that I need to do something about the ? button. Maybe open an information window, though I don't know how to do that just yet...
// Keep in mind that after you finish this whole project, it will be in your best interest to actually present the readMes in a respectable fashion. Make your Github portfolio impressive and actually do a respectable resume.

var activeExpression = document.getElementById("activeExpression");
var passiveExpression = document.getElementById("passiveExpression");

function activeEventListener(){
  const activeButtons = document.querySelectorAll(".active");
  activeInput(activeButtons);
}
function activeInput(activeButtons){
  activeButtons.forEach(button => {
    button.addEventListener("click", (e) => {
      if(activeExpression.textContent.length < 28){
        if(activeExpression.textContent === "Invalid Input"){
          activeExpression.textContent = "";
        }else if(activeExpression.textContent.slice("-1") === ")"){
          console.log("Error, do nothing.");
        }
        activeExpression.textContent += button.children[0].textContent;
      }
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
      passiveExpression.textContent.slice(-1) === "*" ||
      passiveExpression.textContent.slice(-1) === "/" ||
      passiveExpression.textContent.slice(-1) === "^" ||
      passiveExpression.textContent.slice(-1) === "%")){
        passiveExpression.textContent = passiveExpression.textContent.slice(0, passiveExpression.textContent.length - 1);
        passiveExpression.textContent += button.children[0].textContent;
      }else if(passiveExpression.textContent.slice(-1) === "="){
        passiveExpression.textContent = activeExpression.textContent + button.children[0].textContent;
        activeExpression.textContent =  "";
      }else{
        if(activeExpression.textContent === "Invalid Input"){
          return;
        }else{
          passiveExpression.textContent += activeExpression.textContent;
          passiveExpression.textContent += button.children[0].textContent;
          activeExpression.textContent = "";
        }
      }


    })
  })
}

function equalsEventListener(){
  const equalsButton = document.getElementById("equalsButton");
  equalsButton.addEventListener("click", (e) => {
    evaluate();
  })
}
function evaluate(){
  if(activeExpression.textContent.length = 0){
    console.log("Error. Incomplete expression");
  }else if(passiveExpression.textContent.slice(-1) === "="){
    console.log("Do nothing.");
  }else{
    // Add in an if statement for errors in the eval function. It should change Active
    passiveExpression.textContent += activeExpression.textContent;
    var evaluateString = passiveExpression.textContent;
    var i = 0;
    while(evaluateString.includes("^")){
      if(evaluateString[i] === "^"){
        var firstHalf = evaluateString.slice(0, i);
        var secondHalf = evaluateString.slice(i+1, evaluateString.length);
        evaluateString = firstHalf.concat("**", secondHalf);
      }
      i++;
    }
    evaluateString = eval(evaluateString);
    activeExpression.textContent = evaluateString;
    passiveExpression.textContent += "=";
  }
}



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
      activeExpression.textContent = activeExpression.textContent.slice(0, activeExpression.textContent.length - 1);
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
    if(passiveExpression.textContent.slice(-1) === "="){
      passiveExpression.textContent = "";
      activeExpression.textContent = "0.";
    }
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

function leftParenthesisEventListener(){
  const leftButton = document.getElementById("leftParenthesisButton");
  leftButton.addEventListener("click", (e) => {
    leftParenthesis(leftButton);
  })
}
function leftParenthesis(leftButton){
  if(activeExpression.textContent.length > 0){
    console.log("Error, invalid input");
  }else{
    passiveExpression.textContent += leftButton.children[0].textContent;
  }
}

function rightParenthesisEventListener(){

  const rightButton = document.getElementById("rightParenthesisButton");
  rightButton.addEventListener("click", (e) => {
    rightParenthesis(rightButton);
  })
}
function rightParenthesis(rightButton){
  var leftCount = passiveExpression.textContent.match(/\(/g).length;
  var rightCount;
  if (passiveExpression.textContent.includes(")")){
    rightCount = passiveExpression.textContent.match(/\)/g).length;
  }else{
    rightCount = 0;
  }

  if(rightCount < leftCount){
    activeExpression.textContent += rightButton.children[0].textContent;
  }else{
    console.log("Too many right parentheses.");
  }
  rightCount += 1;
}

clearEventListener();
deleteEventListener();
signEventListener();
activeEventListener();
passiveEventListener();
decimalEventListener();
equalsEventListener();
leftParenthesisEventListener();
rightParenthesisEventListener();
