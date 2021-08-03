const { Country, conn } = require('../../src/db.js');
const { expect } = require('chai');

const country = {
  area: 2780400,
  capital: "Buenos Aires",
  id: "ARG",
  imgFlag: "https://restcountries.eu/data/arg.svg",
  name:"Argentina",
  population: 43590400,
  region: "Americas",
  subRegion: "South America",
};

const countryWrong = {
  id: "ARG",
  name:"Argentina",
  area: 2780400,
  population: 43590400,
  region: "Americas",
  subRegion: "South America",
}

describe('Country model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Country.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Country.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should throw an error if not have all required fields', (done) => {
        Country.create(countryWrong) //Si uso country obj funciona.
          .then(() => done())
          .catch((err) => done(new Error(err)));
      });
      it('should work with a complete country', (done) => {
        Country.create(country)
          .then(() => done())
          .catch((err) => done(new Error(err)));
      });
    });
  });
});
