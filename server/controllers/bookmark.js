
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

    const {category} = req.body
    console.log("IN Update All");
    try{
        const responce = await BookMark.updateMany({ category:category },{ category:"ANIME"})
        res.json("Update Success")
    }
    catch(e){
        console.log(e);
        res.json("Cant update")
    }
}

const UpdateUrl = async (req,res) =>{

    const {id} = req.params
    try{
        const responce = await BookMark.updateOne({id},req.body)
        res.json(responce)
    }
    catch(e){
        res.json(e)
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