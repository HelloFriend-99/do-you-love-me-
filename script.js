const noButton = document.getElementById('noButton');
const yesButton = document.getElementById('yesButton');

let clickCount = 0; 

const messages = [
    "نهه نکن این کار رو!",
    "🥲لطفاا",
    "جاان من"
    , "دارم عاشقت میشم"
    , "🥺ای خدا نگاهش کن"
    , "😄خیلی قشنگ نه میزنی"
    , "🙄ولی دیگه نزن",
    "🙂توروخدا",
    "😶نمیبینی چی میگم؟",
    "🥺آره رو بزن لطفا",
    "😫عاشقتم لطفا آره رو بزن"
];

function yesButtonMsg(){
    alert("🤍🥲😍 آفرین مبینای قشنگم به قلب من خوش اومدی")
}

noButton.addEventListener("click", () => {
    clickCount++; 
    const messageIndex = clickCount % messages.length; 
    alert(messages[messageIndex]);
});

yesButton.addEventListener("click", () => {
    yesButtonMsg()
});

