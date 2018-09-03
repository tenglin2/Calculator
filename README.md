## Calculator

### Overview
This project is to make a completely functional calculator on the web.

> To view the page in browser, please click [here](https://tenglin2.github.io/Calculator/).

### Languages Used
- HTML
- CSS
- JavaScript

### Features
- Completely Functional Calculator
- Intuitive and Simplistic Design
- Active and Passive Screens to Show Inputs
- Proper Safeguards to Prevent Invalid Input
- Particular Error Message on Certain Inputs
- Safeguards on overflow in Active and Passive Screens
- Safeguards for Parentheses Numbering
- Easy Edits and Adjustments to Evaluated Answers
- Active Operator Dynamically Change Both Screens
- Float Values and Sign Change Support
- Complete Keyboard Support for All Buttons
- Convenient Shortcuts for Miscellaneous Buttons
- Instructive Popup Window on Click
- Aesthetic Background with Shadow Effects
- Hover Highlight to Easily Recognize Button


### What I Learned
The Calculator Project was a great chance to really refine and master the basics of JavaScript. In particular, this project focuses more on string manipulation because of how the screens are set up. Also, because the calculator is composed mostly of buttons, the majority of the code is activated through event listeners. As a final touch, I added keyboard support and shortcuts to make everything more streamlined and timely.

- We can avoid the user from highlight any of the text on the buttons or popup by styling it user-select none for major browsers.
- A simple popup can be made by setting a the visibility of a div to none and using JavaScript to toggle visibility.
- Creating a flow between active and passive expressions can be done by properly setting the event listeners.
- Heavy focus on how strings can be manipulated by using the textContent of the active and passive screen elements.
- There are certain keywords that will trigger a default shortcut in a browser. For instance "/" opens quick find. To prevent this from occurring we specify event to prevent default and stop propagation.
- Keyboard support can be added by identifying the event of "keypress" and using conditions and switch statements to check the event key that was pressed. We do the appropriate action based on the key pressed.
-Defensive Programming is especially important so that the user does not have to deal with backend errors. That is why I had to add several safeguards for instances that would produce and error.

This project allowed me to really get used to vanilla JavaScript. It was an informative and pleasant project to work on.
