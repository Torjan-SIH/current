const express=require("express");
const app=express();
const mysql=require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user:"root",
    host:"localhost",
    password:'',
    database:'gmk',
   
    
});
db.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
      });
    
    // app.get('/bokk',(req,res)=>{
    //     db.query("show columns from info",(err,result)=>{
    //         if(err){
    //             console.log(err);
    //         } else {
    //             res.send(result);
    //         }
    //     });
    // });
    
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
                    res.send({message:"Invalid"});
                }
                
            }
        })

    
            // if(err){
            //     res.send({err: err});
            //     // res.send({message: "Wrong username/pasword  combination"});
                
            // } 
            
            // if(result.length >0 ) {
            //     res.send(result);
            //     console.log("in if")
            
            // } else{
            //     res.send({message: "Wrong username/pasword  combination"});
            //     console.log("in else");
              
    
            // }
        });
  
    
    app.listen(3001,()=> {
        console.log("server is running on port 3001");
    });