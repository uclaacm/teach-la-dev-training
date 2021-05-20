// First, we import our relevant libraries and helpers.
const express = require('express');
const cors = require('cors');

// Here we declare our actual server.
const app = express();

// Here we declare our middleware - functions that modify incoming and
// outgoing requests. We have one for CORS, one to parse the body as JSON,
// and one to log the request.
app.use(cors());
app.use(express.json());
app.use((_req, _res, next) => {
  console.log(`INFO: Got a new request at ${new Date()}.`);
  next()
});

// This is the `PORT` that we'll serve our server on!
const PORT = 8081;

// And finally, this is our fake ""database"". Instead of a simple global
// variable in memory, you would typically write some functions to connect
// your backend to a real database, either on disk or in the cloud!
var database = {};

/**
 * Below, we actually get going on the interesting stuff.
 */

// This is just a dummy endpoint we use for making sure our server works!
// We use a `_` for the first parameter just to keep our code tidy -- indicating
// that we won't use the input.
app.get('/', (_req, res) => {
  res.send({
    data: "Hi there! Welcome to our backend."
  });
});

// Our first endpoint: create a new user! We expect the call to provide
// the user's information in the body of their request. Following HTTP
// semantics, this is a `POST` endpoint.
app.post('/user', (req, res) => {
  // Instead of fetching a user, we set it here.
  const name = req.body["name"];
  database[name] = {
    name,
    created: new Date(),
  };

  res.send({
    data: `Created user with name ${name} successfully`,
  });
});

/****
 * Below, we give a few endpoints that all do the same
 * thing: get a user's data.
 */

// This is a `GET` endpoint that we can use to retrieve a user via
// query variables.
app.get('/user', (req, res) => {
  const name = req.query["name"];
  if (!database[name])
    return res.status(404);

  res.send({
    data: database[name],
  });
});

// And finally, a more complicated example, taking our user parametrically
// via the path the request is made to.
app.get('/user/:id', (req, res) => {
  const name = req.params["name"];
  if (!database[name])
    return res.status(404);

  res.send({
    data: database[name],
  });
});

/**
 * Below, we simply start up the server!
 */
app.listen(PORT, () => {
  console.info(`Server is now running at \`http://localhost:${PORT}\`!`);
});
