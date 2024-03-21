/**
 * The Test class
 * 
 * Initializes test class instance with specified inputs:
 * 
 * `questions`(array of strings), 
 * 
 * `choices`(array containing arrays of strings), and
 * 
 * `answers`(array containing arrays of numbers)
 */
export class Test {
    constructor(questions, choices, answers) {
        this.questions = questions;
        this.choices = choices;
        this.answers = answers;
    }

    /** 
     * Returns true if every question has a cooresponding choice and answer
     * 
     * @returns {Boolean}
    */
    allQuestionsHaveAnswers() {
        // Ensure at least as many answer sets and choice sets as there are questions
        return this.questions.length <= this.choices.length && this.questions.length <= this.answers.length;
    }

    /** 
     * Returns true if every choice set has a cooresponding answer set AND
     * every choice has an answer on each set
     * 
     * @returns {Boolean}
    */
    everyChoiceHasAnswerValue() {
        // Ensure at least as many answer sets as choice sets
        return this.choices.length <= this.answers.length
            // Ensure at least as many answers as choices on each set
            && this.choices.every((choice, i) => choice.length <= this.answers[i].length);
    }

    /** 
     * Returns true if all choices, answers, their nested values, and questions are arrays 
     * 
     * @returns {Boolean}
    */
    allValidTypes() {
        if (Array.isArray(this.questions) && Array.isArray(this.choices) && Array.isArray(this.answers)) {
            return this.choices.every(choice => Array.isArray(choice))
                && this.answers.every(answer => Array.isArray(answer));
        } else {
            return false;
        }
    }

    /** 
     * Returns true if allValidTypes, allQuestionsHaveAnswers, AND everyChoiceHasAnswerValue are true
     * 
     * @returns {Boolean}
    */
    isValid() {
        return this.allValidTypes() && this.allQuestionsHaveAnswers() && this.everyChoiceHasAnswerValue();
    }

    /** 
     * Retrieves specific error message if test object is not valid, else, returns 'No errors'
    */
    getError() {
        if (!this.allValidTypes()) {
            return "Expected choices, answers, their nested values, and questions to be arrays.";
        }
        else if (!this.allQuestionsHaveAnswers()) {
            return "Expected choice set and answer set for each question.";
        }
        else if (!this.everyChoiceHasAnswerValue()) {
            return "Expected answer value for each choice.";
        } else {
            return "No errors";
        }
    }
}