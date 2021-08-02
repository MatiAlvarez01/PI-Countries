const { Router } = require('express');
const { Country, Activity } = require('../db.js');
const {v4: uuidv4 } = require('uuid');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/", async (req, res, next) => {
    try {
        const activities = await Activity.findAll({
            include: Country
        });
        return res.json(activities)
    } catch (err) {
        return next(err);
    }
})

router.post("/", async (req, res, next) => {
    const { name, difficulty, duration, season, countries } = req.body;
    try {
        const newActivity = await Activity.create({
            id: uuidv4(),
            name: name,
            difficulty: difficulty,
            duration: duration,
            season: season
        })
        if (!Array.isArray(countries)) {
            const country = await Country.findByPk(countries)
            await newActivity.addCountry(country)
            return res.send(`${newActivity.name} was succefully merged with ${countries}`)
        } else {
            countries.forEach(async(countryId) => {
                const country = await Country.findByPk(countryId)
                await newActivity.addCountry(country)
            })
            return res.send(`${newActivity.name} was succefully merged with ${countries}`)
        }
    } catch (err) {
        next(err)
    }
})

module.exports = router;
