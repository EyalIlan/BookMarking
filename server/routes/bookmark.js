
const express = require('express')
const BookMarkController = require('../controllers/bookmark')

const router = express.Router()

router.get("/",BookMarkController.GetAllUrl)

router.get("/geturl/:id",BookMarkController.GetSingleUrl)

router.post('/addurl',BookMarkController.AddNewUrl)

router.put("/updateAll",BookMarkController.UpdateAllUrls)

router.put("/update/:id",BookMarkController.UpdateUrl)

router.delete("/deleteAll",BookMarkController.DeleteALLUrls)

router.delete("/delete/:id",BookMarkController.DeleteUrl)


module.exports = router