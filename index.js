import inquirer from "inquirer";
const answer = await inquirer.prompt([{
        type: "number",
        name: "No1",
        message: "Please enter your No.1:",
    },
    {
        type: "number",
        name: "No2",
        message: "Please enter your No.2:",
    },
    {
        type: "list",
        name: "operator",
        message: "select your operator:",
        choices: ["+", "-", "*", "/"]
    }
]);
const { No1, No2, operator } = answer;
if (No1 && No2 && operator) {
    let result = 0;
    if (operator === "+") {
        result = No1 + No2;
    }
    else if (operator === "-") {
        result = No1 - No2;
    }
    else if (operator === "*") {
        result = No1 * No2;
    }
    else if (operator === "/") {
        result = No1 / No2;
    }
    console.log("your answer is " + result);
}
else {
    console.log("please select a valid operator");
}
