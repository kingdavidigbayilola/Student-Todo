const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useCreateIndex: true
});

const connection = mongoose.connection;
connection.once("open", function() {
  console.log("Mongodb database connection established succesfully");
});

app.use('/users', require('./routes/user'));
app.use('/students', require('./routes/student'));



app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});