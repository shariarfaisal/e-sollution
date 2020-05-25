const mongoose = require('mongoose')

module.exports = () => {
  mongoose.connect('mongodb://localhost/jobtest', {useNewUrlParser: true},() => {
    console.log('Database connected!');
  });
}
