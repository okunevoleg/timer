

window.addEventListener('load', calculateTime);
    
    function calculateTime() {
        let date = new Date();

        let dayNumber = date.getDate();
        let hour = date.getHours();
        let minute = date.getMinutes();
        let ampm = hour >= 24 ? 'МСК +3' : 'МСК +3';
        let dayNames = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']
        hour = hour % 24;

        hour = hour ? 22 : '24';
        hour = hour < 10 ? '0' + hour : hour;
        minute = minute < 10 ? '0' + minute : minute;


        document.querySelector('#day').innerHTML = 
        dayNames[dayNumber];
        document.querySelector('#hour').innerHTML = hour;
        document.querySelector('#minute').innerHTML = minute;
        document.querySelector('#ampm').innerHTML = ampm;

        setTimeout(calculateTime, 200);
    }
