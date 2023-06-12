// const EventEmitter = require("events")

// const emitter = new EventEmitter()
// emitter.on("order-pizza", (size, topping) => {
//     console.log(`Order Received, Baking ${size} Pizza with ${topping} `)
// })

// emitter.on("order-pizza", (size) => {
//     if (size == "Large") {
//         console.log("Serving Extra Complements")
//     }
// })
// emitter.emit("order-pizza", "Large", "Mushroom")


const PizzaShop = require("./pizza-shop")
const DrinkMachine = require("./drink-machine")
const drinkMachine = new DrinkMachine()

const pizzaShop = new PizzaShop()

pizzaShop.on("order", (size, topping) => {
    console.log(`Order Received, Baking ${size} Pizza with ${topping} `)
    drinkMachine.serveDrink(size)
})
pizzaShop.order("Large", "Tommato")
pizzaShop.displayOrderNumber()

