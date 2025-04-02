const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const ClintModel = require('./models/Clint') 

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/clint", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
.catch(err => console.log("MongoDB connection error:", err));


app.post("/login",(req, res)=>{
    const {email, password} = req.body;
    ClintModel.findOne({email:email})
    .then(user => {
        if(user) {
            if(user.password === password){
                res.json("Successfully")
            } else {
                res.json("Password is incorrect")
            }

        }else {
            res.json("No Record Exist")
        }
    })
})


app.post('/register', (req, res) => {
    ClintModel.create(req.body)
    .then(clint => res.json(clint))  
    .catch(err => res.status(500).json({ error: err.message })) 
});

app.listen(3001, () => {
    console.log("Server is running on port 3001")
});
