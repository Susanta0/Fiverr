// const access =(roles)=>{
//     return (req, res, next)=>{
//         const currentUserRole=req.user.role
//         if(roles.includes(currentUserRole)){
//             next()
//         }else{
//             return res.status(401).json("you are not authorzied to access this route")
//         }
//     }
// }

// module.exports=access