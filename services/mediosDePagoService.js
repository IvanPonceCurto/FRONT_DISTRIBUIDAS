const getMetodosDePago = async (idCliente,setMediosDePago) =>{
    var requestOptions = {
        method: 'GET'
        
        };
        
        let response = await fetch(`https://distribuidas-backend.herokuapp.com/api/mediosdepago/paymentMethod/${idCliente}`, requestOptions)
        let data = await response.json();
        setMediosDePago(data.result);
        
}

module.exports = {
    getMetodosDePago
}