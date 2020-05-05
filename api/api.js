const express = require('express');
const bodyParser = require('body-parser');
const HttpStatusCodes = require('http-status-codes');
const v1 = express.Router();

const PeopleService = require('./people-service');
const peopleService = new PeopleService();
const app = express();

// To be implemented!
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api/v1', v1);


v1.put('/people/:id', async(request, response) => {
    //corps de la requete
    const people = request.body;
    //id de la requete
    const id = request.params.id;

    // eslint-disable-next-line no-magic-numbers
    const isValid = people.name && people.name.length > 0;

    if (!isValid) return response.sendStatus(HttpStatusCodes.BAD_REQUEST);

    const status = peopleService.updatePeople(id, people);

    response.sendStatus(status);
});

v1.get('/people', async(request, response) => {
    const people = peopleService.getPeople(request.query)
    response.send(people);
});


module.exports = app;