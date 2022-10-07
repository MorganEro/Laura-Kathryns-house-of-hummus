//* todo import getter function and assign to  variable
//* todo export dishes function that creates dishes radio button list items

import { getBaseDishes, setDish } from "./database.js";

const baseDishes = getBaseDishes()

//* todo add event listener later
document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "dish") {
            setDish(parseInt(event.target.value))
        }
    }
)

export const Dishes = () => {
    let html = "<ul>"
    const dishesArray = baseDishes.map(dish => {
        return `<li>
            <input type= "radio" name="dish" value="${dish.id}" /> ${dish.name}
            </li>`
    })
    html += dishesArray.join("")
    html += "</ul>"
    return html
}