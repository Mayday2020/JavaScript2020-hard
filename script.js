let lang = confirm('Перевести страницу на русский язык?'),
    weekRu = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
    weekEn = ['Mon', 'Teu', 'Wen', 'Thr', 'Fr', 'Sat', 'Sun'];
    week = [['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'], ['Mon', 'Teu', 'Wen', 'Thr', 'Fr', 'Sat', 'Sun']]
    
let question = lang ? alert(week[0]) : alert(week[1]);

let namePerson = prompt('Кто это?');
let question2 = namePerson === 'Артем' ? console.log('Директор') : namePerson === 'Максим' ? console.log('Преподаватель') : console.log('Студент');

    //or...
    /*
    if (lang) {
        alert(weekRu);
    } else {
        alert(weekEn);
    } 
    */

    //or...
    /*
    switch (lang) {
        case true: alert(weekRu);
        break;
        case false: alert(weekEn);
    }  
    */