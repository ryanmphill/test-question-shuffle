import { Test } from "./Test.js";

/** 
 * Accepts and returns a `Test` object. The questions in the returned object are
 * in a random order. The order of the choices within each question are also randomized. 
 * 
 * @param {Test} test
*/
export function randomizeTest(test) {
    // Ensure the test object exists
    if (!test) {
        document.getElementById("questions")
            .innerHTML += `<li class='error'>Unable to prepare test... Please contact an administrator!</li>`;
        console.error(`Error: 'test' is undefined`);
        return new Test([], [], []);
    }

    // Ensure the test object is valid before continuing the operation
    if (!test.isValid()) {
        document.getElementById("questions")
            .innerHTML += `<li class='error'>Unable to prepare test... Please contact an administrator!</li>`;
        console.error(`Error loading test: ${test.getError()}`);
        return new Test([], [], []);
    }

    // Initialize shuffled variables by shallow copying the test object properties 
    let shuffledQuestions = [...test.questions];
    let shuffledChoiceSets = [...test.choices];
    let shuffledAnswerSets = [...test.answers];

    // Shuffle Questions
    for (let i = shuffledQuestions.length - 1; i > 0; i--) {
        // Shuffle the questions while keeping cooresponding choices and answer groups matching the index
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [shuffledQuestions[i], shuffledQuestions[randomIndex]] = [shuffledQuestions[randomIndex], shuffledQuestions[i]];
        [shuffledChoiceSets[i], shuffledChoiceSets[randomIndex]] = [shuffledChoiceSets[randomIndex], shuffledChoiceSets[i]];
        [shuffledAnswerSets[i], shuffledAnswerSets[randomIndex]] = [shuffledAnswerSets[randomIndex], shuffledAnswerSets[i]];
    }

    // Shuffle choices and answers for each question
    for (let i = 0; i < shuffledChoiceSets.length; i++) {
        // Also make a shallow copy the individual choice and answer set arrays
        let shuffledChoices = [...shuffledChoiceSets[i]];
        let shuffledAnswers = [...shuffledAnswerSets[i]];
        for (let j = shuffledChoices.length - 1; j > 0; j--) {
            const randomLocation = Math.floor(Math.random() * (j + 1));
            [shuffledChoices[j], shuffledChoices[randomLocation]] = [shuffledChoices[randomLocation], shuffledChoices[j]];
            [shuffledAnswers[j], shuffledAnswers[randomLocation]] = [shuffledAnswers[randomLocation], shuffledAnswers[j]];
        }
        // Reassign the newly shuffled choices and answers
        shuffledChoiceSets[i] = shuffledChoices;
        shuffledAnswerSets[i] = shuffledAnswers;
    }

    return new Test(shuffledQuestions, shuffledChoiceSets, shuffledAnswerSets);
}