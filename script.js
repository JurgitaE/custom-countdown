const inputContainer = document.getElementById('input-container');
const countdownForm = document.getElementById('countdown-form');
const dateEl = document.getElementById('date-picker');

const countdownEl = document.getElementById('countdown');
const countdownElTitle = document.getElementById('countdown-title');
const countdownBtn = document.getElementById('countdown-button');
const timeElements = document.querySelectorAll('span');

let countDownTitle = '';
let countDownDate = '';
let countdownValue = Date;
let countdownActive;

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

const today = new Date().toISOString().split('T')[0];
dateEl.setAttribute('min', today);

function updateDOM() {
    countdownActive = setInterval(() => {
        const now = new Date().getTime();
        const distance = countdownValue - now;

        const days = Math.floor(distance / day);
        const hours = Math.floor((distance % day) / hour);
        const minutes = Math.floor((distance % hour) / minute);
        const seconds = Math.floor((distance % minute) / second);

        countdownElTitle.textContent = `${countDownTitle}`;
        timeElements[0].textContent = `${days}`;
        timeElements[1].textContent = `${hours}`;
        timeElements[2].textContent = `${minutes}`;
        timeElements[3].textContent = `${seconds}`;

        inputContainer.hidden = true;
        countdownEl.hidden = false;
    }, second);
}

function updateCountdown(e) {
    e.preventDefault();
    countDownTitle = e.srcElement[0].value;
    countDownDate = e.srcElement[1].value;

    if (countDownDate === '') {
        alert('Please select a date for the countdown.');
    } else {
        countdownValue = new Date(countDownDate).getTime();
        updateDOM();
    }
}

function reset() {
    countdownEl.hidden = true;
    inputContainer.hidden = false;
    clearInterval(countdownActive);

    countDownTitle = '';
    countDownDate = '';
    dateEl.value = '';
    document.getElementById('title').value = '';
}
countdownForm.addEventListener('submit', updateCountdown);
countdownBtn.addEventListener('click', reset);
