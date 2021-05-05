const calcbutton = document.querySelectorAll('input[data-button="calcbutton"]');

const operatebutton = document.querySelectorAll('input[data-button="operatebutton"]');

const resultbutton = document.querySelectorAll('input[data-button="resultbutton"]');

const resetbutton = document.querySelectorAll('input[data-reset="CE"]');
console.log('reset selected');



calcbutton.forEach(element => {
    element.addEventListener('click', function () {
        numberOne.value += this.dataset.number

    })
});

operatebutton.forEach(element => {
    element.addEventListener('click', function () {

        operator.value = this.dataset.operator;

    })
});

resetbutton.forEach(element => {
    element.addEventListener('click', function () {
        numberOne.value = ''
        numberTwo.value = ''
        operator.value = ''
    })
});