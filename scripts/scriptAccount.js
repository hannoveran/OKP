// // Змінити фон сторінки на 30 секунд
// document.body.style.backgroundColor = "#f0e68c"; 
// setTimeout(() => {
//   document.body.style.backgroundColor = ""; 
// }, 30000);

// // Перенаправити браузер на іншу сторінку через 5 секунд 
// setTimeout(() => {
//   location.href = "index.html";
// }, 5000);

// // Використання getElementById
// const phoneNumberLink = document.getElementById("phone-number");
// phoneNumberLink.style.color = "red"; 

// // Використання querySelectorAll
// const allListItems = document.querySelectorAll("ul li");
// allListItems.forEach((item, index) => {
//   if (index % 2 === 0) {
//     item.style.fontWeight = "bold"; // кожен другий елемент — жирний
//   }
// });

// // Властивості innerHTML, outerHTML, nodeValue/data, textContent
// const footerHeading = document.querySelector("footer h3");
// console.log("innerHTML:", footerHeading.innerHTML);
// console.log("outerHTML:", footerHeading.outerHTML);
// console.log("textContent:", footerHeading.textContent);

// const textNode = footerHeading.firstChild;
// if (textNode.nodeType === Node.TEXT_NODE) {
//   console.log("nodeValue / data:", textNode.nodeValue);
// }

// // document.write
// setTimeout(() => {
//   document.write("<p>Це вставлено за допомогою document.write()</p>");
// }, 1000);


// // Створення елементів та маніпуляції
// const newSection = document.createElement("section");
// newSection.style.padding = "1em";
// newSection.style.backgroundColor = "#e0f7fa";

// const title = document.createElement("h2");
// title.textContent = "Новий розділ доданий за допомогою JavaScript";

// const paragraph = document.createElement("p");
// const text = document.createTextNode("Цей текст був створений через createTextNode.");
// paragraph.append(text);

// newSection.append(title);
// newSection.append(paragraph);

// // Вставка нового елемента в кінець main
// const main = document.querySelector("main");
// main.append(newSection);

// // Вставка елемента на початок форми (prepend)
// const form = document.getElementById("registration-form");
// const topNote = document.createElement("p");
// topNote.textContent = "Це повідомлення з'являється на початку форми.";
// form.prepend(topNote);

// // Вставка елемента після кнопки (after)
// const submitButton = form.querySelector("button");
// const afterButtonNote = document.createElement("small");
// afterButtonNote.textContent = "Кнопка була натиснута?";
// submitButton.after(afterButtonNote);


// // Заміна
// const warning = document.createElement("div");
// warning.textContent = "Заміна картинці";
// const imageDiv = document.querySelector(".registration > div:last-child");
// imageDiv.replaceWith(warning); // заміна

// // Видалення
// const firstFormInput = document.querySelector("#registration-form input");
// if (firstFormInput) {
//   const info = document.createElement("p");
//   info.textContent = "Введіть ваші дані уважно.";
//   firstFormInput.before(info);

//   setTimeout(() => {
//     info.remove(); // видаляє елемент через 10 секунд
//   }, 10000);
// } else {
//   console.log("Елемент input не знайдено.");
// }

