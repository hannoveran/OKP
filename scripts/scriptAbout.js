// Функція виводу інформації про розробника
function showDeveloperInfo(lastName, firstName, position = "Студент") {
    alert(`Розробник сторінки:\nПрізвище: ${lastName}\nІм'я: ${firstName}\nПосада: ${position}`);
}

showDeveloperInfo("Мамчук", "Анна");

// Функція порівняння двох рядків
function compareStrings(str1, str2) {
    if (str1.length > str2.length) {
        alert(`Більший рядок за довжиною: ${str1}`);
    } else if (str2.length > str1.length) {
        alert(`Більший рядок за довжиною: ${str2}`);
    } else {
        alert("Рядки однакової довжини.");
    }
}

compareStrings("Реєстрація", "Авторизація");




