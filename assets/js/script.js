const calcbutton = document.querySelectorAll('input[data-button="calcbutton"]');
const operatebutton = document.querySelectorAll('input[data-button="operatebutton"]');
const resultButton = document.getElementById('resultButton');
const resetbutton = document.querySelectorAll('input[data-reset="CE"]');


//fonction pour remplir la case Number 1 ou pour chaque chiffre clique, il entre dans cette case
calcbutton.forEach(element => {
    //on ajoute un ecouteur de clic sur les boutons chiffre
    element.addEventListener('click', function () {
        //si l'operateur n'a pas ete presse
        if (operator.value != '') {
            //alors on affiche la valeur dans la case Number 2
            numberTwo.value += this.dataset.number
        } else {
            //sinon dans la case Number 1
            numberOne.value += this.dataset.number
        }
    })
});

//fonction ajoutant l'operateur dans la case operator
operatebutton.forEach(element => {
    //pour chaque clic sur le bouton operateur, 
    element.addEventListener('click', function () {
        //on execute une fonction anonyme en envoyant la valeur dans la case operator
        operator.value = this.dataset.operator;
    })
});

//fonction reset des valeurs saisies
resetbutton.forEach(element => {
    //pour chaque clic sur CE, on efface les valeurs des 4 inputs
    element.addEventListener('click', function () {
        numberOne.value = ''
        numberTwo.value = ''
        operator.value = ''
        result.value = ''
    })
});

// fonction calcul des resultats

//on ecoute le bouton resultat
resultButton.addEventListener('click', function () {

        // et on lance un switch sur l'operateur
        let testOperator = (operator.value)

        switch (testOperator) {
        case '+' :
            testOperator = +(numberOne.value) + +(numberTwo.value)
           break;

        case '-' :
            testOperator = +(numberOne.value) - +(numberTwo.value)
            break;
        
        case 'x' :
            testOperator = +(numberOne.value) * +(numberTwo.value)
            break;
        
        case '/' :
            testOperator = +(numberOne.value) / +(numberTwo.value)
            break;
            
        case '%' :
            testOperator = +(numberOne.value) % +(numberTwo.value)
            break;

        default :
            result.value = 'Entrez un operateur'
        }
        //on renvoie la valeur du calcul dans l'input result
        result.value = '=' + '  ' + testOperator;   
    })