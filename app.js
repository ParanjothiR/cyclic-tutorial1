const express=require("express")
const app=express()
const port=process.env.PORT || 4000;

app.get('/',(req,res)=>{
    res.json({message:"helo i am backend"})
})
app.listen(port,()=>{
    console.log(`The server is Running ${port}`)
})

