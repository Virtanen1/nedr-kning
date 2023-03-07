const countdown = document.getElementById('countdown');
const message = document.getElementById('message');

let count = 10;
countdown.innerHTML = count;

const countdownInterval = setInterval(() => {
	count--;
	countdown.innerHTML = count;

	if (count === 0) {
		clearInterval(countdownInterval);
		document.body.classList.add('red-bg');
		message.style.display = 'block';
        countdown.innerHTML = "Hej på dig!"
	}
}, 1000);