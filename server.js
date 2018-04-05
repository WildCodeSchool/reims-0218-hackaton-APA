cons express = require('express')
const app = express()
app.use(express.static('public'))


const html = `
<!doctype html>
<html class="no-js" lang="">
  <head>
    <meta charset="utf-8">
    <title>Superheroes fighting for glory and fun</title>
    <link rel="stylesheet" href="bootstrap.min.css" />
  </head>
  <body>
  <header>
  Hello World
  </header>
    <div id="main">

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
