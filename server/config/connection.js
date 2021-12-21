const mongoose = require('mongoose');

//change the connect to project3 name in future.
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/project3', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

module.exports = mongoose.connection;