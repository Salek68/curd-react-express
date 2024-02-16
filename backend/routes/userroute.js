import  Express  from "express";
import { deleteusers, getuser, getuserbyid, saveusers, updateusers } from "../controllers/usercontroller.js";
const router = Express.Router();

router.get("/users",getuser)
router.post("/users",saveusers)
router.get("/users/:id",getuserbyid)
router.patch("/users/:id",updateusers)
router.delete("/users/:id",deleteusers)
export default router;