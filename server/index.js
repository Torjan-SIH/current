
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
    password:'root',
    database:'onof',
    port: '8889'
   
    
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
            
        db.query("",[email],(err,result) =>     //take password from database
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
    const employeerole = req.body.employeerole;
    const companyname =  req.body.companyname;
    const companyemail = req.body.companyemail;
    const companycontact = req.body.companycontact;
    const companyaddress = req.body.companyaddress;
    const state = req.body.state;
    const city = req.body.city;
    const verficationcode = req.body.verficationcode;
    const agencyname = req.body.agencyname;
    const passwd = req.body.passwd;
    const dor = req.body.dor;
    const userstatus = req.body.userstatus;

    //const query = "INSERT INTO oeregister(ename,cname,cemail,ccontact,caddress) VALUES (?,?,?,?,?)";
    //const values = [employeename,companyname,companyemail,companycontact,companyaddress];

    db.query("INSERT INTO oeuser(,oeroleoename,oecomp,compmail,compcontact,compaddress,state,city,vercode,aname,oepasswd,dor,status) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)",[employeerole,employeename,companyname,companyemail,companycontact,companyaddress,state,city,verficationcode,agencyname,passwd,dor,userstatus],(err,result) =>{
        if(err){
            console.log(err);
        }
        else{
            if(result.affectedRows===1){
                res.send("inserted1");
                
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
           subject: 'Registratation for One Nation One Funding',
           text: employeename+',Thank you for registering one nation one funding as a funding agency.we will intimate you about the activation of your account.username'+companyemail
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
    const state = req.body.state;
    const city = req.body.city;
    const estdate = req.body.estdate;
    const govtcert = req.body.govtcert;
    const itcert = req.body.itcert;
    const passwd = req.body.passwd;
    const dor = req.body.dor;
    const userstatus = req.body.userstatus;
   

    //const query = "INSERT INTO oeregister(ename,cname,cemail,ccontact,caddress) VALUES (?,?,?,?,?)";
    //const values = [employeename,companyname,companyemail,companycontact,companyaddress];
    db.query("select * from agencyuser where amail=? ",[email],(err,result)=>{
        if(err)
        {console.log(err);}
        else
        {
            if(result.length>0)
            {
                res.send("exist");
            }
            else
            {
                db.query("INSERT INTO agencyuser(aname,amail,acontact,aaddress,state,city,estdate,govtcert,itcert,apasswd,dor,status) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)",[name,email,contact,address,state,city,estdate,govtcert,itcert,passwd,dor,userstatus],(err,result) =>{
                    if(err){
                        console.log(err);
                    }
                    else{
                        if(result.affectedRows===1){
                            res.send("inserted1");
                          
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
                       subject: 'Registratation for One Nation One Funding',
                       text:  name+',Thank you for registering one nation one funding as a funding agency.we will intimate you about the activation of your account.username'+email
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
                        else{
                            res.send("Error")
                            console.log("Failed to insert");
                        }
            
                    }
                })
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
    const state = req.body.state;
    const city = req.body.city;
    const passwd = req.body.passwd;
    const govtcert = req.body.govtcert;
    const dor = req.body.dor;
    const userstatus = req.body.userstatus;

    //const query = "INSERT INTO oeregister(ename,cname,cemail,ccontact,caddress) VALUES (?,?,?,?,?)";
    //const values = [employeename,companyname,companyemail,companycontact,companyaddress];
    db.query("select * from heiuser where hmail=? ",[email],(err,result)=>{
        if(err)
        {console.log(err);}
        else
        {
            if(result.length>0)
            {
                res.send("exist");
            }
            else
            {
                db.query("INSERT INTO heiuser(cat,hname,hmail,hcontact,haddress,state,city,govtcert,hpasswd,dor,status) VALUES (?,?,?,?,?,?,?,?,?,?,?)",[category,name,email,contact,address,state,city,govtcert,passwd,dor,userstatus],(err,result) =>{
                    if(err){
                        console.log(err);
                    }
                    else{
                        if(result.affectedRows===1){
                            res.send("inserted1");
                            
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
                       subject: 'Registratation for One Nation One Funding',
                       text: name+',Thank you for registering one nation one funding as a hei.we will intimate you about the activation of your account.username'+email
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
                        else{
                            res.send("Error")
                            console.log("Failed to insert");
                        }
            
                    }
                })
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
    if(role==='agencies'){
        db.query("SELECT * FROM agencyuseer WHERE (username = ? )AND (password=?) AND status='accepted'", 
    [username,password],
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

    }
    else if(role==='hei')
    {
        db.query("SELECT * FROM heiuseer WHERE (username = ? )AND (password=?) AND status='accepted'", 
        [username,password],
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
    }
    else{

        db.query("SELECT * FROM oeuseer WHERE (username = ? )AND (password=?) AND status='accepted'", 
               [username,password],
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
    }

    


    });


//---------------Card view backend------------------


    
app.listen(3001,()=> {
    console.log("server is running on port 3001");
});
