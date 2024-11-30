const express = require('express')
const cors = require('cors');
const { db } = require('./db/db');
const { readdirSync } = require('fs');
require('dotenv').config()

const app = express()
const port = process.env.PORT

// MiddleWare
app.use(express.json());
app.use(cors());


// Routes 


app.get('/', (req, res)=>{
    res.send("Welcome to Home");
})

const Server = () =>{
    db();
    app.listen(port, () => console.log(`App listening on port ${port}!`))
}
Server();