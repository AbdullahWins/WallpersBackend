//db/db.js

const {
  connect,
  usersCollection,
  filtersCollection,
} = require("./mongoConfig");

module.exports = {
  connect,
  usersCollection,
  filtersCollection,
};
