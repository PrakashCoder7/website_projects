const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Canvas Super Styles",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Hyper Terminal Modern Language",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "1998",
        correct: "b",
    },
    {
        question: "Which SQL statement is used to extract data from a database?",
        a: "SELECT",
        b: "OPEN",
        c: "GET",
        d: "none of the above",
        correct: "a",
    },
    {
        question: "Which symbol is used to comment out a single line in python?",
        a: "!",
        b: "/*",
        c: "#",
        d: "@",
        correct: "c",
    },
    {
        question: "Which of following is a version control system",
        a: "GitHub",
        b: "Git",
        c: "Docker",
        d: "Jenkins",
        correct: "b",
    },
    {
        question: "What is the file extension for python files?",
        a: ".py",
        b: ".pyc",
        c: ".pyy",
        d: ".cpy",
        correct: "a",
    },
    {
        question: "Which is used for styling web pages",
        a: "XML",
        b: "HTML",
        c: "JavaScript",
        d: "CSS",
        correct: "d",
    },
    {
        question: "Which of following is used to define list in HTML?",
        a: "ol",
        b: "ul",
        c: "li",
        d: "list",
        correct: "c",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>

                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})