let daysel = document.getElementById('days');
let hoursel = document.getElementById('hours');
let minsel = document.getElementById('mins');
let secondsel = document.getElementById('seconds');

const newyears = '1 january 2022 00:00:00  ';

function countdown() {

    const bdate = new Date(newyears).getTime();
    const currentdate = new Date().getTime();
    let diff = bdate - currentdate;


    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    daysel.innerHTML = days;
    hoursel.innerHTML = hours;
    minsel.innerHTML = mins;
    secondsel.innerHTML = seconds;

}
countdown();

setInterval(countdown, 1000);


