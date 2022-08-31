const mongoose=require('mongoose');

const roadAccidentSchema=new mongoose.Schema({
    url:{
        type:String
    },
    title:{
        type:String
    },
    body:{
        type:String
    },
    date:{
        type:Date
    },
    language:{
        type:String
    },
    image:{
        type:String
    }
});

const roadAccident=mongoose.model('roadaccidents',roadAccidentSchema);
module.exports=roadAccident;