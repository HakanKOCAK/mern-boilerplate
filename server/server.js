require('dotenv').config()
const express = require('express');
const cors = require('cors');
const connect = require('./db/connect');

(async () => {
  try {
    await connect();
    console.log('Mongo db connected');
  } catch (error) {
    console.log(error);
    process.exit(0);
  }

  const app = express();

  app.use(cors());
  app.get('/', (_, res) => res.send('Server is running'));

  const PORT = process.env.PORT || 4000;

  app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`);
  });
})();