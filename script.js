const array = [];
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
function checkLetter(letterEntered) {
    for (let i = 0; i < array.length; ++i) {
        let c = letterEntered + i;
        if (c == document.getElementById(c).value) {
            document.getElementById(c).value = letterEntered;
        } 
    }
}
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
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
                
