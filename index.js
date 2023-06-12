

const buffer = Buffer.from("Umair", "utf-8")
buffer.write("Hello")
console.log(buffer.toJSON())
console.log(buffer.toString())
console.log(buffer)