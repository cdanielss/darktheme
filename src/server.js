const express = require("express")
const servidor = express()

servidor.listen(3000) 

servidor.use(express.static("public"))

servidor.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
})