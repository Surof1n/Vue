require('dotenv').config();

const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3000;
const app = express();
const ServerRouter = require('./routing.js')





app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(express.static(path.resolve(__dirname, 'src')))
app.use(ServerRouter)


app.listen(PORT , () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})

