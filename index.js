const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

    function setDate() {
        const now = new Date();
    
        const seconds = now.getSeconds();
        const secondsDegrees = ((seconds / 60) * 360 ) + 90 ;
        secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
        

        if(secondsDegrees === 90) {
            secondHand.style.transition = 'none'
        } else {
            secondHand.style.transition = ''
        }

        const minutes = now.getMinutes();
        const minutesDegrees = ((minutes / 60) * 360) +  + ((seconds/60)*6) +  90;
        minuteHand.style.transform =  `rotate(${minutesDegrees}deg)`;

        if(minutesDegrees === 90) {
            minuteHand.style.transition = 'none'
        } else {
            minuteHand.style.transition = ''
        }

        const hours = now.getHours();
        const hoursDegrees = ((hours / 60) * 360) + ((mins/60)*30) + 90;
        hourHand.style.transform =`rotate(${hoursDegrees}deg)`;

        if(hoursDegrees === 90) {
            hourHand.style.transition = 'none'
        } else {
            hourHand.style.transition = ''
        }

    }

setInterval(setDate, 1000);

setDate();
