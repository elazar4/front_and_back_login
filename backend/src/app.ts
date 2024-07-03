import express, { Express, Request, Response } from "express";

const app: Express = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/wwww', (req, res) => {
    res.send('Hello World!1')
  })
  

  app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})