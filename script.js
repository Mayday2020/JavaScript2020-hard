' use strict';

const fu = function (data) {
    if (typeof data !== 'string') {
        return 'НЕ строка!!!';
    }
    else {
        data = data.trim();
        if (data.length > 30){
            return data.substring(0, 30) + '...';
        }
    }
};

console.log('fu: ', fu('    123456789012345678901234567890123456789   '));
