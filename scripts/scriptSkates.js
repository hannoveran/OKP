// Функція "Діалог з користувачем"
function userDialog() {
    let attempts = 0;
    let answer;
    do {
        answer = prompt("Чи бажаєте ви придбати щось для занять фігурним катанням? (так/ні)");
        attempts++;
    } while (answer && answer.toLowerCase() !== "так");

    if (answer) {
        alert(`Вірно! Ви відповіли правильно за ${attempts} спроб(у/и).`);
    } else {
        alert("Відповідь не була надана.");
    }
}

userDialog();






