const innerBox = document.createElement("div");
innerBox.setAttribute("style", "height: 200px; width: 200px; background-color: pink; margin-left: auto; margin-right: auto;");
const outerBox = document.querySelector(".box");
outerBox.appendChild(innerBox);
