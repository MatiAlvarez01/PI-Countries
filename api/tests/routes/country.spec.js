/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Country, conn } = require('../../src/db.js');

const agent = session(app);
const country = {
  activities: [],
  area: 2780400,
  capital: "Buenos Aires",
  id: "ARG",
  imgFlag: "https://restcountries.eu/data/arg.svg",
  name:"Argentina",
  population: 43590400,
  region: "Americas",
  subRegion: "South America",
};

const countryRes = {
  "id": "ARG",
  "name": "Argentina",
  "imgFlag": "https://restcountries.eu/data/arg.svg",
  "region": "Americas",
  "population": 43590400,
  "activities": []
};

describe('Country routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Country.sync({ force: true })
    .then(() => Country.create(country)));
  describe('GET /countries', () => {
    it('should get 200', () =>
      agent.get('/countries').expect(200)
    );
    it('Should res with the country in the database', () => 
      agent.get('/countries').expect((res) => {
        expect(res.body).to.deep.equal([countryRes]);
      })
    );
    it("Should res with the country who match the name pass by query", () =>
      agent.get("/countries?name=argentina").expect((res) => {
        expect(res.body).to.deep.equal([countryRes])
      })
    );
    it("Should res with the country who match the ID pass by params", () => 
      agent.get("/countries/ARG").expect((res) => {
        expect(res.body).to.deep.equal(country)
      })
    );
  });

});
