const express = require("express");
const morgan = require("morgan"); // used to print api endpoint
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const path = require("path");
const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const rateLimit = require("express-rate-limit");
const cors = require("cors");
const xss = require("xss-clean");
const hpp = require("hpp");
const compression = require("compression");
require("dotenv").config();
const port = process.env.PORT || 8000;

const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const roomRoute = require("./routes/building/room");
const houseRoute = require("./routes/building/house");
// const buildingRoute = require("./routes/building/building");

const mongo_url = process.env.MONGO_URL;
const app = express();
//required for heroku to send cookies while secure is set to true
// app.enable("trust proxy");

const limiter = rateLimit({
  max: 20,
  windowMs: 2 * 60 * 1000,
  message: "too many request from this IP try again after 10 mins!",
});

process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION! 💥 Shutting down...");
  console.log(err.name, err.message);
  process.exit(1);
});

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

app.use(cors());
if (process.env.NODE_ENV === "development") app.use(morgan("dev"));
app.use(bodyparser.urlencoded({ extended: true, limit: "10kb" }));
app.use(bodyparser.json({ limit: "10kb" }));

//add and remove res headers
app.use(helmet());
// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

// Data sanitization against XSS
app.use(xss());

// Prevent parameter pollution
app.use(
  hpp({
    whitelist: [], //add parameters expected in query for aggregation
  }),
);

app.use(compression());

app.use("/api", limiter);
app.use("/api", authRoute);
app.use("/api/user", userRoute);
app.use("/api/room", roomRoute);
app.use("/api/house", houseRoute);
// app.use("/api", buildingRoute);

// Server static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static(path.join(__dirname, "client/build")));

  //final application
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

app.listen(port, () => {
  console.log(`Api is running on port ${port} - ${process.env.NODE_ENV}`);
});

process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION! 💥 Shutting down...");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

//heroku specific
process.on("SIGTERM", () => {
  console.log("👋 SIGTERM RECEIVED. Shutting down gracefully");
  server.close(() => {
    console.log("💥 Process terminated!");
  });
});
