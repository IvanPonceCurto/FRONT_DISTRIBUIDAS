const createProducto = async (producto) => {
    const body = {
        fecha: producto.fecha,
        disponible: producto.disponible,
        descripcion: producto.descripcion,
        descripcionLarga: producto.descripcionLarga,
        id_revisor: 2,
        id_duenio: producto.id_duenio
    }
    try {
        const res = await fetch('https://distribuidas-backend.herokuapp.com/api/productos/createProducto', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        const dataRes = await res.json();
        return dataRes;
    } catch (error) {
        console.log(error);
    }
}

const getProductosByCliente = async (idCliente) => {
    try {
        const res = await fetch(`https://distribuidas-backend.herokuapp.com/api/productos/getProductosByDuenio/${idCliente}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        const dataRes = await res.json();
        return dataRes;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    createProducto,
    getProductosByCliente
}