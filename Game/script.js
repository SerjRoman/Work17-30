gates.addEventListener("click", event => {
    // getBoundingClientRect()
    let xCor = event.clientX - 740;
    let yCor = event.clientY - 144;    
    ball.style.left = xCor + 'px';
    ball.style.top = yCor + 'px';
    // Мяч относительно курсора должен быть в центре
    // Получаем поинт если координата нажатия больше чем нижняя граница ворот
    // setTimeout
});