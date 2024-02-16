import mongoose from "mongoose";
const user = mongoose.Schema({
    name : {
        type:String,
        require:true
    },
    email : {
        type:String,
        require:true
    }
    ,
    gender : {
        type:String,
        require:true
    }
})
export default mongoose.model("users",user);