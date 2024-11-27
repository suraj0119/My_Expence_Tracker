const express = require('express')
const cors = require('cors');
require('dotenv').config()

const app = express()
const port = process.env.PORT

// MiddleWare
app.use(express.json());
app.use(cors());

app.get('/', (req, res)=>{
    res.send("Welcome to Home");
})

const Server = () =>{
    app.listen(port, () => console.log(`App listening on port ${port}!`))
}
Server();