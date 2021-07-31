const { Router } = require('express');
const { Country, Activity } = require('../db.js');
const { Op } = require("sequelize");
const axios = require("axios");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

async function fillDatabase(req, res, next) {
    const allCountries = await Country.findAll();
    if(!allCountries.length) { //Si la database esta vacia, la completa, luego continua
        let countriesToDatabase = await axios.get("https://restcountries.eu/rest/v2/all");
        countriesToDatabase = countriesToDatabase.data.map(country => {
            return Country.create({
                id: country.alpha3Code,
                name: country.name,
                imgFlag: country.flag,
                region: country.region,
                capital: country.capital,
                subRegion: country.subregion,
                area: country.area,
                population: country.population
            })
        })
        Promise.all(countriesToDatabase)
        .then(respuesta => next())
    } else { //Si la database esta completa, continua
        return next()
    }
}

router.get("/", fillDatabase, async(req, res) => {
    const { name } = req.query;
    if(name) { //Si me pasan un nombre por Query
        const countries = await Country.findAll({
            where: {
                name: {
                    [Op.iLike]: `%${name}%` //iLike hace que no sea case sensitive
                }
            }
        }) //Si este pais existe
        if(countries.length) {
            return res.json(countries)
        } else {
            return res.send(`${name} not Found`)
        }
    } else { //Si no me pasan nombre por Query
        const allCountries = await Country.findAll();
        return res.send(allCountries)
    }
})

router.get("/:idCountry", fillDatabase, async(req, res) => {
    let { idCountry } = req.params;
    idCountry = idCountry.toUpperCase() //Ya que los ID son case sensitive
    try {
        const country = await Country.findByPk(idCountry)
        if(country) {
            return res.send(country)
        } else {
            return res.send(`Country with id=${idCountry} not found.`)
        }
    } catch (err) {
        return res.send(err)
    }
})

module.exports = router;
