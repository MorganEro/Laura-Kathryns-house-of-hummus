//* todo import getter function and assign to  variable
//* todo export vegetables function that creates dishes radio button list items

import { getVegetables, setVegetable } from "./database.js";

const vegetables = getVegetables()

//* todo add event listener later
document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "vegetable") {
            setVegetable(parseInt(event.target.value))
        }
    }
)

export const Vegetables = () => {
    let html = "<ul>"
    const vegetablesArray = vegetables.map(vegetable => {
        return `<li>
            <input type= "radio" name="vegetable" value="${vegetable.id}" /> ${vegetable.name}
            </li>`
    })
    html += vegetablesArray.join("")
    html += "</ul>"
    return html
}