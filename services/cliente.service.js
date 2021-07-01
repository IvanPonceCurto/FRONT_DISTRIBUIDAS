const login = async (mail, password) => {
  const body = {
    mail,
    password,
  };
  try {
    const res = await fetch(
      "https://distribuidas-backend.herokuapp.com/api/clientes/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );
    const dataRes = await res.json();
    return dataRes;
  } catch (error) {
    console.log(error);
  }
};
const contraseña = async (mail, new_password) => {
  const body = {
    mail,
    new_password,
  };
  try {
    const res = await fetch(
      "https://distribuidas-backend.herokuapp.com/api/clientes/contrasenia",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );
    const dataRes = await res.json();
    return dataRes;
  } catch (err) {
    console.log("El error es: " + err);
  }
};

const createCliente = async (persona,identificador) => {

  const body = {
      password:'none',
      mail:persona.email,
      idPersona:identificador
      
  }
 
  try {
      const res = await fetch('https://distribuidas-backend.herokuapp.com/api/clientes/solicitar', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(body)
      });
      const dataRes = await res.json();
      console.log("CLIENTE NUEVOOOO")
      console.log(dataRes);
      return dataRes;
  } catch (error) {
      console.log(error);
  }
}


module.exports = {
  login,
  contraseña,
  createCliente
};
