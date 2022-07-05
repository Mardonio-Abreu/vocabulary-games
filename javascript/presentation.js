class Word {
    constructor(word, clue, imageWord) {
        this.word = word;
        this.clue = clue;
        this.imageWord = imageWord;
        this.wordLength = function () {
            return word.length;
        }
        this.charArray = function () {
            return word.split("");
        }
    }
}

const KEY = "gK52De2Tm_dL5o1IXKa9FROBAJ-LIYqR41xBdlg3X2k";

let wordNumber = 6;

let dataArray = [];

function createCard(word, clue, image) {

    let divCard = document.createElement("div");
    divCard.setAttribute('class', "card");
    divCard.setAttribute('style', "width: 18rem;");

    let imageCard = document.createElement("img");
    imageCard.setAttribute('class', "card-img-top");
    imageCard.setAttribute('src', image);
    imageCard.setAttribute('alt', word);

    let divCardBody = document.createElement("div");
    divCardBody.setAttribute('class', "card-body");

    let wordP = document.createElement("p");
    wordP.setAttribute('class', "card-text");
    wordP.innerText = word;

    let clueP = document.createElement("p");
    clueP.setAttribute('class', "card-text");
    clueP.innerText = clue;

    divCard.appendChild(imageCard);
    divCard.appendChild(divCardBody);
    divCard.appendChild(wordP);
    divCard.appendChild(clueP);

    document.body.appendChild(divCard);

}


for (let i = 0; i < wordNumber; i++) {
    let json = localStorage.getItem(`word${i}`);
    dataArray[i] = JSON.parse(json);

}

dataArray.forEach(element => {

    createCard(element.word, element.clue, element.imageWord);
        
});
