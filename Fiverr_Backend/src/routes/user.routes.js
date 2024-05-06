const {Router}=require("express")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userModel = require("../models/user.schema");
const blacklistModel = require("../models/blacklist.model");
const userRouter=Router()
require("dotenv").config()
const SECRET_KEY= process.env.SECRET_KEY


userRouter.post("/register", async (req, res)=>{
    const {name, userName, email, password, role}=req.body
    try {
        const user= await userModel.findOne({email})
        if(user){
            return res.status(400).json({message:"user allready registered"})
        }else{
            bcrypt.hash(password, 5, async (err, hash)=> {
                if(err){
                    return res.status(400).json({message:"something went wrong"})
                }
               const userDetails= new userModel({name, userName, email, password:hash, role })
               await userDetails.save()
               return res.status(201).json({message:"user rigistered successfully"})
            });
        }
    } catch (error) {
        return res.status(400).json({error:error})
    }
})

userRouter.post("/login", async (req, res)=>{
    const {email, password}=req.body
    try {
        const user= await userModel.findOne({email})
        if(!user){
            return res.status(400).json({message:"user not registered"})
        }else{
            bcrypt.compare(password, user.password, (err, result)=> {
               if(result){
            //    const token = jwt.sign({ userId:user._id, name:user.name }, SECRET_KEY)
               const accessToken= jwt.sign({userId:user._id, name:user.name },SECRET_KEY,{ expiresIn: '1h' })
               const refreshToken=jwt.sign({userId:user._id, name:user.name}, SECRET_KEY,{ expiresIn: '5min' })
               res.status(201).json({message:"user login successfully", access_Token:accessToken, refresh_Token:refreshToken})
                // return res.status(200).json({message:"user login successfully", token})
               }else{
                return res.status(400).json({message:"wrong password"})
               }
            });
        }
        
    } catch (error) {
        return res.status(400).json({message:error})
    }
})



// new add concepte
// user logout
userRouter.get("/logout", async (req, res)=>{
    const token= req.headers.authorization.split(" ")[1]
    //  const {refreshToken}=req.body
    try {
        if(!token){
            return res.status(401).json("Refresh token is required.")
        }
        const userToken= new blacklistModel({token:token})
        await userToken.save()
        return res.status(201).json("user logout successfully")
    } catch (error) {
        return res.status(400).json({message:error.message})
    }

})

module.exports=userRouter