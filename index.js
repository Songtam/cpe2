const express = require('express')
const app = express()
const port = 9131

app.get('/', (req, res) =>
  res.send('Greetings from songtam...')
)

app.listen(port, () =>
  console.log(`App running on port ${port}.`)
)
