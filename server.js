require('dotenv').config();
const express = require('express');
const app = express()
const connectDB = require('./config/db')
const authRoutes = require('./routes.j/auth')
const profileRoutes = require('./routes.j/profile');
const cookieParser = require('cookie-parser');


app.use(express.json())

connectDB();


app.get('/run', (req,res)=>{
    res.send('jwt auth api running');

});

app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/profile', profileRoutes)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
    console.log(`Server running on port ${PORT}`)
);

