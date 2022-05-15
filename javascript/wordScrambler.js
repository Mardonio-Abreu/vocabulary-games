let wordToScramble;
let flag = true;
let word0, word = "";
let scrambledWordArray = [];

function wordValidation() {

    flag = true;
    do {
        word0 = prompt("Enter a word:");
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

wordToScramble = wordValidation();
const charArray = wordToScramble.split('');
charArrayLength = charArray.length;

let numArray = [];

function randomNumber() {
    return Math.floor(Math.random() * charArrayLength);
}

numArray[0] = randomNumber();
for (let i = 1; i < charArrayLength; i++) {
    for (let j  = i; j > 0; j--) {
        while ((numArray[i] === numArray[j]) && (j != i)) {
            numArray[i] = randomNumber();
        }
    }
}
alert(numArray);

for (let i = 0; i < charArrayLength; i++) {
    scrambledWordArray[i] = charArray[numArray[i]];
}

let scrambledWord = scrambledWordArray.join("");
alert(scrambledWord);