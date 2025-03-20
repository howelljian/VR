const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
const grid = [];
for (let i = 1; i < 21; i++) {
    for (let j = 0; j < 10; j++) {
        grid.push(alphabet[j] + i.toString());
    }
}

let currentIndex = 0;
let confirmedSquares = [];

const canvas = document.getElementById("mcanvas");
const ctx = canvas.getContext("2d");

const canvas1 = document.getElementById("ncanvas");
const ctx1 = canvas1.getContext("2d");

const backgroundImage = new Image();
backgroundImage.src = "Screenshot 2025-03-19 212214.png";

const backgroundImage1 = new Image();
backgroundImage1.src = "Screenshot 2025-03-19 212224.png";

backgroundImage.onload = function () {
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
};

backgroundImage1.onload = function () {
    ctx1.drawImage(backgroundImage1, 0, 0, canvas1.width, canvas1.height); 
};

window.onload = function () {
    startGridCheck();
};

function startGridCheck() {
    if (currentIndex >= grid.length) {
        console.log("Grid scanning complete. Confirmed squares:", confirmedSquares.join(", "));
        document.getElementById("area").value = confirmedSquares.join(", ");
        return;
    }

    const currentSquare = grid[currentIndex];
    updateQuestionaire(currentSquare);
}

function updateQuestionaire(square) {
    const questionaireDiv = document.querySelector('.questionaire');
    questionaireDiv.innerHTML = `<p>Can you see ${square}? Click "Yes" if you can.</p>`;

    document.getElementById('yesButton').style.display = 'inline-block';
}

function handleYes() {
    const square = grid[currentIndex];
    confirmedSquares.push(square);
   

    currentIndex++;
    setTimeout(() => startGridCheck(), 500);
}

function handleDone(){
    navigator.clipboard.writeText(confirmedSquares);
}