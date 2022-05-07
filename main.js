"use strict";

const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');


 

const clock = setInterval(
    function time() {
        let dateNow = new Date();
        let hr = dateNow.getHours();
        let min = dateNow.getMinutes();
        let sec = dateNow.getSeconds();
        let sess = dateNow.getHours();




        if (hr < 10) {
            hr = "0" + hr;
        }
        if (min < 10) {
            min = "0" + min;
        }
        if (sec < 10) {
            sec = "0" + sec;
        } if (sess < 10) {
            sess = "0" + sess;
        }

        hours.textContent = hr;
        minutes.textContent = min;
        seconds.textContent = sec;
    }, 1000

);





