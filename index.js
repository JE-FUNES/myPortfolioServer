
{/*const server = require('./src/appServer.js');
const { conn } = require('./src/db.js');
const PORT = process.env.PORT || 3001;


// Syncing all the models at once.
conn
.sync({ force: false })
.then(() => {
  server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`); // { force: true } si quiero que se regenren las tablas
  });
})
.catch((error) => console.error(error));*/}

const exprees = require('express');
const server = exprees();

const port = process.env.PORT || 3001;

server.listen(port);

server.get('/', (req, res) => {
    res.send('Leyendo bien el server');
});

console.log('Server listening on port', port);
