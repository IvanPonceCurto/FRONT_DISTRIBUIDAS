import 'buffer';

const createFoto = () =>{
    var formdata = new FormData();
    formdata.append("idProducto", "1");
    formdata.append("foto", fileInput.files[0], "/e:/Escritorio/Distribuidas/reloj.jpg");

    var requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow'
    };

 fetch("localhost:3006/api/fotos/createFoto", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}



const getFotosByProducto = async (id) => {
    const res = await fetch(`https://distribuidas-backend.herokuapp.com/api/fotos/getFotosByProducto/${id}`, {
      method: 'GET',
    });
    const data = await res.json();
 
  }

module.exports = {
    getFotosByProducto,
    createFoto
}