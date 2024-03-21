import { Test } from "./Test.js";
import { getAnswers, getChoices, getQuestions } from "./database.js";
import { renderTest } from "./renderTest.js";

(function () {

    // Retrieve questions, choices, and answers, then
    // use them to create a new Test instance
    const questions = getQuestions(),
        choices = getChoices(),
        answers = getAnswers(),
        test = new Test(questions, choices, answers);

    // Render the test with shuffled questions and answers
    renderTest(test, document.getElementById("questions"));
}());