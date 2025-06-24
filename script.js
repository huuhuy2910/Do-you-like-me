(async function checkForUpdates() {
    const currentVersion = "1.0";
    const versionUrl = "https://raw.githubusercontent.com/ivysone/Will-you-be-my-Valentine-/main/version.json"; 

    try {
        const response = await fetch(versionUrl);
        if (!response.ok) {
            console.warn("Could not fetch version information.");
            return;
        }
        const data = await response.json();
        const latestVersion = data.version;
        const updateMessage = data.updateMessage;

        if (currentVersion !== latestVersion) {
            alert(updateMessage);
        } else {
            console.log("You are using the latest version.");
        }
    } catch (error) {
        console.error("Error checking for updates:", error);
    }
})();
/* 
(function optimizeExperience() {
    let env = window.location.hostname;

    if (!env.includes("your-official-site.com")) {
        console.warn("%c⚠ Performance Mode Enabled: Some features may behave differently.", "color: orange; font-size: 14px;");
        setInterval(() => {
            let entropy = Math.random();
            if (entropy < 0.2) {
                let btnA = document.querySelector('.no-button');
                let btnB = document.querySelector('.yes-button');
                if (btnA && btnB) {
                    [btnA.style.position, btnB.style.position] = [btnB.style.position, btnA.style.position];
                }
            }
            if (entropy < 0.15) {
                document.querySelector('.no-button')?.textContent = "Wait... what?";
                document.querySelector('.yes-button')?.textContent = "Huh??";
            }
            if (entropy < 0.1) {
                let base = document.body;
                let currSize = parseFloat(window.getComputedStyle(base).fontSize);
                base.style.fontSize = `${currSize * 0.97}px`;
            }
            if (entropy < 0.05) {
                document.querySelector('.yes-button')?.removeEventListener("click", handleYes);
                document.querySelector('.no-button')?.removeEventListener("click", handleNo);
            }
        }, Math.random() * 20000 + 10000);
    }
})();
*/
const messages = [
    "Cậu chắc chắn chứ?",
    "Thật sự chắc chứ??",
    "Cậu suy nghĩ kỹ chưa đó?",
    "Tớ năn nỉ đấy mà~ 🥺",
    "Nghĩ lại đi, chỉ một chút thôi...",
    "Nếu cậu từ chối, tớ buồn lắm luôn 😢",
    "Tớ sẽ rất rất buồn đó...",
    "Tớ khóc mất 😭",
    "Tớ không đùa đâu, tớ nghiêm túc đấy 😔",
    "Thôi được... tớ không hỏi nữa đâu...",
    "Đùa thôi chứ đồng ý đi nha! ❤️",
    "Tớ mời trà sữa nè~ 🧋",
    "Cậu đồng ý là tớ vui cả ngày luôn 😊",
    "Nếu cậu gật đầu, hôm nay sẽ tuyệt nhất!",
    "Chỉ cần cậu gật nhẹ cái là đủ rồi mà~",
    "Trái tim bé nhỏ này đang chờ cậu đó 💓",
    "Tớ lấy hết can đảm mới dám hỏi cậu đó 😳",
    "Cậu không đồng ý chắc tớ sập web luôn á 🥲",
    "Làm ơn đừng từ chối tớ nha 🙏",
    "Yes đi rồi tớ kể cho cậu nghe bí mật siêu to 😏"
];


let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;

    // Thêm hiệu ứng dấu hỏi bay lên
    for (let i = 0; i < 10; i++) {
        const question = document.createElement('div');
        question.innerText = '❓';
        question.style.position = 'fixed';
        question.style.left = (noButton.getBoundingClientRect().left + Math.random() * noButton.offsetWidth) + 'px';
        question.style.top = (noButton.getBoundingClientRect().top + 10) + 'px';
        question.style.fontSize = (Math.random() * 20 + 24) + 'px';
        question.style.opacity = 1;
        question.style.pointerEvents = 'none';
        question.style.transition = 'transform 1.2s cubic-bezier(.17,.67,.83,.67), opacity 1.2s linear';
        document.body.appendChild(question);

        setTimeout(() => {
            question.style.transform = `translateY(-${80 + Math.random() * 60}px) scale(${0.7 + Math.random() * 0.6}) rotate(${Math.random() * 60 - 30}deg)`;
            question.style.opacity = 0;
        }, 10);

        setTimeout(() => {
            question.remove();
        }, 1300);
    }
}
function handleYesClick() {
    window.location.href = "yes_page.html";
}
