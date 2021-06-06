const fetchPaymentsMethod = async (idCliente)=>{

    try{
        const requestOptions={
            method:'GET',
            headers:{
                'Content-Type':'application/json'
            }
        }
        console.log("Llamada del cliente: "+idCliente)
        const resultadoFetch = await fetch(`https://distribuidas-backend.herokuapp.com/api/mediosdepago/paymentMethod/${idCliente}`,requestOptions)
        const resultadoJson = await resultadoFetch.text();
        console.log("El resultado del Json es: "+JSON.parse(JSON.stringify(resultadoJson)))
        return JSON.parse(JSON.stringify(resultadoJson));
    }catch(err){
        console.log(err)
        throw new Error("Error al traer las tarjetas del cliente");
    }
}



module.exports={
    fetchPaymentsMethod
}