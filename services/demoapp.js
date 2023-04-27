
const obtener = async(params) => {

    const mensaje = `obtener nombre: ${ params.nombre }`;

    const result = {
        mensaje
    };

    return result;

};



module.exports = {
    obtener,
}
