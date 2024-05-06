const {connect}=require("mongoose")

const connectDb= ()=>{
    connect(process.env.MONGO_URL)
}

module.exports=connectDb
