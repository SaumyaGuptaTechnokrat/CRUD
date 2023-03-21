const express = require('express');

const mong = require('mongoose');

const port = 2000;

const cors  = require('cors');

const url = "mongodb://127.0.0.1:27017/myData";

const app = express();

const Employee_Routes = require("./Routes/emp_Rotes");

app.use(express.json());

app.use(cors());

app.use(Employee_Routes);

mong.connect(url,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then((success)=>{
    console.log("CONNECTED");
    app.listen(port,()=>{
        console.log("SERVER STARTED");
    })
}).catch((err)=>{
    console.log(err);
})