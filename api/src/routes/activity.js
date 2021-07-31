const { Router } = require('express');
const { Activity } = require('../db.js');
const {v4: uuidv4 } = require('uuid');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.post("/", async (req, res) => {
    const { name, difficulty, duration, season } = req.body;
    try {
        const newActivity = await Activity.create({
            id: uuidv4(),
            name: name,
            difficulty: difficulty,
            duration: duration,
            season: season
        })
        return res.send(newActivity)
    } catch (err) {
        console.log(err)
    }
})

module.exports = router;
