const express = require('express')
const app = express()
const PORT = 5000

const body = require("body-parser")

const BookMarkRoute = require('./routes/bookmark')

app.use(BookMarkRoute)
app.use(body.urlencoded({extended:true}))
app.use(body.json())




app.listen(PORT,(req,res) =>{

    console.log(`server connected on port ${PORT}`);

})