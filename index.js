
const server = require('./src/appServer.js');
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
.catch((error) => console.error(error));
