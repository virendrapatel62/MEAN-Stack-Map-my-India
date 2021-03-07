const mongoose = require("mongoose");
function createConnection() {
  mongoose
    .connect("mongodb://localhost:27017/mapdemo", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected...");
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = createConnection;
