const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Parser = require('rss-parser');



const app = express();

const port = 3000;
const parser = new Parser();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('veiw origine',"ejs")
app.use(express.static("public"))
app.use(cors());




app.get('/', async (req, res) => {
    try {
        let feed = await parser.parseURL('https://thefactfile.org/feed/');
        
  
        res.render("pages/index",{posts:feed.items})
    
      } catch(error){
          console.log(error)
          res.status(500).send("Error")
      }
   } )
  
  
   app.get('/search', (req, res) => {
      res.render('pages/search', { posts: [] });
    });
    app.post('/search/title', (req, res) => {
        const title = req.body.title;
       
        const searchResults = []; 
      
        res.render('search', { posts: searchResults });
      });
      
      app.post('/search/category', (req, res) => {
        const category = req.body.categories;
        
        const searchResults = []; 
      
        res.render('search', { posts: searchResults });
      });
      app.set('view engine', 'ejs');
      app.use(express.static('public'));
      
     
      app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });      