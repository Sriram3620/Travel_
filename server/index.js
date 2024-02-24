const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { User } = require('./db');



const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/Travel', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.post('/user', async (req, res) => {

        console.log('Request Body:', req.body);
    

    try {
        console.log('Request Body:', req.body);
    
        const {name, username, email } = req.body;
    
        const newUser = new User({name, username, email });
        await newUser.save();
        res.json(newUser);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error', message: error.message });
      }
  });

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
