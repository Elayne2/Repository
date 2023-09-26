const exp = require('express');
const bp = require('body-parser');
const cors = require('cors')
const app = exp();
const port = 3000;

app.use(exp.static('public'));
app.use(bp.urlencoded({ extended: false }))
app.use(bp.json())
app.use(cors())

app.get('/api/hello', (req, res)=>{
    const message = `Hello From Express`
    res.json({message})
})

app.post('/api/world', (req, res)=>{
    console.log('req sent', req.body.value)
    const message = `I received your POST request. This is what you sent me: ${req.body.value}`
    res.json({message})
    console.log(message)
})

app.listen(port, ()=> console.log(`server listening on port ${port}`))