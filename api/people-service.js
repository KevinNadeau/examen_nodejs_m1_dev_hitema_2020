const fs = require('fs');
const HttpStatusCodes = require('http-status-codes');

module.exports = class PeopleService {
    constructor() {
        this.peoples = JSON.parse(fs.readFileSync(__dirname + '/people.json', 'utf8'));
    }

    updatePeople(id, people) {
        // To be implemented!
        let idPeople = this.peoples[id]
        if (idPeople === null) { return HttpStatusCodes.NOT_FOUND; }
        this.peoples[id] = people;
        return HttpStatusCodes.OK;
    }

    getPeople(filters) {
        // To be implemented!
        // eslint-disable-next-line no-magic-numbers
        if (Object.entries(filters).length === 0) {
            return this.peoples;
        }
        let tabFilters = [];
        this.peoples.forEach(people => {
            for (const key in filters) {
                if (people[key] === filters[key]) { tabFilters.push(people) }
            }
        });
        return tabFilters;
    }
}