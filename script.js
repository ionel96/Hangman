let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
function drawFrame() {
    ctx.fillRect(0,280,400,15);
    ctx.beginPath();
    ctx.lineWidth = 8;
    ctx.lineCap = "butt";
    ctx.moveTo(100,76);
    ctx.lineTo(100,290);
    ctx.moveTo(100,80);
    ctx.lineTo(210,80);
    ctx.moveTo(210,76);
    ctx.lineTo(210,120);
    ctx.moveTo(100,150);
    ctx.lineTo(150,80);
    ctx.stroke();
}
window.onload = drawFrame;
let array = [];
function saveWord(wordEntered) {
    array.push(wordEntered);
    for (let i = 0; i < wordEntered.length; ++i) {
        let input = document.createElement("input");
        input.disabled = 1;
        input.id =  wordEntered[i] + i;
        input.size = 2;
        input.style="border-color:black";
        document.body.appendChild(input);
    }
    let inputLetter = document.createElement("input");
    inputLetter.placeholder = "Enter a letter";
    document.body.appendChild(inputLetter);
    inputLetter.id = "letter";
    inputLetter.size = 10;
    inputLetter.maxLength = 1;
    let button = document.createElement("button");
    button.innerHTML = "check";
    button.id = "btn";
    document.body.appendChild(button);
    document.getElementById("btn").onclick = function() {
        checkLetter(document.getElementById("letter").value);
    }
}
let member = 0, guessedLetters = 0;
function checkLetter(letterEntered) {
    letterEntered = letterEntered.toLowerCase();
    if (array[0].indexOf(letterEntered) != -1 && guessedLetters < array[0].length) {
        for (let i = 0; i < array[0].length; ++i) {
            if (array[0][i] == letterEntered) {
                document.getElementById(letterEntered + i).value = letterEntered.toUpperCase();
                ++guessedLetters;
            } 
        }
    } else {
        drawLimbs();
    }
    if (guessedLetters == array[0].length) {
        document.getElementById("output").innerHTML = "Congratulations you won! :)";
        member = 15;
    }
}
function drawLimbs() {
    ctx.lineWidth = 5;
    if (member == 0) {
        ctx.beginPath();
        ctx.arc(210, 140, 20, 0, 2 * Math.PI);
    } else if (member == 1) {
        ctx.moveTo(210, 160);
        ctx.lineTo(210, 225);
    } else if (member == 2) {
        ctx.moveTo(211, 222);
        ctx.lineTo(180, 260);
    } else if (member == 3) {
        ctx.moveTo(211, 222);
        ctx.lineTo(240, 260);
    } else if (member == 4) {
        ctx.moveTo(211, 190);
        ctx.lineTo(180, 200);
    } else if (member == 5) {
        ctx.moveTo(211, 190);
        ctx.lineTo(240, 200);
    } else if (member == 6) {
        ctx.beginPath();
        ctx.arc(240, 260, 5, 0, 2 * Math.PI);
    } else if (member == 7) {
        ctx.beginPath();
        ctx.arc(180, 260, 5, 0, 2 * Math.PI);
    } else if (member == 8) {
        ctx.beginPath();
        ctx.arc(240, 200, 4, 0, 2 * Math.PI);
    } else if (member == 9) {
        ctx.beginPath();
        ctx.arc(180, 200, 4, 0, 2 * Math.PI);
    } else if (member == 10) {
        ctx.beginPath();
        ctx.arc(203, 135, 0.3, 0, 2 * Math.PI);
    } else if (member == 11) {
        ctx.beginPath();
        ctx.arc(217, 135, 0.3, 0, 2 * Math.PI);
    } else if (member == 12) {
        ctx.moveTo(209, 143);
        ctx.lineTo(211, 143);
    } else if (member == 13) {
        ctx.beginPath();
        ctx.arc(210, 153, 1, 3, 2 * Math.PI);
    } else if (member == 14) {
        ctx.moveTo(180, 175);
        ctx.lineTo(240, 175);
        document.getElementById("output").innerHTML = "You lose! :(";
        guessedLetters += array[0].length + 1;
    } 
    ++member;
    ctx.stroke();
}
