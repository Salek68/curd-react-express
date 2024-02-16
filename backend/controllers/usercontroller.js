import User from"../model/usersmodel.js";
export const getuser = async(req,res)=>{
    try{
const users = await User.find();
res.json(users);
    }
    catch(Error){
res.status(500).json({message : Error.message})
    }
}


export const saveusers = async (req,res)=>{
    const user = new User(req.body);
    try{
const insertuser = await user.save();
res.json({message : "add ok"})
    }catch(Error){
        res.status(400).json({message : Error.message})
    }
}


export const getuserbyid = async(req,res)=>{
    try{
const users = await User.findById(req.params.id);

res.json(users);
    }
    catch(Error){
res.status(500).json({message : Error.message})
    }
}


export const updateusers = async (req,res)=>{
    try{
    
await User.updateOne({_id: req.params.id}, {$set: req.body})
 res.json({message : "updated"})
    }
    catch{
        res.status(500).json({message : Error.message})
    }


}

    

export const deleteusers = async (req,res)=>{
    try{
const deleteuser = await User.deleteOne({_id : req.params.id })
res.status(200).json({message : "delete"})
    }
    catch{
        res.status(500).json({message : Error.message})
    }
}