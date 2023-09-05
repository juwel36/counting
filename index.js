
function startTimer() {
    document.getElementById('startButton').style.display = 'none';
    document.getElementById('timer').style.display = 'block';

    let seconds = 5;
    const timerInterval = setInterval(function() {
        document.getElementById('timer').textContent = seconds;
        seconds--;

        if (seconds < 0) {
            clearInterval(timerInterval);
            document.getElementById('timer').style.display = 'none';
            document.getElementById('clickLink').style.display = 'block';
        }
    },1000);
}
