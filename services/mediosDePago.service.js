const fetchPaymentsMethod= async (idCliente)=>{

    try{
        const requestOptions={
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            redirect:'follow'
            
        }
        const listaTarjetas = await fetch(`https://distribuidas-backend.herokuapp.com/api/mediosdepago/paymentMethod/${idCliente}`,requestOptions)
        const listaTarjetasRespuesta= await listaTarjetas.json();
        console.log("Lista de tarjetas"+listaTarjetasRespuesta)
        return listaTarjetasRespuesta;
    }catch(err){
        throw new Error("Error al traer las tarjetas del cliente");
    }
}



module.exports={
    fetchPaymentsMethod
}