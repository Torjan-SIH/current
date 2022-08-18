
const express=require("express");
const app=express();
const mysql=require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());
let verifyUser="";
let verifyRole="";


const db = mysql.createConnection({
    user:"root",
    host:"localhost",
    password:'',
    database:'gmk',
   
    
});
// db.connect(function(err) {
//         if (err) throw err;
//         console.log("Connected!");
//       });
    
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
    
    //forgotpassword
    app.post('/forgotpage',(req,res) =>
    {
        const email = req.body.email; 
        const role=req.body.role;
        
       
        if(role==="agencies"){
            
        db.query("select password from login where username=?",[email],(err,result) =>     //take password from database
        {
            if(err)
            {
                console.log(err);
            }
            else{
                if(result.length>0)
                {
                    
                    
                    var ajson =  JSON.parse(JSON.stringify(result));
                    
                    
                    var nodemailer = require('nodemailer');
                    var transporter = nodemailer.createTransport({
                    service: 'outlook',
                     auth: {
                     user: 'sumanth.k2019@gmail.com',
                     pass: 'JEE!mains1'
                         }
                    });

                var mailOptions = {
              from: 'sumanth.k2019@gmail.com',
                 to: email,
                 subject: 'Sending mail for forgot password from One Nation One Funding',
                text: 'Your Password is'+ajson[0].password
                };

        transporter.sendMail(mailOptions, function(error, info){
             if (error) {
                res.send({wrong:'mail not sent'});
                }         
                else {
                 res.send({message:"mail sent"})
                }
                });
                }
                else
                {
                    res.send({noone:'there are no users with this email'});  
                }
            }

        })
    }
   else if(role==="hei"){
        db.query("",[],(err,result) =>     //take password from database
        {
            if(err)
            {

                console.log(err);
            }
            else{
                if(result.length>0)
                {
                    var hjson =  JSON.parse(JSON.stringify(result));
                    var nodemailer = require('nodemailer');
                    var transporter = nodemailer.createTransport({
                    service: 'outlook',
                     auth: {
                     user: 'sumanth.k2019@gmail.com',
                     pass: 'JEE!mains1'
                         }
                    });

                var mailOptions = {
              from: 'sumanth.k2019@gmail.com',
                 to: email,
                 subject: 'Sending mail for forgot password from One Nation One Funding',
                text: 'Your Password is'+hjson[0].password
                };

        transporter.sendMail(mailOptions, function(error, info){
             if (error) {
                  res.send({wrong:'mail not sent'});
                }         
                else {
                    res.send({message:"mail sent"});
                }
                });
                }
                else
                {
                    res.send({noone:'there are no users with this email'}); 
                }
            }

        })
    }
    else{
       
            db.query("",[],(err,result) =>     //take password from database
            {
                if(err)
                {
        console.log(err);
                }
                else{
                    if(result.length>0)
                    {
                        var ojson =  JSON.parse(JSON.stringify(result));
                         var nodemailer = require('nodemailer');
                        var transporter = nodemailer.createTransport({
                        service: 'outlook',
                         auth: {
                         user: 'sumanth.k2019@gmail.com',
                         pass: 'JEE!mains1'
                             }
                        });
    
                    var mailOptions = {
                  from: 'sumanth.k2019@gmail.com',
                     to: email,
                     subject: 'Sending mail for forgot password from One Nation One Funding',
                    text: 'Your Password is'+ojson[0].password
                    };
    
            transporter.sendMail(mailOptions, function(error, info){
                 if (error) {
                    res.send({wrong:'mail not sent'});
                    }         
                    else {
                        res.send({message:"mail sent"});
                    }
                    });
                    }
                    else
                {
                    res.send({noone:'there are no users with this email'}); 
                }
                }
    
            })
        }
    }
    )
//ending of forgot password
    
    
    
    app.get('/fundoeevaluation',(req,res) => {
        db.query(" ",(err,result)=>{
            if(err){
                console.log(err);
            } else {
                res.send(result);
            }
        });
    });
    
    app.get('/fundSchemes',(req,res)=>{
       
        db.query("",[verifyUser],(err,result)=>{
            if(err)
            {console.log(err);}
            else{res.send(result);}
        })
    })
    app.get('/fundOeEvaluate',(req,res)=>{
       
        db.query("",[verifyUser],(err,result)=>{
            if(err)
            {console.log(err);}
            else{res.send(result);}
        })
    })
    app.get('/viewHeiPropo',(req,res)=>{
       
        db.query("",[verifyUser],(err,result)=>{
            if(err)
            {console.log(err);}
            else{res.send(result);}
        })
    })
    app.get('/oeDashboard',(req,res)=>{
       
        db.query("",[verifyUser],(err,result)=>{
            if(err)
            {console.log(err);}
            else{res.send(result);}
        })
    })
   
    app.get('/fundsDashboard',(req,res)=>{
        
        
        db.query("",[verifyUser],(err,result)=>{
            if(err)
            {console.log(err);}
            else{res.send(result);}
        })
    })
    app.get('/heiDashboard',(req,res)=>{
       
        db.query("",[verifyUser],(err,result)=>{
            if(err)
            {console.log(err);}
            else{res.send(result);}
        })
    })
    //---------OE Register page backend------------

app.post('/oeregister',(req,res) => {
    const employeename = req.body.employeename;
    const companyname =  req.body.companyname;
    const companyemail = req.body.companyemail;
    const companycontact = req.body.companycontact;
    const companyaddress = req.body.companyaddress;
    const country = req.body.country;
    const state = req.body.state;
    const city = req.body.city;
    const pincode = req.body.pincode
    const employeerole = req.body.employeerole;
    const verficationcode = req.body.verficationcode
    const agencyname = req.body.agencyname;
    const passwd = req.body.passwd;
    const dor = req.body.dor;
    const status = null;

    //const query = "INSERT INTO oeregister(ename,cname,cemail,ccontact,caddress) VALUES (?,?,?,?,?)";
    //const values = [employeename,companyname,companyemail,companycontact,companyaddress];
    db.query("INSERT INTO oeregister(ename,cname,cemail,ccontact,caddress) VALUES (?,?,?,?,?)",[employeename,companyname,companyemail,companycontact,companyaddress],(err,result) =>{
        if(err){
            console.log(err);
        }
        else{
            if(result.affectedRows===1){
                res.send("inserted1");
                console.log(result);
                console.log("Row Inserted")
            }
            else{
                res.send("Error")
                console.log("Failed to insert");
            }

        }
    })
})


//---------Agency Register page backend------------


app.post('/agencyregister',(req,res) => {
    const name = req.body.name;
    const email =  req.body.email;
    const contact = req.body.contact;
    const address = req.body.address;
    const country = req.body.country;
    const state = req.body.state;
    const city = req.body.city;
    const pincode = req.body.pincode;
    const estdate = req.body.estdate;
    const passwd = req.body.passwd;
    const dor = req.body.dor;
    const status = null;

    //const query = "INSERT INTO oeregister(ename,cname,cemail,ccontact,caddress) VALUES (?,?,?,?,?)";
    //const values = [employeename,companyname,companyemail,companycontact,companyaddress];
    db.query("INSERT INTO oeregister() VALUES ()",[name,email,contact,address,country,state,city,pincode,estdate,passwd,dor],(err,result) =>{
        if(err){
            console.log(err);
        }
        else{
            if(result.affectedRows===1){
                res.send("inserted1");
                console.log(result);
                console.log("Row Inserted");
            }
            else{
                res.send("Error")
                console.log("Failed to insert");
            }

        }
    })
})


//---------HEI Register page backend------------


app.post('/heiregister',(req,res) => {
    const category = req.body.category;
    const name = req.body.name;
    const email =  req.body.email;
    const contact = req.body.contact;
    const address = req.body.address;
    const country = req.body.country;
    const state = req.body.state;
    const city = req.body.city;
    const pincode = req.body.pincode;
    const passwd = req.body.passwd;
    const govtcert = req.body.govtcert;
    const dor = req.body.dor;
    const status = null

    //const query = "INSERT INTO oeregister(ename,cname,cemail,ccontact,caddress) VALUES (?,?,?,?,?)";
    //const values = [employeename,companyname,companyemail,companycontact,companyaddress];
    db.query("INSERT INTO oeregister() VALUES ()",[category,name,email,contact,address,country,state,city,pincode,govtcert,passwd,dor],(err,result) =>{
        if(err){
            console.log(err);
        }
        else{
            if(result.affectedRows===1){
                res.send("inserted1");
                console.log(result);
                console.log("Row Inserted");
            }
            else{
                res.send("Error")
                console.log("Failed to insert");
            }

        }
    })
})


    app.post('/loginpage',(req,res)=>{
        const username = req.body.username; 
        
        const password = req.body.password;
        const role= req.body.role;
        verifyUser=username;
        verifyRole=role;
    
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


//---------------Card view backend------------------


    
    app.listen(3001,()=> {
        console.log("server is running on port 3001");
    });
