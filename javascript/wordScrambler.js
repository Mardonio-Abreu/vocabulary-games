/* function wordValidation() {
    let word = "";
    let flag = true;
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
} */

class Word {
    constructor(word, clue) {
        this.word = word;
        this.clue = clue;
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

let json = sessionStorage.getItem("dataArray");

let dataArray = JSON.parse(json);



dataArray.forEach(element => {
    wordArray = element.charArray();
    let scrambledWordArray = shuffle(wordArray);
    let scrambledWord = scrambledWordArray.join("");
    element.clue = scrambledWord;
    
});


let paragraph = document.createElement("p");

for (let i = 0; i < dataArray.length; i++){
    paragraph.innerHTML += dataArray[i].clue;
}
  
document.appendChild(paragraph);
