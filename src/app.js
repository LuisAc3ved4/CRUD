const express = require('express');
const bodyParser = require('body-parser');
const taskRoutes = require('./routes/taskRoutes');
const dotenv = require("dotenv");

dotenv.config();
const app = express();

const port = process.env._DB_PORT || 3000;
app.use(bodyParser.json());
app.use('/tasks', taskRoutes);

app.listen(port, () =>{
    console.log(`Servidor activo en el puerto ${port}`);
});