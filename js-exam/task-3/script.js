/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';
const output = document.getElementById("output")
const btn = document.getElementById("btn")
const msg = document.getElementById("message")

const getData = async () => {
    const response = await fetch(ENDPOINT)

    const data = await response.json()
    console.log(data)
    btn.addEventListener("click", function(){
        message.remove()
        data.forEach(x => {
            const user = document.createElement("div")
            user.classList.add("users")
            user.innerHTML =
            `
            <img width="100px" src="${x.avatar_url}">
            <p>${x.login}
            `
            output.append(user)
        });
    })
}

getData()