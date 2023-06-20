const express = require("express")
const router = express.Router()

router.get("/",(req,res)=>{
    res.writeHead(200,{"content-type":"text/plain"}).end('Contact')
})
module.exports = router