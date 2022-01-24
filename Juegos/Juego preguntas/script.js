const quizData = [
    {
        question: "Cual lenguaje se usa en paginas web",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "¿Qué significa CSS?",
        a: "Hojas de estilo centrales",
        b: "Hojas de estilo en cascada",
        c: "Hojas simples en cascada",
        d: "Constante simulacion solida",
        correct: "b",
    },
    {
        question: "¿Qué significa HTML?",
        a: "Lenguaje de marcado de hipertexto",
        b: "Lenguaje de rebajas de hipertexto",
        c: "Lenguaje de máquina Hyperloop",
        d: "Hoja de temprana modificacion ligera",
        correct: "a",
    },
    {
        question: "¿En qué año se lanzó JavaScript?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "Ninguna de las anteriores",
        correct: "b",
    },
];

const quiz = document.getElementById('quiz')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
const answersEl= document.querySelectorAll('.answer')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz(){
    deselectAnswers()

    const currentQuizdata = quizData[currentQuiz]
    questionEl.innerText = currentQuizdata.question
    a_text.innerText = currentQuizdata.a
    b_text.innerText = currentQuizdata.b
    c_text.innerText = currentQuizdata.c
    d_text.innerText = currentQuizdata.d
}

function deselectAnswers(){
    answersEl.forEach(answersEl => answersEl.checked = false)
}

function getSelected(){
    let answer
    answersEl.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click' , () => {
    const answer = getSelected()

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if (currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2> Tus respuestas correctas ${score}/${quizData.length}  </h2>
                <button onclick="location.reload()"> Repetir </button>
            `
        }
    }
})