const http = require("http")

const server = http.createServer((req, res) => {

    const SuperHero = {
        firstName: "Umair",
        lastName: "Ahmed"
    }
    res.writeHead(200, {"content-type": "application/json"})
    res.end(JSON.stringify(SuperHero))
})

server.listen(3000, () => {
    console.log("Server Running on port 3000")
})