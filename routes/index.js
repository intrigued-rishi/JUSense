const express = require("express");
const path=require("path");

const router = express.Router();

const roadAccident = require('../models/roadAccident');

router.get('/fetchAll',async (req,res)=>{
    const roadAccidentData = await roadAccident.find({}).sort([['date', -1]]);
    res.json(roadAccidentData);
});



module.exports = router;