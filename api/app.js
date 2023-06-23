const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const User = require('./models/user')
const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://DanielGPO7:XTtUXAGTL7wmonhx@cluster0.t04u7wg.mongodb.net/?retryWrites=true&w=majority')

app.post('/register', async (req, res) => {
    const { username, password } = req.body;
   const userDoc = await User.create({username, password})
    res.json(userDoc)
    
});

app.listen(4000)

