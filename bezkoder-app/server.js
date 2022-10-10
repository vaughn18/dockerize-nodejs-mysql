require("dotenv").config();
const express = require("express");
const cors = require("cors");

//Only using Firebase for Authentication purposes
const firebase = require("firebase/app");
const { initializeApp } = firebase;

const app = express();

var corsOptions = {
  origin: "http://localhost:8081",
};

const firebaseConfig = {
  apiKey: "AIzaSyAR0283XGoAxH0_P6kguwSkIpTZgNXLt9c",
  authDomain: "test-nodejs-project-51c2e.firebaseapp.com",
  projectId: "test-nodejs-project-51c2e",
  storageBucket: "test-nodejs-project-51c2e.appspot.com",
  messagingSenderId: "146504501207",
  appId: "1:146504501207:web:d55ba8b6fab48dea2f2d92",
  measurementId: "G-GXR7VN8401",
};

//Initialize Firebase
initializeApp(firebaseConfig);

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");

db.sequelize.sync();
// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// simple route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Vaughn's Nodejs Express/MySQL applications.",
  });
});

require("./app/routes/tutorial.routes")(app);

require("./app/routes/auth.routes")(app);

// set port, listen for requests
const PORT = process.env.NODE_DOCKER_PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
