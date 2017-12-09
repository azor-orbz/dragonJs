var readline = require('readline');
var questions = new Map();

let actual_stage = 0;
let _MAIN_MENU = -1;
let _STAGE_QUESTION_NAME = 1;
let _STAGE_QUESTION_TEXT = 2;
let _MAIN_MENU_QUESTION = "What do you want to do: ";


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


let menuItems = [
    {
        idAction: 1,
        actionCommand: "1",
        text: "Define a new question",
        action: defineQuestionStage1

    },
    {
        idAction: 2,
        actionCommand: "2",
        text: "Edit an old question"
    },
    {
        idAction: 3,
        actionCommand: "3",
        text: "Print statistics",
        action: printStats
    },
    {
        idAction: 4,
        actionCommand: "4",
        text: "Exit",
        action: exit
    },
];


function printMenu() {
    let line = "";
    for (i of menuItems) {
        line = ` ${i.idAction} (command: ${i.actionCommand}) :  ${i.text}  `;
        console.log(line);
    }
}


function exit() {
    process.exit(1);
}

function printStats() {
    line = ` ${i.idAction} (command: ${i.actionCommand}) :  ${i.text}  `;
    ask();
}

console.log("The game has started");
printMenu();
ask(_MAIN_MENU_QUESTION);

function ask(lquestion) {
    rl.question(lquestion, function (a) {
            evaluateDecision(a);
        }
    );
}


function Question(id, question_text, topics, difficulty, stage, answers) {
    this.id = id;
    this.question_text = question_text;
    this.topics = topics;
    this.difficulty = difficulty;
    this.stage = stage;
    this.answers = answers;
}

function evaluateDecision(answer) {
    for (let m of menuItems) {
        if (m.actionCommand === answer) {
            m.action();
        }

    }
}

rl.on('line', function (a) {
    switch (actual_stage) {
        case _STAGE_QUESTION_NAME:
            defineQuestionStage1(a);
            break;
        case _STAGE_QUESTION_TEXT:
            defineQuestionStage2(a);
            break;
        case _MAIN_MENU:
            evaluateDecision(a);
            break;
        default:
            console.log("Missing action for:" + actual_stage);

    }
});

function defineQuestionStage1() {
    let q = "Please Enter the question:";
    actual_stage = _STAGE_QUESTION_NAME;
    ask(q);
}

function defineQuestionStage2(a) {
    let q = "Please Enter the questions text";
    ask(q);
}