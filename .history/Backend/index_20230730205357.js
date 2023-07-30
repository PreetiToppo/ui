const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const cors = require('cors')

const app = express();
const upload = multer();

mongoose.connect('mongodb+srv://toppopreeti:toppopreeti@cluster0.bcxnkms.mongodb.net/users?retryWrites=true&w=majority', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

  // Check for DB errors
mongoose.connection.on('error', (err) => {
    console.log(err)
})


// Add CORS headers
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

const Schema = mongoose.Schema;

const mySchema = new Schema({
  heroImage: String,
  fullPageImage: String,
  additionalImage: String,
  username: String,
  companyName: String,
  websiteName: String,
  email: String,
  companyWebsite: String,
  instagram: String,
  telegram: String,
  skype: String,
  behance: String,
});

const MyModel = mongoose.model('MyModel', mySchema);

app.post('/submit-form', upload.fields([
  { name: 'heroImage', maxCount: 1 },
  { name: 'fullPageImage', maxCount: 1 },
  { name: 'additionalImage', maxCount: 1 },
]), (req, res) => {
  const data = req.body;

  const myData = new MyModel({
    heroImage: req.files['heroImage'][0].buffer.toString('base64'),
    fullPageImage: req.files['fullPageImage'][0].buffer.toString('base64'),
    additionalImage: req.files['additionalImage'][0].buffer.toString('base64'),
    username: data.username,
    companyName: data.companyName,
    websiteName: data.websiteName,
    email: data.email,
    companyWebsite: data.companyWebsite,
    instagram: data.instagram,
    telegram: data.telegram,
    skype: data.skype,
    behance: data.behance,
  });

  myData.save((err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error saving data to the database');
    } else {
      res.status(200).send('Data saved to the database');
    }
  });
});

app.listen(3005, () => {
  console.log('Server listening on port 3000');
});