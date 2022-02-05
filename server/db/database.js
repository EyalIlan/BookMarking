
const mongoose = require("mongoose")



const DataBaseConnect = (req,res) =>{

    mongoose.connect("mongodb+srv://eyal012345:lopital1@cluster0.4n65p.mongodb.net/BookMark?retryWrites=true&w=majority")
    .then(p =>{
        console.log('Database Connected');
    })
    .catch(e =>{
        console.log('Error Connecting to database');
    })
}


module.exports = {
    DataBaseConnect
} 