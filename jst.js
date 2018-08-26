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

var stringOutput = document.getElementById("stringOutput");
const buttons = document.querySelectorAll(".button");
buttons.forEach(button => {
  button.addEventListener("click", (e) => {
    stringOutput.textContent += button.children[0].textContent;
  })
})

function clearEventListener(){
  const clearButton = document.getElementById("clearButton");
  clearButton.addEventListener("click", (e) =>{
    clear();
  });
}
function clear(){
  stringOutput.textContent = "";
}

function deleteEventListener(){
  const deleteButton = document.getElementById("deleteButton");
  deleteButton.addEventListener("click", (e) =>{
    del();
  });
}
function del(){
  var stringLength = stringOutput.textContent.length;
  stringOutput.textContent = stringOutput.textContent.slice(0, stringLength - 1);
  console.log("yo");
}

function signEventListener(){
  const signButton = document.getElementById("signButton");
  signButton.addEventListener("click", (e) => {
    changeSign();
  });
}
function changeSign(){
  // mainOutput
  console.log("Hello");
}

clearEventListener();
deleteEventListener();
signEventListener();
