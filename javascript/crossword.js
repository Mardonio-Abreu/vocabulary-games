class Word {
    constructor(word, clue) {
        this.word = word;
        this.clue = clue;
        this.wordLength = function() {
            return word.length;
        }
        this.charArray = function() {
        return word.split("");
    }
}
}

function clueValidation() {
    let clue = prompt("Enter the clue");
    return clue;
}

function wordValidation() {

    let flag = true;
    let word = "";

    do {
        let word0 = prompt("Enter a word:");
        word = word0.toLowerCase();

        if (word === "") {
            alert("Enter a non-empty word!");
            flag = true;

        } else if (!isNaN(word)) {
            alert("Enter a word not number!");
            flag = true;

        } else if (!(/^[a-z]*$/.test(word))) {
            alert("Enter a valid word!")
            flag = true;

        } else {
            flag = false;
        }

    } while (flag);

    return word;
}

let wordNumber = parseInt(prompt("Enter the number of words for the crossword:"));

let wordArray = [];
for (let i = 0; i < wordNumber; i++){
    let word = wordValidation();
    let clue = clueValidation();
    wordArray[i] = new Word(word, clue); 
}


alert(wordArray[0].word + wordArray[0].clue + wordArray[0].charArray() + wordArray[0].wordLength());