/* 
    I prefer use Vanilla JS than jQuery,
    so in this task I use Vanilla JS
    and I add HTML element in index.html
    like C and change color to btn-success
*/

// let buttonClick = document.querySelectorAll('.numCal');
// let formulaScreen = document.getElementById('formula');
// let result = document.getElementById('result');
// let eraseField = document.querySelector('.erase');
// let equalSign = document.querySelector('.equal');
// let oprButton = document.querySelectorAll('.opr');
// // let row = document.querySelectorAll('.row');

// // let lengthRow = row.length;

// let output = '';
// let resultField = '';
// let clearFormula = false;

window.onload = function() {
    // let row = document.querySelectorAll('.row');

    // let lengthRow = row.length;

    // clearBtn = document.createElement('div');
    // document.appendChild(clearBtn);
    // clearBtn.className = 'col-sm-3';
    // clearBtn.innerHTML = 'C';

    var txt1 = "<p>Text.</p>";              // Create text with HTML
    var txt2 = $("<p></p>").text("Text.");  // Create text with jQuery
    var txt3 = document.createElement("p");
    txt3.innerHTML = "Text.";               // Create text with DOM
    $("body").append(txt1, txt2, txt3); 
}

// // Browser Cookies
// function writeCookiesForm() {
//     cookieValue= escape(output) + ';';
//     document.cookie='formula=' + cookieValue;
// }

// function writeCookiesRes() {
//    cookieValue= escape(resultField) + ';';
//    document.cookie='result=' + cookieValue;
// }

// // Click button and insert to formula input
// for (let i = 0 ; i < buttonClick.length; i++) {
//     buttonClick[i].addEventListener('click', function() {
//         let getNumber = '';
//         if (clearFormula === false) {
//             getNumber = this.innerHTML;
//             output = formulaScreen.value += getNumber;
//         } else if (clearFormula === true) {
//             formulaScreen.value = '';
//             getNumber = this.innerHTML;
//             output = formulaScreen.value += getNumber;
//             clearFormula = false;
//         }
//     })
// }

// // Add operator and is used to reset formula field after = is clicked
// for(let i = 0 ; i < oprButton.length; i++) {
//     oprButton[i].addEventListener('click', function() {
//         let getOpr = '';
//         if (clearFormula === false) {
//             getOpr = this.innerHTML;
//             output = formulaScreen.value += getOpr;
//         } else {
//             formulaScreen.value = '';
//             clearFormula = false;
//         }
//     })
// }

// // To clear formula and result field
// eraseField.addEventListener('click', function() {
//     if (this.innerHTML === 'C') {
//         formulaScreen.value = '';
//         result.value = '';
//     }
// })

// // equal
// equalSign.addEventListener('click', function() {
//     if (this.innerHTML === '=' && clearFormula === false) {
//         resultField = eval(output);
//         result.value = resultField;
//         writeCookiesForm();
//         writeCookiesRes();
//         // formulaScreen.value = '';
//         clearFormula = true;
//     } else {
//         formulaScreen.value = '';
//         clearFormula = false;
//     }
// })