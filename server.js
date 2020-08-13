const express = require("express");
const morgan = require("morgan"); // used to print api endpoint
const cors = require("cors");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
require("dotenv").config();
const path = require("path");

const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
// const buildingRoute = require("./routes/building/building");
const roomRoute = require("./routes/building/room");
const houseRoute = require("./routes/building/house");

const app = express();

const mongo_url = process.env.MONGO_URL;

mongoose
  .connect(mongo_url, {
    useUnifiedTopology: true,
    keepAlive: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("connected"))
  .catch((err) => console.log(err));

mongoose.Promise = global.Promise;

/**TODO:
 *  remove redundant headers in prod
 */
// app.use(cors());

// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Methods",
//     "GET, POST, OPTIONS, PUT, PATCH, DELETE"
//   );
//   res.header(
//     "Access-Control-Allow-Headers",
//     "x-access-token, Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

app.use(morgan("dev"));
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.use("/api", authRoute);
app.use("/api", userRoute);
app.use("/api/room", roomRoute);
app.use("/api/house", houseRoute);
// app.use("/api", buildingRoute);

// Server static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static(path.join(__dirname, "client/build")));

  //for https not tested
  app.get("*", (req, res) => {
    res.redirect("https://" + req.headers.host + req.url);
  });
  //final application
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Api is running on port ${port} - ${process.env.NODE_ENV}`);
});
