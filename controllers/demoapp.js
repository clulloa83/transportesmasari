const { response, request } = require('express');
const { StatusCode } = require('status-code-enum');
const servicio = require('../services/demoapp');
const Params = require('../models/params/paramsDemoapp');

/**
 * obtiene
 * @param {*} req 
 * @param {*} res 
 */
const obtener = async(req = request, res = response) => {

    const { nombre } = req.query;

    const params = new Params();
    params.nombre = nombre;

    try {

        const result = await servicio.obtener(params);
        res.status(StatusCode.SuccessOK).json(result);
        
    } catch (error) {
        console.log('error obtener', error);
        res.status(StatusCode.ServerErrorInternal).json({ error })
    };
}

module.exports = {
    obtener,
}