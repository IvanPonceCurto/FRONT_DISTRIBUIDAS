const getSubastasActivas = (setsubastasActivas) => {
  var requestOptions = {
    method: 'GET'

  };

  fetch("https://distribuidas-backend.herokuapp.com/api/subastas/getSubastas", requestOptions)
    .then((response) => {

      return response.json();

    }).then(responseData => {
      setsubastasActivas(responseData.subastas);
    }).catch(error => {
      setsubastasActivas([]);

    });
}

const updateEstadoSubasta = async (idSubasta) => {
    try {
      const res = await fetch(`https://distribuidas-backend.herokuapp.com/api/subastas/updateEstado/${idSubasta}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const dataRes = await res.json();
      return dataRes;
    } catch (error) {
      console.log(error);
    }
}


module.exports = {
  getSubastasActivas,
  updateEstadoSubasta
}