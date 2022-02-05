const express = require('express')
const app = express()
const PORT = 5000

const body = require("body-parser")

const Mongo = require('./db/database')

const BookMarkRoute = require('./routes/bookmark')

app.use(BookMarkRoute)
app.use(body.urlencoded({extended:true}))
app.use(body.json())

Mongo.DataBaseConnect()

app.listen(PORT,(req,res) =>{

    console.log(`server connected on port ${PORT}`);

})