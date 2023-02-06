const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const swaggerUi = require('swagger-ui-express');
const yaml = require('yamljs');
require('dotenv').config()
const app = express();
const swaggerDocs = require('./swagger_output.json')
const routes = require('./routes/index');
mongoose.connect(`mongodb://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@mongodb:27017/m77events?authSource=admin`,
    { useNewUrlParser: true,
        useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));
app.use(express.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});
app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/api/', routes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
//app.use('/', (req, res) => { res.status(200).json({ message: 'Bienvenue sur l\'API de M77 Events !' })});
module.exports = app;