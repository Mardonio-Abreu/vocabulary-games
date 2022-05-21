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

class Word {
    constructor(word, clue) {
        this.word = word;
        this.charArray = this.word.split("");
        this.clue = clue;

    }

}


let word0 = new Word();
let word1 = new Word();
let word2 = new Word();
let word3 = new Word();
let word4 = new Word();

let wordArray = [{word0}, {word1}, {word2}, {word3}, {word4}];

for (let i = 0; i < )


alert(wordArray);