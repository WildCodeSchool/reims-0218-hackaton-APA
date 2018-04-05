const express = require('express')
const app = express()
app.use(express.static('public'))


const html = `
<!doctype html>
<html class="no-js" lang="">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Superheroes fighting for glory and fun</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="/style.css">
  </head>
  <body>
  <header>
  Hello World
  </header>
    <div id="main" class="container">

    </div>
    <script src="/page.js"></script>
    <script src="/app.js"></script>
  </body>
</html>`


app.get('*', (req, res) => {
  res.send(html)
  res.end()
})

app.listen(8000)
