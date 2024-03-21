import { randomizeTest } from "./randomizeTest.js";

/**
     * Displays the sample test in the browser with the correct answer highlighted
     * @param {Test} test 
     * @param {HTMLElement} parent 
     */
export function renderTest(test, parent) {
    const randomizedTest = randomizeTest(test);

    for (let i = 0; i < randomizedTest.questions.length; i += 1) {
        const qElement = document.createElement("li");
        let correctCount = 0;

        qElement.setAttribute("class", "question");
        qElement.appendChild(
            document.createTextNode(randomizedTest.questions[i])
        );

        for (let j = 0; j < randomizedTest.answers[i].length; j += 1) {
            if (randomizedTest.answers[i][j] === 1) {
                correctCount += 1;
            }
        }

        for (let j = 0; j < randomizedTest.choices[i].length; j += 1) {
            const choiceLabelElement = document.createElement("label"),
                choiceInputElement = document.createElement("input");

            choiceInputElement.setAttribute("name", (correctCount === 1 ? "radio" : "check") + i);
            choiceInputElement.setAttribute("type", correctCount === 1 ? "radio" : "checkbox");
            choiceInputElement.setAttribute("value", j);

            choiceLabelElement.classList.add("choice");
            if (randomizedTest.answers[i][j] === 1) {
                choiceLabelElement.classList.add("correct");
            }

            choiceLabelElement.appendChild(choiceInputElement);
            choiceLabelElement.appendChild(
                document.createTextNode(randomizedTest.choices[i][j])
            );

            qElement.appendChild(choiceLabelElement);
            parent.appendChild(qElement);
        }
    }
}