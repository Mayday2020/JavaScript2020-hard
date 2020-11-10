' use strict';

const start = () => {
    let num = 22;
    const quest = () => {
        let result = prompt('Угадай число от 1 до 100!');
        if (isNaN(result)) {
            alert("Введи число!");
            quest();
        } else {
            if (result === null){
                alert("Досвидания!");
            } else if (result > num) {
                alert("Загаданное число меньше");
                quest();
            } else if (result < num) {
                alert("Загаданное число больше");
                quest();
            } else if (result == num) {
                alert("Верно!!!");
            }
        }
    };
    quest();
    console.dir(quest);
};
start();