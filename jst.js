
var activeExpression = document.getElementById("activeExpression");
var passiveExpression = document.getElementById("passiveExpression");
var popupBox = document.getElementById("popup");

function activeEventListener(){
  const activeButtons = document.querySelectorAll(".active");
  activeInput(activeButtons);
}
function activeInput(activeButtons){
  activeButtons.forEach(button => {
    button.addEventListener("click", event => {
      if(activeExpression.textContent.length < 28){
        if(activeExpression.textContent === "Invalid Input"){
          activeExpression.textContent = "";
        }else if(activeExpression.textContent.slice(-1) === ")"){
          return;
        }else if(passiveExpression.textContent.slice(-1) === "="){
          activeExpression.textContent += button.children[0].textContent;
          passiveExpression.textContent = "";
        }else{
          activeExpression.textContent += button.children[0].textContent;
        }

      }
    });
  });

  window.addEventListener("keypress", event => {
    if(activeExpression.textContent.length < 28){
      if(activeExpression.textContent === "Invalid Input"){
        activeExpression.textContent = "";
      }else if(activeExpression.textContent.slice(-1) === ")"){
        return;
      }
      switch(event.key){
        case "1":
          activeExpression.textContent += "1";
          break;
        case "2":
          activeExpression.textContent += "2";
          break;
        case "3":
          activeExpression.textContent += "3";
          break;
        case "4":
          activeExpression.textContent += "4";
          break;
        case "5":
          activeExpression.textContent += "5";
          break;
        case "6":
          activeExpression.textContent += "6";
          break;
        case "7":
          activeExpression.textContent += "7";
          break;
        case "8":
          activeExpression.textContent += "8";
          break;
        case "9":
          activeExpression.textContent += "9";
          break;
        case "0":
          activeExpression.textContent += "0";
          break;

      }
      if(passiveExpression.textContent.slice(-1) === "="){
        passiveExpression.textContent = "";
      }
    }
  });
}

function passiveEventListener(){
  const passiveButtons = document.querySelectorAll(".passive");
  passiveInput(passiveButtons);
}
function passiveInput(passiveButtons){
  passiveButtons.forEach(button => {
    button.addEventListener("click", event => {
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
    });

  });
  window.addEventListener("keypress", event => {
    if(activeExpression.textContent === "" && passiveExpression.textContent === "" && (event.key === "+" || event.key === "-" || event.key === "*" || event.key === "/" || event.key === "^" || event.key === "%")){
      activeExpression.textContent = "Invalid Input";
    }else if(activeExpression.textContent === "" && (passiveExpression.textContent.slice(-1) === "+" ||
    passiveExpression.textContent.slice(-1) === "-" ||
    passiveExpression.textContent.slice(-1) === "*" ||
    passiveExpression.textContent.slice(-1) === "/" ||
    passiveExpression.textContent.slice(-1) === "^" ||
    passiveExpression.textContent.slice(-1) === "%")){
      switch(event.key){
        case "+":
          passiveExpression.textContent = passiveExpression.textContent.slice(0, passiveExpression.textContent.length - 1);
          passiveExpression.textContent += "+";
          break;
        case "-":
          passiveExpression.textContent = passiveExpression.textContent.slice(0, passiveExpression.textContent.length - 1);
          passiveExpression.textContent += "-";
          break;
        case "*":
          passiveExpression.textContent = passiveExpression.textContent.slice(0, passiveExpression.textContent.length - 1);
          passiveExpression.textContent += "*";
          break;
        case "/":
          event.preventDefault();
          event.stopPropagation();
          passiveExpression.textContent = passiveExpression.textContent.slice(0, passiveExpression.textContent.length - 1);
          passiveExpression.textContent += "/";
          break;
        case "^":
          passiveExpression.textContent = passiveExpression.textContent.slice(0, passiveExpression.textContent.length - 1);
          passiveExpression.textContent += "^";
          break;
        case "%":
          passiveExpression.textContent = passiveExpression.textContent.slice(0, passiveExpression.textContent.length - 1);
          passiveExpression.textContent += "%";
          break;
        default:
          return;
      }


    }else if(passiveExpression.textContent.slice(-1) === "="){
      if(event.key === "+" || event.key === "-" || event.key === "*" || event.key === "/" || event.key === "^" || event.key === "%"){
        event.preventDefault();
        event.stopPropagation();
        passiveExpression.textContent = activeExpression.textContent + event.key;
        activeExpression.textContent =  "";
      }

    }else{
      if(activeExpression.textContent === "Invalid Input"){
        return;
      }else{
        switch(event.key){
          case "+":
            passiveExpression.textContent += activeExpression.textContent;
            passiveExpression.textContent += "+";
            activeExpression.textContent = "";
            break;
          case "-":
            passiveExpression.textContent += activeExpression.textContent;
            passiveExpression.textContent += "-";
            activeExpression.textContent = "";
            break;
          case "*":
            passiveExpression.textContent += activeExpression.textContent;
            passiveExpression.textContent += "*";
            activeExpression.textContent = "";
            break;
          case "/":
            event.preventDefault();
            event.stopPropagation();
            passiveExpression.textContent += activeExpression.textContent;
            passiveExpression.textContent += "/";
            activeExpression.textContent = "";
            break;
          case "^":
            passiveExpression.textContent += activeExpression.textContent;
            passiveExpression.textContent += "^";
            activeExpression.textContent = "";
            break;
          case "%":
            passiveExpression.textContent += activeExpression.textContent;
            passiveExpression.textContent += "%";
            activeExpression.textContent = "";
            break;
          default:
            return;
        }

      }
    }

  });

}

function equalsEventListener(){
  const equalsButton = document.getElementById("equalsButton");
  equalsButton.addEventListener("click", (e) => {
    evaluate();
  });
  window.addEventListener("keypress", event => {
    if(event.key === "Enter"){
      evaluate();
    }
    if(event.key === "="){
      evaluate();
    }
  });
}
function evaluate(){
  if(activeExpression.textContent.length < 1){
    return;
  }else if(passiveExpression.textContent.slice(-1) === "="){
    return;
  }else{
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
  clearButton.addEventListener("touchend", event => {
    clear();
  })
  window.addEventListener("keypress", event => {
    if(event.key === "c"){
      clear();
    }
  })
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
  window.addEventListener("keypress", event => {
    if(event.key === "Delete"){
      event.preventDefault();
      event.stopPropagation();
      del();
    }
    if(event.key === "Backspace"){
      event.preventDefault();
      event.stopPropagation();
      del();
    }
  })
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
  window.addEventListener("keypress", event => {
    if(event.key === "s"){
      changeSign();
    }
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
      return;
    }else{
      activeExpression.textContent += ".";
    }
  });

  window.addEventListener("keypress", event => {
    if(event.key === "."){
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
        return;
      }else{
        activeExpression.textContent += ".";
      }
    }
  });
}


function leftParenthesisEventListener(){
  const leftButton = document.getElementById("leftParenthesisButton");
  leftButton.addEventListener("click", (e) => {
    leftParenthesis(leftButton);
  });
  window.addEventListener("keypress", event => {
    if(event.key === "("){
      if(activeExpression.textContent.length > 0){
        return;
      }else{
        passiveExpression.textContent += "(";
      }
    }
  });
}
function leftParenthesis(leftButton){
  if(activeExpression.textContent.length > 0){
    return;
  }else{
    passiveExpression.textContent += leftButton.children[0].textContent;
  }
}

function rightParenthesisEventListener(){

  const rightButton = document.getElementById("rightParenthesisButton");
  rightButton.addEventListener("click", (e) => {
    rightParenthesis(rightButton);
  });
  window.addEventListener("keypress", event => {
    if(event.key === ")"){
      var leftCount = 0;
      var rightCount = 0;
      if(passiveExpression.textContent.includes("(")){
        leftCount = passiveExpression.textContent.match(/\(/g).length;
      }
      if (passiveExpression.textContent.includes(")") || activeExpression.textContent.includes(")")){
        if(passiveExpression.textContent.includes(")")){
          rightCount += passiveExpression.textContent.match(/\)/g).length;
        }
        if(activeExpression.textContent.includes(")")){
          rightCount += activeExpression.textContent.match(/\)/g).length;
        }

      }else{
        rightCount = 0;
      }

      if(rightCount < leftCount){
        activeExpression.textContent += rightButton.children[0].textContent;
      }
      rightCount += 1;
    }

  });
}
function rightParenthesis(rightButton){
  var leftCount = 0;
  var rightCount = 0;
  if(passiveExpression.textContent.includes("(")){
    leftCount = passiveExpression.textContent.match(/\(/g).length;
  }
  if (passiveExpression.textContent.includes(")") || activeExpression.textContent.includes(")")){
    if(passiveExpression.textContent.includes(")")){
      rightCount += passiveExpression.textContent.match(/\)/g).length;
    }
    if(activeExpression.textContent.includes(")")){
      rightCount += activeExpression.textContent.match(/\)/g).length;
    }

  }else{
    rightCount = 0;
  }

  if(rightCount < leftCount){
    activeExpression.textContent += rightButton.children[0].textContent;
  }
  rightCount += 1;
}
function popupEventListener(){
  const questionButton = document.getElementById("questionButton");
  questionButton.addEventListener("click", event => {
    if(popupBox.style.visibility === "hidden"){
      popupBox.style.visibility = "visible";
    }else{
      popupBox.style.visibility = "hidden";
    }
  });

  window.addEventListener("keypress", event => {
    if(event.key === "?"){
      if(popupBox.style.visibility === "hidden"){
        popupBox.style.visibility = "visible";
      }else{
        popupBox.style.visibility = "hidden";
      }
    }
  });
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
popupEventListener();
