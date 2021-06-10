const getPujaActual = (idSubasta,idProducto,setPujaActual) =>{
   

    var requestOptions = {
    method: 'GET'
    };

    fetch(`https://distribuidas-backend.herokuapp.com/api/registrosDeSubasta/getRegistroActual/${idSubasta}/${idProducto}`, requestOptions)
    .then(response => {
        
        return response.json()
    }).then(result => {setPujaActual(result.pujaActual)})
    .catch(error => console.log('error', error));
    }


const nuevaPuja = (idSubasta,idDuenio,idProducto,idCliente,importe,setPujaActual) =>{

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({"subasta":idSubasta,"duenio":idDuenio,"producto":idProducto,"cliente":idCliente,"importe":importe,"comision":0.12});

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw
    };

    fetch("https://distribuidas-backend.herokuapp.com/api/registrosDeSubasta/createRegistroDeSubasta", requestOptions)
    .then(response => {return response.json()})
    .then(result => setPujaActual(result.nuevoRegistro.importe))
    .catch(error => console.log('error', error));
}
const getTrackSubasta = async(idCliente, idSubasta) => {
	const body = {
        idSubasta
	}
	try {
		const res = await fetch('https://distribuidas-backend.herokuapp.com/api/registrosDeSubasta/getRegistrosBySubasta/'+idSubasta, {
			method: 'GET',
		});
		const dataRes = await res.json();
		return dataRes;
	} catch (error) {
		console.log(error);
	}
}

const getRegistrosByIdCliente = async(idCliente) => {
	
	try {
		const res = await fetch('https://distribuidas-backend.herokuapp.com/api/registrosDeSubasta/getRegistrosByCliente/'+idCliente, {
			method: 'GET',
		});
		const dataRes = await res.json();

    
		return dataRes;
	} catch (error) {
		console.log(error);
	}
}

const getRegistrosByCliente = async (idCliente) => {
    try {
        const res = await fetch(`https://distribuidas-backend.herokuapp.com/api/registrosDeSubasta/getRegistrosByCliente/${idCliente}`, {
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
    getPujaActual,
    nuevaPuja,
    getRegistrosByCliente
}