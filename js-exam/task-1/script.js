/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

const form = document.querySelector("form")
const input = document.querySelector("input")
const output = document.getElementById("output")

form.addEventListener("submit", function(e){
    e.preventDefault()
    const lb = input.value * 2.2046
    const g = input.value / 0.001
    const oz = input.value * 35.274
    if(!input.value) return
    if(isNaN(input.value)) {
        alert("Please enter a number")
        input.value = ""
    } else {
        output.innerHTML =
        `
        <h2>${input.value} kg is equal to:</h2>
        <p>${lb.toFixed(2)} lb</p>
        <p>${g.toFixed(2)} g</p>
        <p>${oz.toFixed(2)} oz</p>
        `
        input.value = ""
    }
})