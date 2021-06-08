const { default: AsyncStorage } = require("@react-native-async-storage/async-storage");

const fetchPaymentsMethod = (idCliente,setListaTarjetas)=>{

    try{
        const requestOptions={
            method:'GET',
            headers:{
                'Content-Type':'application/json'
            }
        }
        console.log("Yendo a buscar con: "+idCliente)
        fetch(`https://distribuidas-backend.herokuapp.com/api/mediosdepago/paymentMethod/${idCliente}`,requestOptions)
        .then(resultado=>{return resultado.json()}).then(res=>{console.log(res);setListaTarjetas(res.result)})
        .catch(err=>setListaTarjetas([]))
    }catch(err){
        console.log(err)
        setListaTarjetas([])
        throw new Error("Error al traer las tarjetas del cliente");
    }
}



module.exports={
    fetchPaymentsMethod
}