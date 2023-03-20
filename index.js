const Sequelize=require("sequelize");
const express=require("express");
const app=express();
async function main(){
    try {
        const sequelize=new Sequelize("blog","root","abhi@123",{
            host:"localhost",
            dialect:"mysql",
            pool:{
                max:10,
                min:0,
                idle:1000
            }
        })
        await sequelize.authenticate();
        console.log("connection established")
        const User=sequelize.define("users",{
            id:{
                type:sequelize.INTEGER,
                primaryKey:true,
                autoIncrement:true
            }
            ,
            email:{
                type:sequelize.STRING,
                allowNull:false,
                unique:true

            },
            password:{
                type:sequelize.STRING,
                allowNull:false
            }
        })
        
    } catch (error) {
        console.log("error is",error)
    }
}
// main();

app.get("/hello",(req,res)=>{
    res.send("hello with server 1")
})
app.listen(8080,()=>{
    console.log("server is running")
})

app.listen()