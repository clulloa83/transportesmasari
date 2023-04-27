const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares');
const { obtener } = require('../controllers/demoapp');

const router = Router();

router.get('/',[
    // validarJWT,
    check('nombre', 'nombre es obligatorio').not().isEmpty(),
    validarCampos
], obtener);

module.exports = router;
