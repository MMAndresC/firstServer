
const express = require('express');

const indexRouter = require('./routes/indexRouter.js');

const db = require('./db.js');
db.connect();

const PORT = 4500;

const app = express();



app.use('/', indexRouter);



app.listen(PORT,() =>{
    console.log(`Server running on port ${PORT}` );
})