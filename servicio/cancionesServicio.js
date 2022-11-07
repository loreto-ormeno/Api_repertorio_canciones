const { repertorio } = require('../models')

async function getCanciones() {
    try {
        return repertorio.findAll();
    } catch (error) {
        throw error
    }
}
async function postCancion(cancion) {
    try {
        return repertorio.create(cancion);
    } catch (error) {
        throw error
    }
}
async function updateCancion(cancion) {
    try {
        return repertorio.update(cancion, {
            where:{
                id: cancion.id
            }
        });
    } catch (error) {
        throw error
    }
}
async function deleteCancion(id) {
    try {
        return repertorio.destroy( {
            where:{
                id: id
            }
        });
    } catch (error) {
        throw error
    }
}

module.exports = { getCanciones, postCancion,updateCancion,deleteCancion}