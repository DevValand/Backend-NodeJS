require('dotenv').config()
const express = require('express')
const app = express()
const port = 777

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/facebook', (req,res) =>{
    res.send('plz,Login at facebook')
})
app.get('/login', (req,res) =>{
    res.send('<h1>plz,Login at Login Page</h1>')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
