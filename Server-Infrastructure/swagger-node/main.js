const express = require('express');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

const app = express();
const port = process.env.PORT || 3000;

// Swagger definition
const swaggerDefinition = {
    info: {
        title: 'Sample Node.js Swagger API',
        version: '1.0.0',
        description: 'A sample Node.js web API with Swagger documentation',
    },
    basePath: '/',
};

// Options for the swagger-jsdoc
const options = {
    swaggerDefinition,
    apis: ['*.js'], // replace this with your API file(s)
};

const swaggerSpec = swaggerJSDoc(options);

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

// Define a sample API route
app.get('/api/hello', (req, res) => {
    res.send({ message: 'Hello, World!' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
