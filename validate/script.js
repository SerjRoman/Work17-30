
// переменная которая достаёт елемент  div  по классу
let form = document.querySelector('.form_reg');
//не изменяющая переменная с запрещенними символами 
const forbiddenSymbols = ["$", "-" ,"_"];
//событие отправки  form
form.addEventListener('submit', (event) => {
    //отменяет отправку формы
    event.preventDefault();
    //переменная которая вытягивает из HTML все input
    let allInput = document.querySelectorAll('input');

    // Удалить все ошибки
    // У ошибок есть класс Error

    //результат отправки формы
    let result = true;
    // перебор всех елементов input
    for(let input of allInput){
        // проверка, если все поля написаны корректно
        if (!validate(input)){
            // результат отправки формы отрецательный
            result = false;
        }
    }
    // проверка отправки формы
    if (!result){
        //закончить работу функции
        return false;
    }
    // отправка формы
    form.submit();
})
// функция создания ошибки принимающая елемент input and textError
function createError(input, textError){
    // константная переменная которая создаёт div
    const divError = document.createElement('div');
    // константная переменная которая создаёт img
    const imgError = document.createElement('img');
    // константная переменная которая создаёт p
    const pError = document.createElement('p');
    // ставит картинку ошибки
    imgError.src = 'error.svg';
    // изменяет содержимое елемента "p" и записывает туда ошибку
    pError.innerHTML = textError
    // добавление imgError к елементу div
    divError.appendChild(imgError);
    // добавление pError к елементу div
    divError.appendChild(pError);
    // добавляет к тегу div имя класса
    divError.classList.add('error');
    // после нашего input вставляем ошибку divError
    input.after(divError);
}
// функция отвечающая за input
function validate(input){
    // Если поле пустое
    if (input.value == "") {
        // Создаём ошибку
        createError(input,"Заполните поле");
        // Заканичваем работу функции возвращая false
        return false;
    }
    // Если login
    if (input.id=="login"){
        // 
        if (!validateText(input.value)){
            // Создаём ошибку
            createError(input,`В имени не должно быть этих символов ${forbiddenSymbols}`);
            // Заканичваем работу функции возвращая false
            return false; 
        }
    }
    // 
    if (input.id=="email"){
        // 
        if (!validateEmail(input.value)){
            // Создаём ошибку
            createError(input,`В почте должен быть символ @`);
            // Заканичваем работу функции возвращая false
            return false; 
        }
    }
    // Заканичваем работу функции возвращая true
    return true;
}
// 
function validateText(text) {
    // 
    for ( let symbol of forbiddenSymbols ) {
        // 
        if (text.includes(symbol)){
            // Заканичваем работу функции возвращая false
            return false;
        }
    }
    // Заканичваем работу функции возвращая true
    return true;
}
// функция отвечающая за правильность написания Email
function validateEmail(text) {
    // проверка на то, что в строке есть символа "@"
    if ( text.includes("@") ){
        // возращает что почта написана правильно
        return true;
    }
    // заканчивает роботу функции и выдает ошибку
    return false
}