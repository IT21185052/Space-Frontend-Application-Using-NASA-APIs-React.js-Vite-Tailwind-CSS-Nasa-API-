const express = require ("express")
const mongoose = require("mongoose")
const cors = require("cors")
const UserModel = require('./models/User')

const app = express()
app.use(express.json())
app.use(cors())

const DB_URL ='mongodb+srv://dhananjayayapa99:zmopP8sGYo67qAFk@usermanage.5xkpmuo.mongodb.net/?retryWrites=true&w=majority&appName=UserManage';

mongoose.connect(DB_URL)
.then(() =>{
     console.log('MongoDB connected');
})
.catch((err) => console.log('DB Connection Error',err));

app.post("/login",(req,res)=>{
    const{email,password} = req.body;
    UserModel.findOne({email:email})
    .then(Users=>{
        if(Users){
            if(Users.password===password){
                res.json({ message: "Success" });
            }else{
                res.status(401).json({ message:"Email and Password do not match"}); // Change the status code to 401
            }
        }else{
            res.status(401).json({ message:"No record existed"}); // Change the status code to 401
        }
    })
    .catch(err => res.status(500).json({ error: err.message }));
})

// Add this route to your backend API
app.get('/check-email', (req, res) => {
    const { email } = req.query;
    UserModel.findOne({ email })
      .then(user => {
        if (user) {
          res.json({ exists: true });
        } else {
          res.json({ exists: false });
        }
      })
      .catch(err => res.status(500).json({ error: err.message }));
  });
  

app.post('/register',(req,res)=>{
    UserModel.create(req.body)
    .then(Users=>res.json(Users))
    .catch(err=>res.json(err))
})

app.listen(3000,()=>{
    console.log("server is running")
})