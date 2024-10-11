const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const noteRoutes = require('./routes/NoteRoutes');

const DB_URL = "mongodb+srv://jaskirangill14:7hQzloO41oS97oNa@cluster0.0txf9.mongodb.net/notesApp?retryWrites=true&w=majority";

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.Promise = global.Promise;

// Update MongoDB Atlas URL and remove deprecated options
mongoose.connect(DB_URL, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database MongoDB Atlas Server");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

app.get('/', (req, res) => {
    res.send("<h1>Welcome to Note taking application - Week06 Exercise</h1>");
});

app.use('/', noteRoutes);

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
