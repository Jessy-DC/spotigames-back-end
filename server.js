const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const usersRoutes = require('./routes/users-routes')

app.use(bodyParser.json());

app.use('/api/users', usersRoutes);

app.listen(5000, () => {
    console.log('Listening on port 5000');
})