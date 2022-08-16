const express=require("express");
const app=express();
const mysql=require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user:"root",
    host:"localhost",
    password:'root',
    database:'onof',
    port: '8889'
    
});
// db.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//   });


app.get('/fundscheme',(req,res) => {
    db.query("select * from info",(err,result)=>{
        if(err){
            console.log(err);
        } else {
            res.send(result);
        }
    });
});


app.get('/funddashboard',(req,res) => {
    db.query(" ",(err,result)=>{
        if(err){
            console.log(err);
        } else {
            res.send(result);
        }
    });
});


app.get('/fundoeevaluation',(req,res) => {
    db.query(" ",(err,result)=>{
        if(err){
            console.log(err);
        } else {
            res.send(result);
        }
    });
});


app.get('/oedashboard',(req,res) => {
    db.query(" ",(err,result)=>{
        if(err){
            console.log(err);
        } else {
            res.send(result);
        }
    });
});


app.post('/loginpage',(req,res)=>{
    const username = req.body.username; 
    const password = req.body.password;
    const role= req.body.role;
    

    db.query("SELECT * FROM login WHERE (username = ? )AND (password=?) AND (login=?)",
    [username,password,role],
    (err,result)=>{
        if(err)
        {console.log(err);}
        else{
            if(result.length>0)
            {
                console.log(result);
                res.send(result);
            }
            else{
                res.send({message:"Wrong username/password combination"});
            }
            
        }
    })
});

//---------Register page backend------------

// app.post('/register',(req,res) => {
//     const NameOfAgency=req.body.NameOfAgency;
//     const email = req.body.email;
//     const contactNo = req.body.contactNo;
//     const address = req.body.address;
//     const dateOfAut = req.body.dateOfAut;
//     const passwdRegister = req.body.passwdRegister;
//     const role = req.body.role;

//     // const sql = "INSERT INTO aregister(aname, aemail, acontact, aaddress, adateaut, arole) VALUES ?";
//     // const value = [NameOfAgency, email, contactNo, address, dateOfAut, govtAutCert, role];
//     db.query("INSERT INTO aregister(aname, aemail, acontact, aaddress, adateaut, arole) VALUES (?,?,?,?,?,?)",[NameOfAgency,email,contactNo,address,dateOfAut,role],(err,result) => {
//         if(err)
//             console.log(err);
//         else{
//             res.send("Row inserted")
//             console.log(result);
//         }
//     })
// })

app.listen(3001,()=> {
    console.log("server is running on port 3001");
});