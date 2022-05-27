/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';
const output = document.getElementById("output")

const getData = async () => {
    const response = await fetch(ENDPOINT)

    const data = await response.json()
    console.log(data)

    data.forEach(x => {
        const brand = document.createElement("div")
        brand.classList.add("card")
        // user.classList.add("users")
        brand.innerHTML =
        `
        <h2>${x.brand}</h2>
        `
        output.append(brand)
        x.models.forEach(y => {
            const model = document.createElement("li")
            model.textContent = y
            brand.append(model)
        })
    });
}

getData()