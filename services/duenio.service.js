const findDueñoById = async (id) => {
    try {
        const res = await fetch(`https://distribuidas-backend.herokuapp.com/api/owners/${id}`, {
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

const createDueño = async (idCliente) => {
    const body = {
        identificador: idCliente,
        numeroPais: 54,
        verificacionFinanciera: 'si',
        verificacionJudicial: 'si',
        calificacionRiesgo: 2,
        verificador: 1
    }
    try {
        const res = await fetch('https://distribuidas-backend.herokuapp.com/api/owners/duenios', {
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

module.exports = {
    findDueñoById,
    createDueño
}