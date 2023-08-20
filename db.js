
//Create DB connectivity file

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Crud_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to database'))
  .catch((error) => console.error('Database connection error:', error));
