const express = require('express')

const app = express()
const port = process.env.PORT || 3000

app.post("/users", (req, res) => {
    console.log(req.body)
    res.send('Testing!')
})

app.listen(port, () => {
    console.log('Server initialized on port ' + port)
})