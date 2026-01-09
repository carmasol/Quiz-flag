

const questions = [
    {
        question: "Quel est le nom du pays ?",
        img: "france.jpg",
        name: "France"
    },

    {
        question: "Quel est le nom du pays ?",
        img: "brésil.png",
        name: "Brésil"
    },

    {
        question: "Quel est le nom du pays ?",
        img: "allemand.png",
        name: "Allemagne"
    },

    {
        question: "Quel est le nom du pays ?",
        img: "canada.png",
        name: "Canada"
    },

    {
        question: "Quel est le nom du pays ?",
        img: "usa.png",
        name: "USA"
    },

];

//les questions sont mélangés à chaque rechargement de la page 
let currentQuestion = 0;
//score initialisé à 0
let score = 0;

//récupération des images dans le DOM grace à son id
const quizzImg = document.querySelector('#quizz-img');

//récupération des questions dans le DOM grace à son id
const quizzQuestion = document.querySelector('#quizz-question');

//récupération de l'input dans le DOM grace à son id
const inputResultat = document.querySelector('#resultat');

//récupération du bouton dans le DOM grace à son id
const btnNext = document.querySelector('#next');

//récupération de la div resultat final dans le DOM grace à son id
const resultatFinal = document.querySelector('#resultatFinal');

//fonction d'initialisation du quizz
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]
    }
    return array
}

const shuffledQuestions = shuffle(questions);

quizzImg.src = `./src/${shuffledQuestions[currentQuestion].img}`;
quizzQuestion.textContent = shuffledQuestions[currentQuestion].question;

function validation() {
    if (inputResultat.value.toLowerCase() === shuffledQuestions[currentQuestion].name.toLowerCase()) {
        score++;

    }

    currentQuestion++;

    if (currentQuestion === shuffledQuestions.length) {

        quizzQuestion.textContent = "Fin du quizz";

        quizzImg.style.display = "none";

        inputResultat.style.display = "none";

        btnNext.style.display = "none";

        resultatFinal.textContent = `Votre scrore est de ${score} sur ${shuffledQuestions.length}`;

    } else {
        quizzImg.src = `./src/${shuffledQuestions[currentQuestion].img}`;
        quizzQuestion.textContent = shuffledQuestions[currentQuestion].question;
        inputResultat.value = "";
    }
};

btnNext.addEventListener('click', validation);

inputResultat.addEventListener('keyup', (event) => {
    if (event.key === "Enter") {
        validation()
    }
})