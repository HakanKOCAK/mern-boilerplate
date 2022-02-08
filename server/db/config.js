const dbPath = process.env.dbPath || "mongodb://127.0.0.1:27017/dbPath";

const dbPathTest = process.env.dbPathTest || "mongodb://127.0.0.1:27017/dbPathTest";

module.exports = {
  dbPath,
  dbPathTest
};
