const exp = require('express')
const bd = require('body-parser')
const fs = require('fs')

const app = exp()

app.use(bd.urlencoded({extended: false}))
app.use(bd.json())

fs.readFile('fs.text','utf-8', (err, data)=>{
    if(err){
        console.error(err)
        return
    }
    else{
        console.log(data)
    }
})

app.listen(3000)