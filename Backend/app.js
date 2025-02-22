require('dotenv').config();

const express = require('express');
const app = express();

// Cross Origin Setup
const cors = require('cors');
app.use(cors({
    origin:["http://localhost:5173" ],
    credentials:true
}));

const cookieParser = require('cookie-parser')

app.use(cookieParser());

// DB Connections
const ConnectDB  = require('./controller/mongoose.js');
ConnectDB(); 


//Parsing the data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Requriing All Routes
const homeRoute = require('./routes/home.js');
const RegistorRoute = require("./routes/Registor.js");
const FetchUsers = require('./routes/User.js');
const Request = require("./routes/Request.js");
// All Middlewears
app.use("/",homeRoute);
app.use("/",RegistorRoute);
app.use("/",FetchUsers);
app.use("/",Request);

app.get('/end',(req,res)=>{
    process.exit(0);
})


app.listen(process.env.PORT,(req,res)=>{
    console.log("Listenning on PORT:"+process.env.PORT);
})

