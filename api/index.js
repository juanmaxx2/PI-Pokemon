const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const types = require ('./src/controllers/types.js')

// Syncing all the models at once.
conn.sync({ force: true }).then(async () => {
  types();
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});