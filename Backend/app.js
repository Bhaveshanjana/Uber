const dotenv = require('dotenv').config();

const express = require('express');
const cors = require('cors');

const userRoutes = require('./routes/user.router')
const captainRoutes = require('./routes/captain.router')

const mapsRoutes = require('./routes/map.router')
const riderRoutes = require('./routes/ride.router')

const ConnectToDb = require('./db/db');
const cookieParser = require('cookie-parser');

const app = express();
ConnectToDb();

app.use(cookieParser())
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) =>{
    res.send('hello');
});

app.use('/users', userRoutes);
app.use('/captains', captainRoutes);
app.use('/maps', mapsRoutes);
app.use('/rides',riderRoutes);

module.exports = app;
