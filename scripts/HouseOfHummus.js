//* todo import base, combo, side, and vegetable functions from respective modules
import { Dishes } from "./base.js";
import { Combos } from "./combo.js";
import { Sides } from "./side.js";
import { Vegetables } from "./vegetable.js";
import { addCustomCombo } from "./database.js";

//* todo export function that shows modified state to the user when choices are made

export const HouseOfHummus = () => {
    return `
    <h1>Laura Kathryn's House of Hummus</h1>

    <article class="choices">
        <section class="choices__dishes options">
            <h2>Base Dish</h2>
            ${Dishes()}
        </section>
        <section class="choices__vegetables options">
            <h2>Vegetables</h2>
            ${Vegetables()}
        </section>
        <section class="choices__sides options">
            <h2>Sides</h2>
            ${Sides()}
        </section>
    </article>

    <article>
        <button id="purchaseButton">Purchase Combo</button>
    </article>

    <article class="customCombos">
        <h2>Custom Jewelry Orders</h2>
        ${Combos()}
    </article>
    `
}

//* todo add event listener for purchaseCombo button
document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "purchaseButton") {
            addCustomCombo()
        }
    }
)