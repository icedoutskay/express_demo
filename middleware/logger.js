const express = require('express')
const app = express()

const log = (function (req, res, next){
    console.log('logging...');
    next();
}
);

app.use(log);



module.exports = log;