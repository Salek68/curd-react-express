import  Express  from "express";
import mongoose from "mongoose";
import cors from "cors";
import userroute from "./routes/userroute.js"
const app = Express();
mongoose.connect("mongodb://localhost:27017/sherkat",{
    usenewurlparser:true,
    useunifiedtopology:true
})
const db = mongoose.connection;
db.on("Error",(Error) => console.log(Error));
db.once("open",()=> console.log("connect ok"))
app.use(cors());
app.use(Express.json());
app.use(userroute);
// app.get("/",(req,res)=>{
//     res.send("helo")
// })
app.listen(5000,()=>console.log("ok"));