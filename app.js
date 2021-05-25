const express = require("express")
const jwt = require("jsonwebtoken")

var bodyParser = require("body-parser")

var cors = require('cors')

const app= express()

app.use(bodyParser.json())

app.use(cors())

var favs = []

var userLists = []
var usuarios = {}


app.get("/api", function(req, res){
    res.json({
        mensaje: "hola mundo"
    })
})



app.post("/api/login", (req, res)=>{

    const user = {
        username:req.body.username,
        password :req.body.password
    }
   console.log(user)
    jwt.sign({user}, 'secretkey',(err, jwtValue)=>{
        res.json({
            jwtValue
        })
    } )
})

app.post('/favs/:version', (req,res)=>{        
        
    
        var favorites = req.params.version
        favs.push(favorites)
        
        res.json({
            favs
        })
    
    
})
app.get('/favs', (req,res)=>{      
    
    res.json({
        favs
    })


})

app.listen(8001, function(){
    console.log("nodejs app running")
})