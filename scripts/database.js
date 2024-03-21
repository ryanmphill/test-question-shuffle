const database = {
    questions: [
        "What can you find in Ryan's home office?",
        "Although flexible, Ryan prefers to work around ____ hours per week so he has plenty of time to be outdoors and learn new exciting things while staying sharp.",
        "Ryan is eager to learn new technologies and is currently experienced with (choose all that apply):",
        "Ryan has the following musical instruments (choose all that apply):",
        "Ryan would most likely do which of the following:"
    ],
    choices: [
        [
            "Books",
            "Laptops",
            "Day old french baguettes",
            "Earl Grey tea",
            "A wooly mammoth"
        ],
        [
            "80",
            "40",
            "50",
            "60"
        ],
        [
            "JavaScript",
            "React",
            "Large Hadron Collider",
            "Python",
            "Django"
        ],
        [
            "Fender Duo Sonic (Electric Guitar)",
            "Irish Bouzouki",
            "Sousaphone"
        ],
        [
            "Engage in hand-to-paw combat with a black bear",
            "Sleep in until 2pm",
            "Spend all of his hard earned savings on rare Pez dispensers",
            "Be a kind and helpful teammate while making meaningful contributions and gracefully handling feedback from others"
        ]
    ],
    answers: [
        [1, 1, 0, 1, 0],
        [0, 1, 0, 0],
        [1, 1, 0, 1, 1],
        [1, 1, 0],
        [0, 0, 0, 1, 0]
    ]
}

export const getQuestions = () => {
    return [...database.questions];
}

export const getChoices = () => {
    return database.choices.map(choice => ([...choice]));
}

export const getAnswers = () => {
    return database.answers.map(answer => ([...answer]));
}