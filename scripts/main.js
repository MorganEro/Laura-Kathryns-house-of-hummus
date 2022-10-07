//* todo import HouseOfHummus
import { HouseOfHummus } from "./HouseOfHummus.js";


//* todo create fuction to get HTML for document 
const mainContainer = document.querySelector("#container")
const renderAllHTML = () => {
    mainContainer.innerHTML = HouseOfHummus()
}
renderAllHTML()

//* todo add eventlistener for state change
document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    renderAllHTML()
})
