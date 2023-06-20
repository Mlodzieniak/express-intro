const express = require("express")
const about = require("./src/pages/about")
const contact = require("./src/pages/contact")
const app = express()

app.get('/',(req,res)=>{
    res.end('XDD')
})
app.use("/about", about)
app.use("/contact", contact)

app.listen(3000,()=>{
    console.log('chuj')
})