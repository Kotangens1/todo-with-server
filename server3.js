const express = require('express')
const path = require('path')
const PORT = 3000
const app = express()

app.use(express.static(path.resolve(__dirname, 'static')))

app.get('/',(req,res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'))
})

app.listen(PORT, () => {
    console.log('server is work')
});


