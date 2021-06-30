const login = async (mail, password) => {
  const body = {
    mail,
    password,
  };
  try {
    //192.168.0.229:3006
    const res = await fetch(
      "http://192.168.0.229:3006/api/clientes/login",
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
      "http://192.168.0.229:3006/api/clientes/contrasenia",
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
module.exports = {
  login,
  contraseña,
};
