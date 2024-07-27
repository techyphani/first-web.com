const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/userAuth', { useNewUrlParser: true, useUnifiedTopology: true });

const userSchema = new mongoose.Schema({
    username: { type: String, unique: true },
    password: String
});

const User = mongoose.model('User', userSchema);

app.post('/register', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = new User({ username, password });
        await user.save();
        res.json({ message: 'User registered successfully!' });
    } catch (error) {
        res.json({ message: 'User registration failed!' });
    }
});

app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username, password });
        if (user) {
            res.json({ message: 'Login successful!' });
        } else {
            res.json({ message: 'Invalid credentials!' });
        }
    } catch (error) {
        res.json({ message: 'Login failed!' });
    }
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
