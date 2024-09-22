// code your solution here
/*defines saturdayFun function declaration as specified
      - function exists
      - uses the default activity 'roller-skate' when no arguments are passed
      - permits the default activity to be overriden
*/
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}
/*
    defines mondayWork function expression as specified
      - function exists
      - uses the default activity 'go to the office' when no arguments are passed
      - permits the default activity to be overriden
*/
function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
}
/* defines wrapAdjective function according to the specification
      - function exists
      - when initialized with '*' creates a function that, when called, wraps an adjective in a highlight
      - when initialized with '||' creates a function that, when called, wraps an adjective in a highlight
      */
function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
        return `You are ${flair}${adjective}${flair}!`;
    };
}
// Calling saturdayFun
console.log(saturdayFun()); // "This Saturday, I want to roller-skate!"
console.log(saturdayFun("bike")); // "This Saturday, I want to bike!"

// Calling mondayWork
console.log(mondayWork()); // "This Monday, I will go to the office."
console.log(mondayWork("work from home")); // "This Monday, I will work from home."

// Calling wrapAdjective
const encouragingPromptFunction = wrapAdjective("!!!");
console.log(encouragingPromptFunction("a dedicated programmer")); 
// Output: "You are !!!a dedicated programmer!!!"

console.log(wrapAdjective("%")("a dedicated programmer")); 
// Output: "You are %a dedicated programmer%!"
