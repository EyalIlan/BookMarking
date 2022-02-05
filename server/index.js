const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const PORT = 5000
const Mongo = require('./db/database')
const BookMarkRoute = require('./routes/bookmark')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.use(BookMarkRoute)



app.use((req, res) => {
    res.setHeader('Content-Type', 'application/json')
})

Mongo.DataBaseConnect()

app.listen(PORT,(req,res) =>{

    console.log(`server connected on port ${PORT}`);

})