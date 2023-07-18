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

BTFlashing.addEventListener('click', function () {
    BTFlashing.classList.toggle('active');
    document.getElementById('BTSequence').setAttribute("disabled","disabled");
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
    }
});

/* BTSequence.addEventListener('click', function () {
    BTSequence.classList.toggle('active');
    if (BTSequence.classList.contains('active')) {
        intervalId = setInterval(function () {
            redLight.classList.toggle('red');
            yellowLight.classList.toggle('yellow');
            greenLight.classList.toggle('green')
        }, 500);
        intervalId = setInterval(function () {
            
            yellowLight.classList.toggle('yellow');
            
        }, 1000);

        intervalId = setInterval(function () {
            
            greenLight.classList.toggle('green')
        }, 1500);
    } else {
        clearInterval(intervalId);
        redLight.classList.remove('red');
        yellowLight.classList.remove('yellow');
        greenLight.classList.remove('green')
    }
}); */