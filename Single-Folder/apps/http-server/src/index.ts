import express from "express";

const app = express();

app.get("/Signup" , (req, res) =>{
    res.send("Hello ")
})

app.get("/signin", (req, res)=>{
    res.send("hii you are signed in")
})

app.get("chat", (req, res)=>{
    res.send("Chats are loaded ");
})

app.listen(3001);