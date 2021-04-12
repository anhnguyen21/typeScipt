import express = require("express");
import { router } from './src/router';
import { setupDb } from './src/database/setup';

var app = express();

setupDb()

app.use(express.json())
app.use(router)
  
app.listen(3000)

export { app }