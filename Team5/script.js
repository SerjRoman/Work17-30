// создание константы buttonReg и присваивание класса button-reg
const buttonReg = document.querySelector('.button-reg');
// создание константы formReg и присваивание класса form-reg
const formReg = document.querySelector('.form_reg');
// создание константы buttonAuth и присваивание класса button-auth
const buttonAuth = document.querySelector('.button-auth');
// создание константы formAurh и присваивание класса form-auth
const formAuth = document.querySelector('.form_auth');
// Установка события "click" на переменную buttonAuth
buttonAuth.addEventListener('click', (event)=>{
    // Скрытие формы formReg
    formReg.style.display = "none";
    // Отображение формы formAuth
    formAuth.style.display = "block";
})
// Установка события "click" на переменную buttonReg
buttonReg.addEventListener('click', (event)=>{
    // Отображение формы formReg
    formReg.style.display = "block";
    // Скрытие формы formAuth
    formAuth.style.display = "none";
})