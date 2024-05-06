const express= require("express")
const cors=require("cors")
const connectDb = require("./src/config/db")
const userRouter = require("./src/routes/user.routes")
const gigsRouter = require("./src/routes/gigs.routes")
const app=express()
require("dotenv").config()

const PORT=process.env.PORT || 8080

app.use(cors())
app.use(express.json())

app.use("/user", userRouter)
app.use("/gigs", gigsRouter)

app.get("/", (req, res)=>{
    res.status(200).send("This is the home page")
})


app.listen(PORT, async ()=>{
    try {
        await connectDb()
        console.log(`server running on ${PORT} also connected Db`)
    } catch (error) {
        console.log(error)
    }
})