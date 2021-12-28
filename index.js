// let qrContainer = document.getElementById("qrcode");

// const input = document.getElementById("input");
// const button = document.getElementById("button");
// const form = document.getElementById("form");
// // const reset = document.getElementById('reset')

// form.onsubmit = function (e) {
//   if (input.value.length > 1) {
//     e.preventDefault();
//     let qr = new QRCode(qrContainer, {
//       text: input.value,
//       width: 300,
//       height: 300,
//       colorDark: "#000000",
//       colorLight: "#ffffff",
//     })
//
//   }
//   console.log(e);
// };

// input.addEventListener("keyup", (e) => {
//     e.preventDefault()
//   e.target.value.length >= 1 ? button.disabled = false : button.disabled = true;

// });

// input.onchange = function(e) {
  
// }
// reset.onclick = function () {
//   qrContainer.innerHTML = ""  
// }


let input = document.querySelector('input');
let button = document.querySelector('button');
let qrcode = new QRCode(document.querySelector('#qrcode'), {    
    width: 400,
    height: 400,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
});


input.addEventListener("keyup", (e) => {
    e.preventDefault()
  e.target.value.length >= 1 ? button.disabled = false : button.disabled = true;

});

button.addEventListener('click', () => {
    let inputValue = input.value;
    qrcode.makeCode(inputValue);
    input.value = "";
})
