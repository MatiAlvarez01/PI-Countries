const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/", (req, res) => {
    res.send("ENTRE A COUNTRIES /")
})

router.get("/:idCountry", (req, res) => {
    res.send("ENTRE A COUNTRIES/:ID")
})

module.exports = router;
