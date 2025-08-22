import express from "express";

const app = express();

app.use(express.json())
const PORT = 5001;

app.get("/", (req, res) => {
  res.send("Hello server");
});

app.get("/global",(req,res)=>{
  res.send("Hello Global server")
})

app.post("/register",(req,res)=>{
    let userData = req.body
    console.log(userData)
   
    res.json({msg:"user registered successfully"})
})
app.post("/students/:roll",(req,res)=>{
  let id = req.params.roll;
  console.log(id)
  res.json(id)
})

app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`)
})