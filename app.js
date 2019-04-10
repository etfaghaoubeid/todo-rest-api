const express = require('express')
const {connect} = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

// set Port Number 
const PORT  = process.env.PORT||3001
// init express app 
const app = express()

// set up middleware 
app.use(cors)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))

// import db url 
const url = require('./config/config').MONGODB_URL
// connect to db and start server 
connect(url,{ useNewUrlParser: true })
.then(()=>{
    app.listen(PORT,()=>console.log(`app start on port: ${PORT}`))
})
.catch(err=>console.log('connection error'))

app.use('/api',require('./routes/api/todo'))