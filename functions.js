const BTRed = document.getElementById('BTRed');
const BTYellow = document.getElementById('BTYellow');
const BTGreen = document.getElementById('BTGreen');
const BTFlashing = document.getElementById('BTFlashing');
const BTSequence = document.getElementById('BTSequence');


const redLight = document.getElementById('redLight');
const yellowLight = document.getElementById('yellowLight');
const greenLight = document.getElementById('greenLight');

BTRed.addEventListener('click', function () {
    redLight.classList.toggle('red');
    BTRed.classList.toggle('active');
});

BTYellow.addEventListener('click', function () {
    yellowLight.classList.toggle('yellow');
    BTYellow.classList.toggle('active');
});

BTGreen.addEventListener('click', function () {
    greenLight.classList.toggle('green');
    BTGreen.classList.toggle('active');
});

let intervalId;
BTFlashing.addEventListener('click', function () {
    BTFlashing.classList.toggle('active');
    BTSequence.disabled = true;
    if (BTFlashing.classList.contains('active')) {
        intervalId = setInterval(function () {
            redLight.classList.toggle('red');
            yellowLight.classList.toggle('yellow');
            greenLight.classList.toggle('green')
        }, 500);
    } else {
        clearInterval(intervalId);
        redLight.classList.remove('red');
        yellowLight.classList.remove('yellow');
        greenLight.classList.remove('green')
        BTRed.classList.remove('active');
        BTYellow.classList.remove('active');
        BTGreen.classList.remove('active');
        BTSequence.disabled = false;
    }
});

BTSequence.addEventListener('click', function () {
    BTSequence.classList.toggle('active');
    BTFlashing.disabled = true;
    if (BTSequence.classList.contains('active')) {
        intervalId = setInterval(function () {
            redLight.classList.add('red');
            setTimeout(function () {
                BTRed.classList.remove('active');
                redLight.classList.remove('red');
                yellowLight.classList.add('yellow');
                setTimeout(function () {
                    BTYellow.classList.remove('active');
                    yellowLight.classList.remove('yellow');
                    greenLight.classList.add('green');
                    setTimeout(function () {
                        BTGreen.classList.remove('active');
                        greenLight.classList.remove('green');
                    }, 500);
                }, 500);
            }, 500);
        }, 1500);
    } else {
        clearInterval(intervalId);
        redLight.classList.remove('red');
        yellowLight.classList.remove('yellow');
        greenLight.classList.remove('green');
        BTRed.classList.remove('active');
        BTYellow.classList.remove('active');
        BTGreen.classList.remove('active');
        BTFlashing.disabled = false;
    }
});
