const {Router}=require("express")
const gigsModel = require("../models/gigs.schema")
const auth = require("../middleware/user.auth")
const gigsRouter=Router()


gigsRouter.get("/showgig", auth, async (req, res)=>{
    const {gigs}=req.body
    try {
        const gigDetails= await gigsModel.find({gigs})
        return res.status(201).json({message:"Show all gigs", gigDetails})
    } catch (error) {
        return res.status(400).json({message:error})
    }
})

gigsRouter.post("/addgig", auth, async (req, res)=>{
    const {posterImages, logo, userName, title, review, price, about, services, priceCategories, userId, name}=req.body
    if (!posterImages || !logo || !userName || !title || !price || !services || !priceCategories) {
        return res.status(400).json({ message: "Missing required fields" });
    }
    try {
        const gigDetails= new gigsModel({posterImages, logo, userName, title, review, price, about, services, priceCategories, userId, name})
        await gigDetails.save()
        return res.status(201).json({message:"Gig details added successfully"})
    } catch (error) {
        return res.status(400).json({message:error})
    }
})

gigsRouter.patch("/editgig/:id", auth, async(req, res)=>{
    const {posterImages, price, priceCategories, }= req.body
    try {
        const editgig= await gigsModel.findByIdAndUpdate(req.params.id,{posterImages, price, priceCategories})
        await editgig.save()
        return res.status(201).send({message:"userDetails updated successfully"})
    } catch (error) {
        return res.status(400).send(error)
    }
})

gigsRouter.delete("/deletegig/:id", auth, async(req, res)=>{
    try {
        const deletegig= await gigsModel.findByIdAndDelete(req.params.id)
        return res.status(201).send({message:"userDetails delete successfully",deletegig})
    } catch (error) {
        return res.status(400).send(error)
    }
})
module.exports=gigsRouter