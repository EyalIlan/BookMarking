
const BookMark = require('../models/bookmark')


const GetAllUrl = async (req,res) =>{

    try{



    }
    catch(e){

    }
}

const GetSingleUrl = async (req,res) =>{

    try{



    }
    catch(e){

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
    }
    catch(e){
        return e
    }
    res.status(200).send("save to database")
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