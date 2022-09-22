const express = require('express')

const app = express()

const server = require('http').createServer(app)

const port = '3000'
app.use(express.static('public'))

app.get('/',(req,res) => {
    res.sendFile(__dirname + '/index.html')
})
app.get('/login',(req,res) => {
    res.sendFile(__dirname + '/login.html')
})
app.get('/app/home',(req,res) => {
    res.sendFile(__dirname + '/home.html')
})
app.get('/app/user/profile',(req,res) => {
    res.sendFile(__dirname + '/profile.html')
})



server.listen(port,()=> {
    console.log('Server rodando em http://localhost:3000')
});