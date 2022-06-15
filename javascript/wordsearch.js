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

let wordNumber = 6;

let dataArray = [];

let objectArray = [];

for (let i = 0; i < wordNumber; i++) {
    let json = localStorage.getItem(`word${i}`);
    dataArray[i] = JSON.parse(json);
    objectArray[i] = new Word(dataArray[i].word, dataArray[i].clue, dataArray[i].imageWord);

}

function randLetter() {

    let letters =
        ("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");

    let letter = letters[Math.floor(Math.random() * letters.length)];

    return letter

}

function randomCoordinate(length){
    let coordinate = (Math.floor(Math.random() * length));
    return coordinate;
}

function wordCoordinates(length){
    let pivot = [randomCoordinate(length), randomCoordinate(length)];
}

let wordsearchArray = [];