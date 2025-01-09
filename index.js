const express = require("express")

const app = express()
const port = 4000;


app.get("/", (req, res)=>{
    res.send("<h1>Hello World</h1>")
})



// app.get("/Home", (req, res)=>{
//     res.send("<h1>Home Page</h1>")
// })


// app.get("/About", (req, res)=>{
//     res.send("<h1>About Page</h1>")
// })

app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`);
    
})

//GET,POST,PUT,DElete