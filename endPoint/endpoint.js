const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('This is our enpoint')
})

app.post('/test', function (req, res) {
    console.log(req.body);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

