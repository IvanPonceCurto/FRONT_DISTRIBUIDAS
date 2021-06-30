import { GET_CARDS, GET_ID_CLIENTE } from "./types";

export default (state, action) => {
  //El state hace referencia a como está el estado ahora.
  //Action --> que es lo que quiero que ejecute.
  const GET_LENGTH = "GET_LENGTH";
  const { payload, type } = action;
  //Payload son los datos que me están pasando de esa funcion.

  switch (type) {
    case GET_CARDS:
      //Retorno el estado actual.
      console.log("ha pasado por acá chango" + payload);
      return {
        ...state,
        listaTarjetas: payload,
      };
    case GET_LENGTH:
      return {
        ...state,
        cantTarj: payload,
      };
    default:
      return state;
  }
};
//El dispatch lo que hace es llamar a esta funcion, que a su vez llama a la funcion
// del CardState y actualiza esa parte del estado.
