// Require packages
const express = require("express");

// Create express app
const app = express();
const PORT = process.env.PORT || 3001;

// Configure body parser for AJAX requests
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Serve up static assets
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

// Start the API server
app
    .listen(PORT, function () {
        console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
    });