const createFotoCloudinary = async (base64) => {
  const body = {
    base64: base64
  };
  console.log(base64)
  try {
    const res = await fetch('https://distribuidas-backend.herokuapp.com/api/cloudinary/uploadCloudinary', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
    const dataRes = await res.json();
    return dataRes;
  } catch (error) {
    console.log(error);
  }
}

const createFotoWithBase64 = async (idProducto, url) => {
  const body = {
    idProducto,
    url
  };
  console.log(body);
  try {
    const res = await fetch('https://distribuidas-backend.herokuapp.com/api/fotos/createFotoWithBase64', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
    const dataRes = await res.json();
    return dataRes;
  } catch (error) {
    console.log(error);
  }
}

const getFotosByProducto = async (id) => {
  const res = await fetch(`https://distribuidas-backend.herokuapp.com/api/fotos/getFotosByProducto/${id}`, {
    method: 'GET',
  });
  const data = await res.json();
}

module.exports = {
  getFotosByProducto,
  createFotoWithBase64,
  createFotoCloudinary
}