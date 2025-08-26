const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/api/message", (req, res)=> {
    res.json({message: "Hello from Node.js!"})
})

app.listen(3000, ()=> console.log("Server running at http://localhost:3000"))