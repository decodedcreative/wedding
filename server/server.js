require('dotenv').config({ path: '../.env' });

const express = require('express');
const app = express();
const port = process.env.SERVER_PORT || 7777;
const router = require('./routes/');
const path = require('path');
const bodyParser = require('body-parser');
const errorHandlers = require('./handlers/errorHandlers');
const mongoose = require('mongoose');
console.log(process.env.DATABASE);
mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises
mongoose.connection.on('error', (err) => {
  console.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`);
});

// view engine setup
app.set('view engine', 'pug'); 
app.set('views', path.join(__dirname, '../client/views'));
app.use(express.static(path.join(__dirname, '../client')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', router);

// If that above routes didnt work, we 404 them and forward to error handler
app.use(errorHandlers.notFound);

// One of our error handlers will see if these errors are just validation errors
app.use(errorHandlers.flashValidationErrors);

// Otherwise this was a really bad error we didn't expect! Shoot eh
if (app.get('env') === 'development') {
  /* Development Error Handler - Prints stack trace */
  app.use(errorHandlers.developmentErrors);
}

// production error handler
app.use(errorHandlers.productionErrors);

app.listen(port, () => console.log(`Listening on port ${port}`));