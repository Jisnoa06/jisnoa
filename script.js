const wisdomBtn = document.getElementById("wisdomBtn");
const forceBtn = document.getElementById("forceBtn");
const themeBtn = document.getElementById("themeBtn");

const message = document.getElementById("message");
const powerLevel = document.getElementById("powerLevel");
const grogu = document.getElementById("grogu");

let force = 0;

const normalGrogu =
    "https://64.media.tumblr.com/c0d8be3a1d2bfd58a1eb6c91baa5747b/5321eccd302337fc-fc/s400x600/f5ceaa1e1f5a5f705142e087ed9369c0eff52c63.gifv";

const forceGrogu =
    "https://64.media.tumblr.com/c0d8be3a1d2bfd58a1eb6c91baa5747b/5321eccd302337fc-fc/s400x600/f5ceaa1e1f5a5f705142e087ed9369c0eff52c63.gifv";

const talkGrogu =
    "https://64.media.tumblr.com/c0d8be3a1d2bfd58a1eb6c91baa5747b/5321eccd302337fc-fc/s400x600/f5ceaa1e1f5a5f705142e087ed9369c0eff52c63.gifv";

const darkGrogu =
    "https://cdn.dribbble.com/userupload/20134381/file/original-be52feefed7fbb6b1352075308a36c59.png?resize=752x&vertical=center";

const quotes = [
    "Jisnoa Grogu favourite is",
    "Jisnoa Grogu favourite is",
    "Jisnoa Grogu favourite is",
    "Mmmmmm. Snackies, I sense.",
    "Nap time, it is.",
    "Protect Din Djarin, I must.",
    "Chaos gremlin mode activated.",
    
];

wisdomBtn.addEventListener("click", () => {
    const randomQuote =
        quotes[Math.floor(Math.random() * quotes.length)];

    grogu.src = talkGrogu;

    typeText(randomQuote);
});

forceBtn.addEventListener("click", () => {
    force += 10;

    powerLevel.textContent = `Force Level: ${force}`;

    grogu.src = forceGrogu;

    grogu.style.transform = "scale(1.1) rotate(5deg)";

    typeText("Grogu used The Force ✨");

    setTimeout(() => {
        grogu.style.transform = "scale(1)";
    }, 500);
});

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("darkMode");

    if (document.body.classList.contains("darkMode")) {
        typeText("The Dark Side awakens...");
        themeBtn.textContent = "Light Side";

        grogu.src = darkGrogu;
        grogu.style.filter = "drop-shadow(0 0 30px red)";
    } else {
        typeText("Balance restored.");
        themeBtn.textContent = "Dark Side";

        grogu.src = normalGrogu;
        grogu.style.filter = "drop-shadow(0 0 25px limegreen)";
    }
});

function typeText(text) {
    message.textContent = "";

    let i = 0;

    const typing = setInterval(() => {
        message.textContent += text[i];
        i++;

        if (i >= text.length) {
            clearInterval(typing);
        }
    }, 35);
}


document.addEventListener("click", () => {

    const music =
    document.getElementById("music");

    music.src =
    "https://www.youtube.com/embed/lET5OZmJesA?autoplay=1&loop=1&playlist=lET5OZmJesA";

}, { once: true });

const musicBtn =
document.getElementById("musicBtn");

