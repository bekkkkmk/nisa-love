const startBtn = document.getElementById("startBtn");
const intro = document.getElementById("intro");
const canvas = document.getElementById("heartCanvas");
const loveSection = document.getElementById("loveSection");
const loveMessage = document.getElementById("loveMessage");
const touchBtn = document.getElementById("touchBtn");

const messages = [
    "Bu kalp sadece bir isim için atıyor...",
    "Ve o isim sensin...",
    "İyi ki hayatımdasın.",
    "Seni Seviyorum. ❤️"
];

startBtn.onclick = () => {

    intro.style.display = "none";

    canvas.style.display = "block";

    setTimeout(() => {

        canvas.style.display = "none";

        loveSection.style.display = "block";

        let i = 0;

        function nextMessage(){

            if(i < messages.length){

                loveMessage.innerHTML = messages[i];

                i++;

                setTimeout(nextMessage,2500);

            }else{

                touchBtn.style.display="inline-block";

            }

        }

        nextMessage();

    },3000);

};

touchBtn.onclick = ()=>{

    alert("❤️ Bu daha başlangıç... Yakında burada harika animasyonlar olacak ❤️");

    if(navigator.vibrate){

        navigator.vibrate([120,80,120]);

    }

}
