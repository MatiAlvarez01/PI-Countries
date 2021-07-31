const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.post("/", (req, res) => {
    res.send("ENTRE A ACTIVITY /")
})

module.exports = router;
