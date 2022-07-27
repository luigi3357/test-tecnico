// const bodyParser = require("body-parser");
const express = require("express");
const morgan = require('morgan');
const {CORS_URL} = process.env



const STATUS_USER_ERROR = 422;

let posts = [];
var prevId = 0;
const server = express();
server.use(express.json());
server.use(express.urlencoded({ extended: true })) // for parsing serverlication/x-www-form-urlencoded

server.use(morgan('dev'))

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  })

  
function reverseText (text) {
    if (text === "") {
        return "";
    } else {
        return reverseText(text.substr(1)) + text.charAt(0);
    }
}

server.get('/iecho', (req, res)=>{
 const {text}= req.query
 if(!text){
     return res.status(400).json({text: 'No text'})
}else{
    var reverse = reverseText(text)
    if(reverse.toLowerCase()===text.toLowerCase()){
        var palindromo = true
        return res.status(200).json({text:reverse, requestPalindromo: palindromo})
    }else{
        palindromo= false
        return res.status(200).json({text:reverse, requestPalindromo: palindromo})
    }
 }

})



module.exports = { posts, server };