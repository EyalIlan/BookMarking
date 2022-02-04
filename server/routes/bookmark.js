
const express = require('express')

const router = express.Router()
///////

router.get('/',(req,res)=>{

})



const express = require("express")

const router = express.Router()


router.get(GetAllUrl,"/")

router.get(GetSingleUrl,"/geturl:url")

router.put(UpdateAllUrls,"/updateAll")

router.put(UpdateUrl,"/update/:id")


router.delete(DeleteALLUrls,"/deleteAll")

router.delete(DeleteUrl,"/delete/:id")



module.exports = router