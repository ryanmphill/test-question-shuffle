# Test Question Shuffle
This idea of this project is to randomize an arbitrary amount of test questions, as well as the cooresponding choices and answers for each question. For this project, I chose the [Fisher-Yates](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle) algorithm to produce a fair distribution of random questions and choices.

You can test it out [here](https://ryans-test-question-shuffle.netlify.app/). 

Just hit refresh to shuffle the questions and choices!

## Data structures
The questions coorespond to the choices and answers by index, so it is necessary to shuffle them together. `question[i]` cooresponds to `choice[i]` which cooresponds to `answer[i]`. Furthermore, `choice[i][k]` cooresponds to `answer[i][k]`.

- #### `questions`: 

  ```js
  ['String', 'String', ...]
  ```
- #### `choices`:

  ```js
  [
    [
        'String',
        'String', 
        ...,
    ],
    [
        'String',
        'String', 
        ...,
    ],
    ...
  ]
  ```
- #### `answers`:

  ```js
  [
    [Number, Number, ...],
    [Number, Number, ...],
    ...,
  ]
  ```

## randomizeTest() Function
  
#### Initial Validation: 
The function first checks if the test object is provided and it is valid. If the test is not valid, it logs an error message and returns a new Test object with empty arrays.

#### Shuffling Questions: 
It then shuffles the questions, choices, and answers arrays while ensuring the correct questions, choices, and answers still coorespond.

#### Shuffling Choices and Answers for Each Question: 

For each question, it also shuffles the choices and answers arrays to randomize the order in which the choices are presented. Similar to the previous shuffle, the coorespondence of answers to choices is maintained.

#### Returning the Randomized Test: 
Finally, it returns a new Test object with the shuffled questions, choices, and answers arrays.

## Test Class
### Attributes:
The three arrays mentioned under "Data Structures"
 - questions
 - choices
 - answers

### Methods
I added some validation methods to the Test class to ensure the data is structured as expected:

`allQuestionsHaveAnswers()`: Checks if there are at least as many answer sets and choice sets as there are questions.

`everyChoiceHasAnswerValue()`: Ensures that there are at least as many answer sets as choice sets and that each choice has an answer value.

`allValidTypes()`: Verifies that all choices, answers, their nested values, and questions are arrays.

`isValid()`: Combines the above checks to determine if the test is valid.

`getError()`: Returns a specific error message based on which validation check failed, providing feedback on what went wrong.

## Attribution:
The boilerplate for this code was pulled from the "new developer test" used by Rustici Software. I modularized the original single html file into separate JavaScript modules and linked to a stylesheet. All of the code written in the `randmizeTest()` function, as well as the methods on the `Test` class was done by me.

## Thanks for viewing!
If you would have done this a different way, have a more efficient solution, or simply just want to talk about programming, I would love to connect!