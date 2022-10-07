//* todo import getter function and assign to  variable
//* todo export sides function that creates dishes radio button list items

import { getSides, setSide } from "./database.js";

const sides = getSides()

//* todo add event listener later
document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "side") {
            setSide(parseInt(event.target.value))
        }
    }
)

export const Sides = () => {
    let html = "<ul>"
    const sidesArray = sides.map(side => {
        return `<li>
            <input type= "radio" name="side" value="${side.id}" /> ${side.name}
            </li>`
    })
    html += sidesArray.join("")
    html += "</ul>"
    return html
}