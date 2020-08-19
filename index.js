const express = require('express')
const fetch = require('node-fetch')

const app = express()
const port = 3000
const gtag

app.get('/', function (req, res) {
  await fetch(
    `https://www.google-analytics.com/collect?v=1&t=pageview&tid=${gtag}&cid=555&dp=tube`,
    {
      headers: {
        'user-agent':
          'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36',
      },
    }
  )
  return res.send('Hello World')
})
 
app.listen(port, () => {
  console.log('server running on port: '+ port)
})