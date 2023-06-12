function greet(name) {
    console.log(`Hello ${name}`)
}

function greetUmair(greetFn) {
    const name = "Umair"
    greetFn(name)
}

greetUmair(greet)