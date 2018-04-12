/* 
    I prefer use Vanilla JS than jQuery,
    so in this task I use Vanilla JS more,
    and jQuery a little
    and I add HTML element in index.html
    like C and change color to btn-success
*/

window.onload = function() {
    let clearElem = 
        '<div class="col-sm-3">' +
            '<button type="button" class="btn btn-danger btn-lg erase" style="width: 100%;">C</button>' +
        '</div>';

    $('.row').last().prepend(clearElem);
    $('.col-sm-4').removeClass('col-sm-4').addClass('col-sm-3');

    let changeClass = document.querySelectorAll('.btn-info');

    // Replace class btn-info to btn-success
    for (let i = 0 ; i < changeClass.length; i++) {
        let oprChange = changeClass[i].textContent;
        if ( oprChange === '+' || oprChange === '-' || oprChange === '*' || oprChange === '/') {
            changeClass[i].classList.add('btn-success', 'opr');
            changeClass[i].classList.remove('btn-info');
        } else if (oprChange === '=') {
            changeClass[i].classList.add('btn-success', 'equal');
            changeClass[i].classList.remove('btn-info');
        }
    }

    let buttonClick = document.querySelectorAll('.btn-info');
    let formulaScreen = document.getElementById('formula');
    let result = document.getElementById('result');
    let eraseField = document.querySelector('.erase');
    let equalSign = document.querySelector('.equal');
    let oprButton = document.querySelectorAll('.opr');

    let output = '';
    let resultField = '';
    let clearFormula = false;

    // Browser Cookies
    function writeCookiesForm() {
        cookieValue= escape(output) + ';';
        document.cookie='formula=' + cookieValue;
    }

    function writeCookiesRes() {
    cookieValue= escape(resultField) + ';';
    document.cookie='result=' + cookieValue;
    }

    // Click button and insert to formula input
    for (let i = 0 ; i < buttonClick.length; i++) {
        buttonClick[i].addEventListener('click', function() {
            let getNumber = '';
            if (clearFormula === false) {
                getNumber = this.innerHTML;
                output = formulaScreen.value += getNumber;
            } else if (clearFormula === true) {
                formulaScreen.value = '';
                getNumber = this.innerHTML;
                output = formulaScreen.value += getNumber;
                clearFormula = false;
            }
        })
    }

    // Add operator and is used to reset formula field after = is clicked
    for(let i = 0 ; i < oprButton.length; i++) {
        oprButton[i].addEventListener('click', function() {
            let getOpr = '';
            if (clearFormula === false) {
                getOpr = this.innerHTML;
                output = formulaScreen.value += getOpr;
            } else {
                formulaScreen.value = '';
                clearFormula = false;
            }
        })
    }

    // To clear formula and result field
    eraseField.addEventListener('click', function() {
        if (this.innerHTML === 'C') {
            formulaScreen.value = '';
            result.value = '';
        }
    })

    // equal
    equalSign.addEventListener('click', function() {
        if (this.innerHTML === '=' && clearFormula === false) {
            resultField = eval(output);
            result.value = resultField;
            writeCookiesForm();
            writeCookiesRes();
            // formulaScreen.value = '';
            clearFormula = true;
        } else {
            formulaScreen.value = '';
            clearFormula = false;
        }
    })

    // When refresh page the formula and result input become empty
    function clearIt(){
        formulaScreen.value = '';
        result.value = '';
    }
    window.onbeforeunload = clearIt;
}