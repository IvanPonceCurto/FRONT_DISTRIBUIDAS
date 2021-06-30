import AsyncStorage from "@react-native-async-storage/async-storage";
import { checkPropTypes } from "prop-types";
import React, { createContext, useReducer } from "react";
import CardsReducer from "./CardsReducer";
import CardsReducerLogic from "./CardsReducerLogic";
import { GET_CARDS } from "./types";
 
//Necesitas un provider y un consumer.
//State afuera que cualquier componente puede consumir.
//UserState definicion del estado que puedo consumir y que funciones pueden alterar ese estado.

//El use reducer te permite manejar el estado pero vos le definis que tipo  de moficacion va a sufrir con una fucncion.
const CreateCardContext = (props) => {
  const listaUsuarioTarjetas = {
    listaTarjetas: [],
    cantTarj: 0
  };
  const [state, dispatch] = useReducer(CardsReducerLogic, listaUsuarioTarjetas);

  //Lo que tiene esto es que el reducer tiene una serie de funciones a ejecutar, y vos en el dispatch le podes decir que queres quie ejecute.
  //A diferencia del state que vos llamas al trigger para que lo cambie, acá le decis que ejecute x funcion para actualizar y listo.

 

  const getCards = (idCliente) => {
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
          return resultado.json()
          console.log(resultado)
        })
        .then((res) => {
          console.log("RESPUESTA "+JSON.stringify(res.result))
          dispatch({
            type: "GET_CARDS", 
            payload: res.result
          })
        })
        //.catch((err) => setListaTarjetas([]));*/
    } catch (err) {
      console.log(err);
      //setListaTarjetas([]);
      throw new Error("Error al traer las tarjetas del cliente");
    }
  };

  //Mi cards reducer sería el context que yo estaría consumiendo

  return (
    //Poniendolo acá le decis todos los componentes que estén acá, manejan el estado ese. Entonces acá en  teoría debería pasarle el estado de la tarjeta para que active el modal.
    <CardsReducer.Provider
      value={{
        cardsList: state.listaTarjetas,
        getCards
      }}
    >
      {props.children} 
    </CardsReducer.Provider>
  );
};

export default CreateCardContext;
