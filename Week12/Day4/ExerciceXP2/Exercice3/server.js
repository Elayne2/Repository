const exp = require('express');
const app = exp();
const port = 3000;

app.use(exp.static('public'));

app.get('/', (req, res)=>{

});
app.listen(port, ()=>{console.log(`I'm listening on port ${port}...`)});