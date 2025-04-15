const noButton = document.getElementById('noButton');
const body = document.body;

let moveCount = 0; 
let clickCount = 0; 

// array for quotes
const messages = [
    "نهه نکن این کار رو!",
    "لطفاا",
    "🙂توروخدا",
    "😶نمیبینی چی میگم؟",
    "🥺آره رو بزن لطفا",
    "😫عاشقتم لطفا آره رو بزن"
];


function getRandomPosition() {
    const maxX = body.offsetWidth - noButton.offsetWidth; 
    const maxY = body.offsetHeight - noButton.offsetHeight; 

    // تولید مختصات تصادفی
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    return { x: randomX, y: randomY };
}
function yesButtonMsg(){
    alert("🤍😍آفرین دیگه منو تو زن و شوهریم")
}

noButton.addEventListener('mouseover', () => {
    if (moveCount < 10) {
        moveCount++; 

   
        const randomPosition = getRandomPosition();


        noButton.style.position = 'absolute';
        noButton.style.left = randomPosition.x + 'px';
        noButton.style.top = randomPosition.y + 'px';
    }
});


noButton.addEventListener("click", () => {

    if (moveCount >= 10) {
        clickCount++; 


        const messageIndex = clickCount % messages.length; 
        alert(messages[messageIndex]);
    }
});

yesButton.addEventListener("click" , () => {
    yesButtonMsg()
})

