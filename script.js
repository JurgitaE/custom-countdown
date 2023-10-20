const inputContainer = document.getElementById('input-container');
const countdownForm = document.getElementById('countdownForm');
const dateEl = document.getElementById('date-picker');

let countDownTitle = '';
let countDownDate = '';

const today = new Date().toISOString().split('T')[0];
dateEl.setAttribute('min', today);

function updateCountdown(e) {
    e.preventDefault();
    countDownTitle = e.srcElement[0].value;
    countDownDate = e.srcElement[1].value;
}

countdownForm.addEventListener('submit', updateCountdown);
