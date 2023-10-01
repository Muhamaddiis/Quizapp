const questionData = [
    {
        question: 'How old is Mzee?',
        a: '10',
        b: '17',
        c: '70',
        d: '55',
        correct: 'c',
    }, {
        question: 'What is your favorite Programming Language?',
        a: 'Java',
        b: 'Python',
        c: 'Javascript',
        d: 'Golang',
        correct: 'd'
    }, {
        question: 'Who is the president of kenya?',
        a: 'Uhuru Kenyatta',
        b: 'William Ruto',
        c: 'Raila Odinga',
        d: 'Mwai kibaki',
        correct: 'b'
    }, {
        question: 'What does HTML stand for?',
        a: 'Hypertext Markup Language',
        b: 'Cascading Style Sheet',
        c: 'Helicopters Terminals Motorboats Lamborghini',
        d: 'Jason Object Notation',
        correct: 'a'
    }, {
        question: 'What year was javascript released?',
        a: '1996',
        b: '1994',
        c: '1995',
        d: '2020',
        correct: 'a'
    }
];
const quiz = document.getElementById("quiz")
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('Submit')

let currentQuestion = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = questionData[currentQuestion]
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
    
}

function getSelected() {
    
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id
        } 
            
    });
    return answer;
}
function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;  
    });
}

submitBtn.addEventListener("click", () => {
    answer = getSelected();
    console.log(answer);
    if(answer) {
        if(answer === questionData[currentQuestion].correct) {
            score++;
        }
        currentQuestion++;
        if(currentQuestion < questionData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>your score is ${score}/${questionData.length}</h2>`
        }

    }
})