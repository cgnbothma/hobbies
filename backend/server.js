const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

try {
    mongoose.connect("mongodb+srv://admin-user:Admin12345@mangocluster.rvqf2.gcp.mongodb.net/hobbies?retryWrites=true&w=majority", { useNewUrlParser: true, useCreateIndex: true });
  } catch (error) {
    handleError(error);
  }

  const connection = mongoose.connection;
  try {
    connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
    });
  } catch (error) {
    handleError(error);
  }


//const hobbyRouter = require('./routes/hobby');
const usersRouter = require('./routes/users');


//app.use('/hobby', hobbyRouter);
app.use('', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
