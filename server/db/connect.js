const mongoose = require('mongoose');
const { dbPath, dbPathTest } = require('./config');

const connect = async () => {
  try {
    const path = process.env.NODE_ENV === 'test' ? dbPathTest : dbPath;

    await mongoose.connect(path, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  } catch (error) {
    throw error;
  }
};

module.exports = connect;