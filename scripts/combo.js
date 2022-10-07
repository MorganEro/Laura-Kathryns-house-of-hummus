//* todo import getter functions from database
import {getBaseDishes, getSides, getVegetables, getCombos } from "./database.js"

//* todo create build function and add the find functions to match ids with
const buildComboListItem = (combo) => {

    const dishes = getBaseDishes()
    const sides = getSides()
    const vegetables = getVegetables()

const foundDish = dishes.find(
    (dish) => {
        return dish.id === combo.baseId
    }
)
const foundSides =sides.find(
    (side) => {
        return side.id === combo.sideId
    }
)
const foundVegetable = vegetables.find(
    (vegetable) => {
        return vegetable.id === combo.vegetableId
    }
)
const totalCost = foundDish.price + foundSides.price + foundVegetable.price
const costString = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
})
return `<li>
    Receipt #${combo.id} = ${costString}
</li>`

}


//* todo export orders function to return html for orders permanent state
export const Combos = () => {
   
    const combos = getCombos()

    let html = "<ul>"

    const listItems = combos.map(buildComboListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}


