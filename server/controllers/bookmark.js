
const BookMark = require('../models/bookmark')


const GetAllUrl = async (req,res) =>{

    try{

        const responce = await BookMark.find({})
        res.json(responce)

    }
    catch(e){

        res.json("Cant get URLS")

    }
}

const GetSingleUrl = async (req,res) =>{
    
    const {name} = req.body
    console.log("get single ", name);
    try{
        const responce = await BookMark.find({name:name})
        res.json(responce)
    }
    catch(e){
        res.json("Cant get Url")
    }
}


const AddNewUrl = async (req,res) =>{

    const {name,url,category} = req.body
    try{
        const bookmark = new BookMark({
            name,
            url,
            category
        })
        await bookmark.save();
        res.json("Book Mark Saved")
    }
    catch(e){
        res.json("Cant save Url")
    }
}

const UpdateAllUrls = async (req,res) =>{

    try{

     
    }
    catch(e){
        
    }
}

const UpdateUrl = async (req,res) =>{

    try{



    }
    catch(e){

    }
}

const DeleteALLUrls = async (req,res) =>{

    try{



    }
    catch(e){

    }
}


const DeleteUrl = async (req,res) =>{

    try{



    }
    catch(e){

    }
}

module.exports = {
    GetAllUrl,
    GetSingleUrl,
    AddNewUrl,
    UpdateAllUrls,
    UpdateUrl,
    DeleteALLUrls,
    DeleteUrl
}