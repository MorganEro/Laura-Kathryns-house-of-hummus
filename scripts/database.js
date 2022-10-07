const database = {
    comboBuilder: {},
    baseDishes: [
        {
            id: 1,
            name: "Hummus and Hot Sauce",
            price: 5
        },
        {
            id: 2,
            name: "Chicken Fried Lamb Kabob",
            price: 7.5
        },
        {
            id: 3,
            name: "Hot Chicken Greek Salad",
            price: 7
        },
        {
            id: 4,
            name: "Brussel Sprout Moussaka",
            price: 5
        },
        {
            id: 5,
            name: "Okrakopita",
            price: 5
        },
        {
            id: 6,
            name: "Fried Onion and Grape Leaves",
            price: 6.5
        },
        {
            id: 7,
            name: "Chess Baklava",
            price: 6
        },
        {
            id: 8,
            name: "Gyro Biscuits",
            price: 4.5
        },
        {
            id: 9,
            name: "Black Eye Pea Falafel",
            price: 7
        },
        {
            id: 10,
            name: "Pecan Pastitsio",
            price: 5
        }
        
    ],
    vegetables: [
        {
            id: 1,
            name: "Okra",
            price: 3
        },
        {
            id: 2,
            name: "Collard Greens",
            price: 3.5
        },
        {
            id: 3,
            name: "Swiss Chard",
            price: 4
        },
        {
            id: 4,
            name: "Corn",
            price: 2.5
        },
        {
            id: 5,
            name: "Brussel Sprouts",
            price: 3
        },
        {
            id: 6,
            name: "Sweet Potatoes",
            price: 2.5
        },
        {
            id: 7,
            name: "Grits",
            price: 3
        },
        {
            id: 8,
            name: "Fried Green Tomatoes",
            price: 3.5
        }
            
    ],
    sides: [
        {
            id: 1,
            name: "Chicken Friend Steak",
            price: 3.5
        },
        {
            id: 2,
            name: "Bacon",
            price: 2
        },
        {
            id: 3,
            name: "Turkey Leg",
            price: 3
        },
        {
            id: 4,
            name: "Ribs",
            price: 5
        },
        {
            id: 5,
            name: "Catfish",
            price: 4
        },
        {
            id: 6,
            name: "Souvlaki",
            price: 2.5
        }
    ],
    //* todo create combo array and 0 index object
    customCombos: [
        {
            id: 1,
            baseId: 3,
            vegetableId: 5,
            sideId: 4
        }
    ]
}
export const getBaseDishes = () => {
    return database.baseDishes.map(dish => ({...dish}))
}
export const getVegetables = () => {
    return database.vegetables.map(veg => ({...veg}))
}
export const getSides = () => {
    return database.sides.map(side => ({...side}))
}
export const getCombos = () => {
    return database.customCombos.map(combo => ({...combo}))
}

//* todo create and export set states

export const setDish = (id) => {
    database.comboBuilder.baseId = id
}
export const setVegetable = (id) => {
    database.comboBuilder.vegetableId = id
}
export const setSide = (id) => {
    database.comboBuilder.sideId = id
}

//* todo export addCustomCombo and create state changed message
export const addCustomCombo = () => {
    const newCombo = {...database.comboBuilder}
    const lastIndex = database.customCombos.length - 1
    newCombo.id = database.customCombos[lastIndex].id + 1
    newCombo.timestamp = Date.now()
    database.customCombos.push(newCombo)
    database.comboBuilder = {}
    document.dispatchEvent(new CustomEvent("stateChanged"))
}