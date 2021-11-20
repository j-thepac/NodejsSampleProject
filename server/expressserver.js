const express = require('express')
const path = require('path')

const app = express()
const port = 3000

//http://localhost:3000/home/hi?id=5
app.get('/home/:param', (req, res) => {
    res.send('Hello World!' + req.params.param + req.query.id)

})
app.get('/file', (req, res) => {
    res.sendFile(path.join(__dirname, "file.html"))
})

app.post('/file', function(req, res) {
    res.send(("Working"));

    // console.log('req.body.name', req.body['submit']);
});
app.get('/json', (req, res) => {
    res.json({ "name": "deepak" })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})