// Dependencies
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8080;

const app = express();

// Require logger middleware for Node.js
app.use(logger("dev"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// Serve static content for the app from the "public" directory in the application directory
app.use(express.static("public"));

// Connect to mongoDB
mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/workout',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );

// Require the HTML and API routes
require("./routes/html-routes")(app);
require("./routes/api-routes")(app);

// Start the server
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});