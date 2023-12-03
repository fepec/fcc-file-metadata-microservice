const express = require('express');
const cors = require('cors');
require('dotenv').config()

// Require routes
const indexRouter = require('./routes/index')
const fileUploadRouter = require('./routes/fileUpload')

const app = express();

////  Set up global middleware ////
// Set up request logger
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`)
  next()
})
app.use(cors());

/// Set up global routes
app.use('/', indexRouter)
app.use('/public', express.static(process.cwd() + '/public'));
app.use('/api/fileanalyse', fileUploadRouter)



const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
