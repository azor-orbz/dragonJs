var readline = require('readline');

var questions = new Map();

let actual_stage = 0;
let _MAIN_MENU = -1;
let _STAGE_QUESTION_NAME = 1;
let _STAGE_QUESTION_TEXT = 2;
let _STAGE_QUESTION_TOPICS = 3;
let _STAGE_QUESTION_DIFFICULTY = 4;
let _STAGE_QUESTION_STAGE = 5;
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
let validTopics = ['javascript-core', 'node-js', 'node-certification', '70-480'];

function printValidTopics() {
    let select = "Please select one of the following topics: ";
    let command;
    let pos = 0;
    console.log(select);
    for (let top of validTopics) {
        pos++;
        command = `${pos} : ${top}`;
        console.log(command);
    }
}

let topicMenuContinue = [{
    idAction: 1,
    text: 'Add another topic(s)',
    actionCommand: "1",
    action: function (a) {
        defineQuestionStage3(a);
    }
}, {
    idAction: 2,
    text: 'Continue',
    actionCommand: "2",
    action: function (a) {
        defineQuestionStage5(a);
    }
}
];

function printMenuTopicContinue() {
    let line = "";
    for (i of topicMenuContinue) {
        line = ` ${i.idAction} (command: ${i.actionCommand}) :  ${i.text}  `;
        console.log(line);
    }

}

function printMenu() {
    let line = "";
    for (i of menuItems) {
        line = ` ${i.idAction} (command: ${i.actionCommand}) :  ${i.text}  `;
        console.log(line);
    }
}


function exit() {
    console.log("Game end");
    process.exit(1);
}

function printStats() {
    line = ` ${i.idAction} (command: ${i.actionCommand}) :  ${i.text}  `;
    ask();
}

console.log("The game has started");
printMenu();
ask(_MAIN_MENU_QUESTION);

function ask(lquestion, call) {
    rl.question(lquestion, function (a) {
            if (call !== undefined) {
                call(a);
            } else {
                evaluateDecision(a);
            }
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
            defineQuestionStage2(a);
            break;
        case _STAGE_QUESTION_TEXT:
            defineQuestionStage2(a);
            break;
        case _MAIN_MENU:
            evaluateDecision(a);
            break;
        case _STAGE_QUESTION_TOPICS:
            defineQuestionStage4(a);
            break;
        case _STAGE_QUESTION_DIFFICULTY:
            defineQuestionStage5(a);
            break;
        case _STAGE_QUESTION_STAGE:
            defineQuestionStage6(a);
            break;
        default:
            console.log("Missing action for:" + actual_stage);

    }
});

function defineQuestionStage1() {
    let q = "Please Enter the question: ";
    actual_stage = _STAGE_QUESTION_NAME;
    ask(q, defineQuestionStage2);
}

function defineQuestionStage2(a) {
    let q = "Please Enter the questions text: ";
    actual_stage = _STAGE_QUESTION_TEXT;
    ask(q, defineQuestionStage3);
}

function defineQuestionStage3(a) {
    printValidTopics();
    actual_stage = _STAGE_QUESTION_TOPICS;
    ask("Topics:", defineQuestionStage4);
}

function defineQuestionStage4(a) {
    if (a <= validTopics.length) {
        console.log("Topics selected: " + validTopics[a - 1]);
        actual_stage = _STAGE_QUESTION_DIFFICULTY;
        printMenuTopicContinue();
    } else {
        console.log("Not valid topic");
        actual_stage = _STAGE_QUESTION_TOPICS;
        ask("Topics:", defineQuestionStage4);
    }

}
function defineQuestionStage5(a) {
    let q = "What is the difficulties of the question? (1-9)";
    actual_stage = _STAGE_QUESTION_STAGE;
    ask("Topics:", defineQuestionStage6);
}
function defineQuestionStage6(a) {
    new Error("TODO");

}