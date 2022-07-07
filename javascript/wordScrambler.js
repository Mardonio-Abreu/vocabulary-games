class  Word {
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

function shuffle(array) {
    //Fisher-Yates shuffle
    let currentIndex = array.length,
        randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ];
    }

    return array;
}

function createSubmitButton() {

    let submitButton = document.createElement("button");
    submitButton.innerText = "submit";
    submitButton.setAttribute('id', "bttn");
    submitButton.setAttribute('type', "submit");

    document.body.appendChild(submitButton);
}

let wordNumber = 6;

let dataArray = [];

let objectArray = [];

for (let i = 0; i < wordNumber; i++) {
    let json = localStorage.getItem(`word${i}`);
    dataArray[i] = JSON.parse(json);
    objectArray[i] = new Word(dataArray[i].word, dataArray[i].clue, dataArray[i].imageWord);

}

objectArray.forEach(element => {
    let wordArray = element.charArray();
    let scrambledWordArray = shuffle(wordArray);
    let scrambledWord = scrambledWordArray.join("");
    element.clue = scrambledWord;
    
});


let paragraph = [];
let guess = [];


for (let i = 0; i < objectArray.length; i++){
    
    paragraph[i] = document.createElement("p");
    paragraph[i].innerHTML = objectArray[i].clue;
    guess[i] = document.createElement("input");
    guess[i].setAttribute('type', "text");
    guess[i].setAttribute('class',"guess");
    guess[i].setAttribute('placeholder', "Guess the word!");
    
    document.body.appendChild(paragraph[i]);
    document.body.appendChild(guess[i]);
}
  
createSubmitButton();

