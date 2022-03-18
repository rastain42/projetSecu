const express = require('express')
const app = express()
const port = 3000

const cors = require("cors");
app.use(cors());

app.get('/', (req, res) => {
    res.send('This is our enpoint')
})

app.post('/', (req, res) => {

})

app.post('/test', function (req, res) {
    console.log('jjjkjfijdkjdjj', req);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

