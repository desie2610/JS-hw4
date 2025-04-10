const value1 = "текст у першому полі";
const value2 = "";


if (value1.trim() !== "" && value2.trim() !== "") {
  console.log("Обидва поля заповнені");
} else {
  console.log("Не всі поля заповнені");
}

// ==============

const num1 = 7;
const num2 = 5;

const sum = num1 + num2;

if (sum > 10) {
  console.log("Сума більша за 10");
} else {
  console.log("Сума менша або дорівнює 10");
}

// ==============

const text = " JavaScript уе чудово";

if (text.includes("JavaScript")) {
  console.log("Текст містить слово JavaScript");
} else {
  console.log("Текст не містить слово JavaScript");
}

// ==================

const number = 15;

if (number > 10 && number < 20) {
  console.log("Число входить в діапазон від 10 до 20");
} else {
  console.log("Число не входить в діапазон від 10 до 20");
}

// =================

const name = "Тимофій";
const email = "timofii@gmail.com";
const password = "qwertyu";

// Перевірка умови
const nameValid = name.length >= 3;
const emailValid = email.includes("@") && email.indexOf(".");
const passwordValid = password.length >= 6;

if (nameValid && emailValid && passwordValid) {
  console.log("Перенаправлення на іншу сторінку");
} else {
  console.log("Помилка: неправильне заповнення");
}