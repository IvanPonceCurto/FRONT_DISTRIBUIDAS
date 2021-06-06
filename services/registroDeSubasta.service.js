const getPujaActual = (idSubasta,idProducto,setPujaActual) =>{
   

    var requestOptions = {
    method: 'GET'
    };

    fetch(`https://distribuidas-backend.herokuapp.com/api/registrosDeSubasta/getRegistroActual/${idSubasta}/${idProducto}`, requestOptions)
    .then(response => {
        console.log(response)
        return response.json()
    }).then(result => {setPujaActual(result.pujaActual)})
    .catch(error => console.log('error', error));
    }


const nuevaPuja = (idSubasta,idDuenio,idProducto,idCliente,importe) =>{

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
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}

module.exports = {
    getPujaActual,
    nuevaPuja
}