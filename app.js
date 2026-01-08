

const question = [
    {
        question: "Quel est le nom du pays ?"
        img: "france.jpg",
        name: "France"
    },

    {
        question: "Quel est le nom du pays ?"
        img: "brésil.png",
        name: "Brésil"
    },

    {
        question: "Quel est le nom du pays ?"
        img: "allemand.png",
        name: "Allemagne"
    },

    {
        question: "Quel est le nom du pays ?"
        img: "canada.png",
        name: "Canada"
    },

    {
        question: "Quel est le nom du pays ?"
        img: "usa.png",
        name: "USA"
    },

];

let currentQuestion = 0;
let score = 0;

const quizzImg = document.querySelector('#quizz-img');
const quizzQuestion = document.querySelector('#quizz-question');
const inputResultat = document.querySelector('#resultat');
const btnNext = document.querySelector('#next');
const ResultatFinal = document.querySelector('#resultatFinal');

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]
    }
    return array
}