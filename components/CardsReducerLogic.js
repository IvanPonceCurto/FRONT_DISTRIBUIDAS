import { GET_CARDS, GET_ID_CLIENTE } from "./types";

export default (state, action) => {
  //El state hace referencia a como está el estado ahora.
  //Action --> que es lo que quiero que ejecute.

  const { payload, type } = action;
  //Payload son los datos que me están pasando de esa funcion.

  switch(type){
    case GET_CARDS:
        //Retorno el estado actual.
        return {
            ...state, listaTarjetas: payload
        }
  }
};
