const express=require('express')
 require('./db')
 require('dotenv').config();
 const userRouter=require('./routes/user')
 const app=express()
 const PORT=process.env.PORT || 8000;
 app.use(express.json());
//  app.post('/api/user/create',(req,res)=>{
//    const {name,email,password}=req.body
//    const newUser =new User({
//       name,
//       email,
//       password
//    })
//    res.send(newUser),
//  })
app.use('/api/user',userRouter)
 app.listen(PORT, ()=>{
    console.log(`app is running on port ${PORT}`)
 })