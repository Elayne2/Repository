const exp = require('express');
const bp = require('body-parser');
const app = exp();

app.use(bp.urlencoded({ extended: false }))
app.use(bp.json())
app.use('/',exp.static(__dirname+'/public'));

const port = 7500;
var usersData = [];

// API for register  //**********************************************************//
app.post('/register',(req,res)=>{
    console.log('requist recived', req.body)
    const temp = Object.values(req.body)
    console.log(temp)
    if(!isEnyInputEmpty(temp)){

        if(usersData.length>0){
            if(isUserAllreadyExsist(usersData, temp)){
                res.sendStatus = 404;
                res.send({message : "Hello this account is allready exsist"})
            }
            else{
                res.sendStatus = 200;
                usersData.push(req.body)
                const respond = { 
                    message : "Hello your account is now created!",
                }
                res.send(JSON.stringify(respond)) 
            }     
        }
        else{
            usersData.push(req.body)
            res.send({
                message : "this is the first user",
                info : `welcome ${req.body.fname}`
            });
        }
    }
    else{
        res.sendStatus = 404;
        res.send({message : "Please fill all the fields"})
    }
    function isEnyInputEmpty(temp){
        if(temp.length < 5){
            return true;
        }
        else{
            return temp.some((val) => val == "" || val == null);
        }
    }
    function isUserAllreadyExsist(usersData, temp){
        
        return usersData.some((obj) =>{ return obj.username === temp[3] })
    }
    
})

// API for login  /**********************************************************//
app.post('/login',(req,res)=>{
    console.log('requist recived', req.body)
    const temp = Object.values(req.body)
    console.log(temp)
    if(!isEnyInputEmpty(temp)){

        if(usersData.length>0){
            if(isUserAllreadyExsist(usersData, temp)){
                res.sendStatus = 200;
                const respond = { 
                    message : "Hello! welcome back again "+temp[0],
                }
                res.send(JSON.stringify(respond)) 
                
            }
            else{
                res.sendStatus = 404;
                res.send({message : "Hello this account is not registred"}) 
            }     
        }
        else{
            res.sendStatus = 404;
            res.send({message : "Hello this account is not registred new"}) 
        }
    }
    else{
        res.sendStatus = 404;
        res.send({message : "Please fill all the fields"})
    }
    function isEnyInputEmpty(temp){
        if(temp.length < 2){
            return true;
        }
        else{
            return temp.some((val) => val == "" || val == null);
        }
    }
    function isUserAllreadyExsist(usersData, temp){
        console.log('51951951651 ' + usersData + " tmp" + temp)
        return usersData.some((obj) =>{ return obj.username === temp[0] })
    }
    
})

// API for registerForm  /**********************************************************//
app.get('/registerForm',(req,res)=>{
    console.log('requist recived', req.body)
    const temp = Object.values(req.body)
    console.log(temp)
    if(!isEnyInputEmpty(temp)){

        if(usersData.length>0){
            if(isUserAllreadyExsist(usersData, temp)){
                res.sendStatus = 404;
                res.send({message : "Hello this account is allready exsist"})
            }
            else{
                res.sendStatus = 200;
                usersData.push(req.body)
                const respond = { 
                    message : "Hello your account is now created!",
                }
                res.send(JSON.stringify(respond)) 
            }     
        }
        else{
            usersData.push(req.body)
            res.send({
                message : "this is the first user",
                info : `welcome ${req.body.fname}`
            });
        }
    }
    else{
        res.sendStatus = 404;
        res.send({message : "Please fill all the fields"})
    }
    function isEnyInputEmpty(temp){
        if(temp.length < 5){
            return true;
        }
        else{
            return temp.some((val) => val == "" || val == null);
        }
    }
    function isUserAllreadyExsist(usersData, temp){
        
        return usersData.some((obj) =>{ return obj.username === temp[3] })
    }
})

// API for loginForm  /**********************************************************//
app.get('/loginForm',(req,res)=>{
    console.log('requist recived', req.body)
    const temp = Object.values(req.body)
    console.log(temp)
    if(!isEnyInputEmpty(temp)){

        if(usersData.length>0){
            if(isUserAllreadyExsist(usersData, temp)){
                res.sendStatus = 200;
                const respond = { 
                    message : "Hello! welcome back again "+temp[0],
                }
                res.send(JSON.stringify(respond)) 
                
            }
            else{
                res.sendStatus = 404;
                res.send({message : "Hello this account is not registred"}) 
            }     
        }
        else{
            res.sendStatus = 404;
            res.send({message : "Hello this account is not registred new"}) 
        }
    }
    else{
        res.sendStatus = 404;
        res.send({message : "Please fill all the fields"})
    }
    function isEnyInputEmpty(temp){
        if(temp.length < 2){
            return true;
        }
        else{
            return temp.some((val) => val == "" || val == null);
        }
    }
    function isUserAllreadyExsist(usersData, temp){
        console.log('51951951651 ' + usersData + " tmp" + temp)
        return usersData.some((obj) =>{ return obj.username === temp[0] })
    }
})

app.listen(port, ()=> console.log(`server listening to port ${port} `))