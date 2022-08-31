const express = require("express");
const path=require("path");

const router = express.Router();

const roadAccident = require('../models/roadAccident');

router.get('/fetchAll',async (req,res)=>{
    const roadAccidentData = await roadAccident.find({});
    res.send(roadAccidentData);
});



module.exports = router;