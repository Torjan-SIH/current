
const express=require("express");
const app=express();
const mysql=require('mysql');
const cors = require('cors');
const { response } = require("express");

app.use(cors());
app.use(express.json());
let mail = "";
let name = "";
let passwd = "";
let role = "";


const db = mysql.createConnection({
    user:"root",
    host:"localhost",
    password:'root',
    port: "8889",
    database:'onof',
    
   
    
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


    //-------------TopBar---------------

    app.get('/topbar',(req,res)=>{
        res.send(mail)
    })

//---------------Funds Dashboard------------------

app.get('/funddashboard',(req,res)=>{
    res.send(mail)
})

app.get('/funddashboardlist',(req,res)=>{
    
    db.query("select distinct(a.sid, a.sname, a.aname, a.amail, a.sdesc, a.sdoc, a.sdate, h.hname,h.hmail, h.adesc, h.adoc, h.adate, h.sstatus) from heiapply h, agencyscheme a where amail=? and h.sid = a.sid",[mail],(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log(result);
            res.send(result);
        }
    })
})

app.post('/verifyscheme',(req,res)=>{
    const sid = req.body.sid;
    const amail = mail;
    db.query("UPDATE heiapply SET sstatus='verifying' WHERE (sid = ?)",[sid],(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log(result);
            if(result.changedRows === 1)
                res.send("updated");
            else
                res.send("already");
        }
    })
})



//---------------Funds Scheme------------------

app.get('/fundscheme',(req,res)=>{
    res.send(mail)
})
app.get('/fundschemelist',(req,res)=>{
    
    db.query("select * from agencyscheme where amail=?",[mail],(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(result);
        }
    })
})

app.post('/fundnewscheme',(req,res)=>{
    const aname = req.body.aname;
    const amail = req.body.amail;
    const sname = req.body.sname;
    const sdesc = req.body.sdesc;
    const sdoc = req.body.sdoc;
    const sdate = req.body.sdate;
    db.query("insert into agencyscheme(sname,aname,amail,sdesc,sdoc,sdate) values (?,?,?,?,?,?)",[sname,aname,amail,sdesc,sdoc,sdate],(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            if(result.affectedRows === 1)
                res.send("inserted");
        }
    })
})
//---------------Funds OE evalutation------------------

app.get('/fundoe',(req,res)=>{
    res.send(mail)
})

app.get('/fundoelist',(req,res)=>{
    
    db.query("select a.sid, a.sname, a.aname, a.amail, a.sdesc, a.sdoc, a.sdate, h.hname,h.hmail, h.adesc, h.adoc, h.adate, h.sstatus from heiapply h, agencyscheme a where amail=? and h.sid = a.sid",[mail],(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(result);
        }
    })
})

//-----------------Funds Profile----------------------

app.get('/fundprofile',(req,res)=>{
    res.send(mail)
})

//------------------HEI Dashboard---------------------

app.get('/heidashboard',(req,res)=>{
    res.send(mail)
})

app.get('/heidashboardlist',(req,res)=>{
    
    db.query("select * from heiapply where hmail=? ",[mail],(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(result);
        }
    })
})

//-----------------HEI Explore-------------------

app.get('/heiexplore',(req,res)=>{
    res.send(mail)
})

app.get('/heiexplorecard',(req,res)=>{
    
    db.query("select * from agencyscheme",(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(result);
        }
    })
})
    
app.post('/heiapplyscheme',(req,res) =>{
    const sid = req.body.sid;
    const sname = req.body.sname;
    const hname = req.body.hname;
    const hmail = req.body.hmail;
    const adoc = req.body.adoc;
    const adesc = req.body.adesc;
    const adate = req.body.adate;

    db.query("insert into heiapply(sid,sname,hname,hmail,adoc,adesc,adate) values (?,?,?,?,?,?,?)",[sid,sname,hname,hmail,adoc,adesc,adate],(err,result) =>{
        if(err){
            console.log(err);
        }
        else{
            console.log(result)
            if(result.affectedRows === 1)
                res.send("inserted");
        }
    })
})


//-----------------forgotpassword--------------------


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
                if(err){
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
    
    
    
    


//---------OE Register page backend------------

app.post('/oeregister',(req,res) => {
    const employeename = req.body.employeename;
    const employeerole = req.body.employeerole;
    const companyname =  req.body.companyname;
    const employemail = req.body.employemail;
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
     
    db.query("select scode from oeverify where empemail=?",[employemail],(err,result)=>
    {
        if(err){
            console.log(err);
        }
        else{
            var code =  JSON.parse(JSON.stringify(result));
            if( verficationcode ===code[0].scode){

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
            }
            else{
                res.send({warning:"check verification code"});
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
    const cert = req.body.cert;
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
                db.query("INSERT INTO agencyuser(aname,amail,acontact,aaddress,state,city,estdate,cert,apasswd,dor,status) VALUES (?,?,?,?,?,?,?,?,?,?,?)",[name,email,contact,address,state,city,estdate,cert,passwd,dor,userstatus],(err,result) =>{
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

//---------------------login backend----------------------

app.post('/loginpage',(req,res)=>{
    const username = req.body.username; 
    const password = req.body.password;
    const role= req.body.role;
    mail=username;
    passwd = password;
    if(role==='agencies'){
        db.query("SELECT * FROM agencyuser WHERE (amail = ? )AND (apasswd = ?) AND status='accepted'", 
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
        db.query("SELECT * FROM heiuser WHERE (hmail = ? )AND (hpasswd = ?) AND status='accepted'", 
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

        db.query("SELECT * FROM oeuser WHERE (compmail = ? )AND (oepasswd = ?) AND status='accepted'", 
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


//---------------admin dashboard-------------------
app.get('/admindashboard',(req,res)=>
{
    data ={
        a:0,
        h:0,
        o:0
    }   
    db.query('select count(*) as count from agencyuser where status="accepted"',(err,result)=>
    {
        if(err){
            console.log(err);
        }
        else{
           var temp= JSON.parse(JSON.stringify(result));
           data.a=temp[0].count;
        }
    }
    )
    db.query('select count(*) as count1 from heiuser where status="accepted"',(err,result)=>
    {
        if(err){
            console.log(err);
        }
        else{
           var temp1= JSON.parse(JSON.stringify(result));
           data.h=temp1[0].count1;
        }
    }
    )
    db.query('select count(*) as count2 from agencyuser where status="accepted"',(err,result)=>
    {
        if(err){
            console.log(err);
        }
        else{
           var temp2= JSON.parse(JSON.stringify(result));
           data.o=temp2[0].count2;
           res.send(data);
        }
    }
    )
})


//---------------Admin HeiVerify Backend------------------------

app.get('/heiverify',(req,res)=>{
       
    db.query("select hname,hmail,hcontact,govtcert,cat,haddress,state,city from heiuser",(err,result)=>{
        if(err)
        {console.log(err);}
        else{res.send(result);}
    })
   
})

//---------------Admin AgencyVerify Backend------------------

app.get('/fundverify',(req,res)=>{
       
    db.query("select aname,amail,acontact,estdate,cert,aaddress,state,city from agencyuser",(err,result)=>{
        if(err)
        {console.log(err);}
        else{res.send(result);}
    })
  
})


    
app.listen(3001,()=> {
    console.log("server is running on port 3001");
});
