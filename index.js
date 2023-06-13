const http = require("http")
const fs = require("fs")

const server = http.createServer((req, res) => {

    const name = "Umair"
    res.writeHead(200, { "content-type": "text/html" })
    // fs.createReadStream("./index.html").pipe(res)

    let html = fs.readFileSync("./index.html", "utf-8")
    html = html.replace("{{name}}", name)
    res.end(html)
})

server.listen(3000, () => {
    console.log("Server Running on port 3000")
})