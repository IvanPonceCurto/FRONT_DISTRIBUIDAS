const {
  default: AsyncStorage,
} = require("@react-native-async-storage/async-storage");
const { useState } = require("react");

const postPaymentsMethod = (formData) => {
  try {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };
    console.log("Llamando con " + JSON.stringify(formData));
    fetch(
      `https://distribuidas-backend.herokuapp.com/api/mediosdepago/paymentMethod`,
      requestOptions
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => console.log(res))
      .catch((err) => console.log("ERR" + err));
  } catch (err) {
    console.log("error" + err);
  }
};
const fetchAllPaymentsMethods = async (idCliente, setListaTarjetas) => {
  try {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    console.log("Yendo a buscar con: " + idCliente);
    fetch(
      `http://distribuidas-backend.herokuapp.com/api/mediosdepago/ALLpaymentMethod/${idCliente}`,
      requestOptions
    )
      .then((resultado) => {
        return resultado.json();
      })
      .then((res) => {
        console.log(res);
        setListaTarjetas(res.result);
      })
      .catch((err) => setListaTarjetas([]));
  } catch (err) {
    console.log(err);
    setListaTarjetas([]);
    throw new Error("Error al traer las tarjetas del cliente");
  }
};
const fetchPaymentsMethod = (idCliente, setListaTarjetas) => {
  try {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    console.log("Yendo a buscar con: " + idCliente);
    fetch(
      `https://distribuidas-backend.herokuapp.com/api/mediosdepago/paymentMethod/${idCliente}`,
      requestOptions
    )
      .then((resultado) => {
        return resultado.json();
      })
      .then((res) => {
        console.log(res);
        setListaTarjetas(res.result);
      })
      .catch((err) => setListaTarjetas([]));
  } catch (err) {
    console.log(err);
    setListaTarjetas([]);
    throw new Error("Error al traer las tarjetas del cliente");
  }
};

const fetchDeleteMethod = (idCliente, cardNumber, setListaTarjetas) => {
  console.log("Lllegó con " + idCliente, cardNumber);
  try {
    fetch(
      `https://distribuidas-backend.herokuapp.com/api/mediosdepago/paymentMethod/${idCliente}/${cardNumber}`,
      {
        method: "DELETE",
      }
    )
      .then((result) => {
        return result.json();
      })
      .then(console.log("Borró la tarjeta"));
  } catch (err) {
    console.log(err);
  }
};
const bringLength = (idCliente, setCantTarj) => {
  try {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    console.log("Yendo a buscar con: " + idCliente);
    fetch(
      `https://distribuidas-backend.herokuapp.com/api/mediosdepago/paymentMethod/${idCliente}`,
      requestOptions
    )
      .then((resultado) => {
        return resultado.json();
      })
      .then((res) => {
        setCantTarj(res.result.length);
      })
      .catch((err) => console.log(err));
  } catch (err) {
    console.log(err);
    //setListaTarjetas([])
    throw new Error("Error al traer las tarjetas del cliente");
  }
};

module.exports = {
  fetchPaymentsMethod,
  fetchDeleteMethod,
  postPaymentsMethod,
  bringLength,
};
