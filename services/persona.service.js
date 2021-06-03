const getPersonaById = async function(idPersona){

    var requestOptions = {
    method: 'GET'
  
    };
    try{
        let response = await fetch(`https://distribuidas-backend.herokuapp.com/api/personas/getPersonaById/${idPersona}`, requestOptions)
    
        let data = await response.json();
    

    }catch(error){
        console.log("ERROR"+error)
    }
}


module.exports = {
     getPersonaById
}