const express=require("express");
const userRouter=require("./user");

const router=express.Router();

router.use("/user",userRouter);

modeule.exports=router;