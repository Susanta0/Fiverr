const {Router}=require("express");
const serviceModel = require("../models/services.schema");
const manyServiceRouter=Router()



manyServiceRouter.get("/category?", async (req, res)=>{
    try {
        let query = {};
        if (req.params.category) {
            query.category = { $regex: req.params.category, $options: "i" };
        }
        const services = await serviceModel.find(query);
        res.status(200).json({
            services
        });
    } catch (error) {
        res.status(500).json({
            message: "Error finding services",
            error
        });
    }
})

manyServiceRouter.post("/addservice", async (req, res)=>{
    const {image, title, details, category}=req.body
    try {
        const serviceDetails= new serviceModel({image, title, details, category})
        await serviceDetails.save()
        return res.status(201).json({message:"service details added successfully"})
    } catch (error) {
        return res.status(400).json({message:error})
    }
})


manyServiceRouter.patch("/editservice/:id", async (req, res)=>{
    const {image, title, details}= req.body
    try {
        const editservice= await serviceModel.findByIdAndUpdate(req.params.id,{image, title, details})
        await editservice.save()
        return res.status(201).send({message:"Service details updated successfully"})
    } catch (error) {
        return res.status(400).send(error)
    }
})

manyServiceRouter.delete("/deleteservice/:id", async (req, res)=>{
    try {
        const editservice= await serviceModel.findByIdAndUpdate(req.params.id)
        await editservice.save()
        return res.status(201).send({message:"service details delete successfully"})
    } catch (error) {
        return res.status(400).send(error)
    }
})
module.exports=manyServiceRouter