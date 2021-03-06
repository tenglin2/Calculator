// Declaring the variables that will be manipulated later.
var activeExpression = document.getElementById("activeExpression");
var passiveExpression = document.getElementById("passiveExpression");
var popupBox = document.getElementById("popup");

// Active buttons are all the divs that are digits and they are characterized as active because they are mainly resting in active expression.
// activeEventListener() calls activeInput with parameter activeButtons.
function activeEventListener(){
  const activeButtons = document.querySelectorAll(".active");
  activeInput(activeButtons);
}
// activeInput adds an event listener to all the elements that contain the class "active".
// The conditions for active will generally be added straight to the active expression textContent unless there is a prior error.
function activeInput(activeButtons){
  // Click event listener.
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
  // Keyboard shortcuts for active buttons. Select them by hitting the numbers key on the keyboard.
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

// Passive buttons are one that manipulate and launch the textContent in active into the passiveExpression.
// This is the largest function because it must handle several errors in computation.
// passiveEventListener() calls passiveInput() with parameter passiveButtons.
function passiveEventListener(){
  const passiveButtons = document.querySelectorAll(".passive");
  passiveInput(passiveButtons);
}
// In general when a passive button is clicked, it takes the activeExpression and adds it to the current passiveExpression which will be evaluated.
function passiveInput(passiveButtons){
  // Mouse click event listener.
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
  // Keyboard support for passive buttons.
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

// equalsEventListener() calls the evaluate function when "=" is activated.
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
// Evaluate preps the passiveExpression into a usable format, then uses the eval() function to return a string of the final product.
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


// When clear button is pressed, clear() function is activated.
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
// Clear makes the textContent of the active and passive expressions into empty strings.
function clear(){
  passiveExpression.textContent = "";
  activeExpression.textContent = "";
}

// When del button is activated, call del function.
function deleteEventListener(){
  const deleteButton = document.getElementById("deleteButton");
  deleteButton.addEventListener("click", (e) =>{
    del();
  });
  // Keyboard supports both the delete and backspace button to delete a character.
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
// Delete will generally delete 1 character at a time, though there are some conditions where it will completely clear for convenience.
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

// Sign button event listener calls changeSign().
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
// Change sign simply adds a "-" to active expression or takes it away.
function changeSign(){
  if(activeExpression.textContent.slice(0,1) === "-"){
    activeExpression.textContent = activeExpression.textContent.slice(1);
  }else{
    activeExpression.textContent = "-" + activeExpression.textContent;
  }
}

// Decimal buttons add a decimal to the event listener. There are safeguards to prevent multiple decimals from occurring.
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

// leftParenthesisEventListener calls leftParenthesis.
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
// Left parenthesis can only be added if activeExpression is empty.
function leftParenthesis(leftButton){
  if(activeExpression.textContent.length > 0){
    return;
  }else{
    passiveExpression.textContent += leftButton.children[0].textContent;
  }
}

// rightParenthesisEventListener calls rightParenthesis.
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
// To prevent right parentheses from outnumbering the left parentheses, we must make a count of left and right and only add the right parenthesis if right count is less than left count.
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

// Popup event listener toggles the visibility of the popup div when the "?" button is pressed.
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

// Calling all the event listener functions.
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
