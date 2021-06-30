const getSubastasActivas = (setsubastasActivas) => {
      var requestOptions = {
        method: 'GET'
        
      };
      
      fetch("https://distribuidas-backend.herokuapp.com/api/subastas/getSubastas", requestOptions)
        .then((response) => {
            
              return response.json();
            
        }).then (responseData => {
            setsubastasActivas(responseData.subastas);
        }).catch(error => {
            setsubastasActivas([]);
      
        });
 
  }

  module.exports = {
      getSubastasActivas
  }