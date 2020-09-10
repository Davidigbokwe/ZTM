const express = require('express');
const bodyParser =require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());

app.get('/',(req,res) =>{
	req.query          // <--declare a string
	req.body
	req.header
	req.params
	res.status(404).send("getting root")
})

app.listen(3000);

