import React, { useContext, useEffect } from "react";
import CardsContext from "./CardsReducer";
import CustomModal from "./CustomModal";
import { StyleSheet, Image } from "react-native";
import { Block, Text, theme } from "galio-framework";
import { TouchableOpacity } from "react-native-gesture-handler";

//IMAGENES
const visa = require("../assets/imgs/visa.png");
const master = require("../assets/imgs/mastercard-logo.png");
const borrarIcon = require("../assets/imgs/Vector.png");
const validateIcon = require("../assets/imgs/validate.png");
const visaDigit = "4";

export default function CardPaymentMethod({ full , horizontal, style }) {
  console.log("props "+ full + " " +horizontal)
  const {cardsList,getCards} = useContext(CardsContext)
  useEffect(()=>{getCards(11)},[])
  //Como llama a getCards, y getCards actualiza el estado, lo puedo empezar a usar.
  //Con esa listaTarjetas que tengo, ya puedo acceder a ella.
  return (<Block>{
     cardsList.map((e)=>{console.log(e);return (renderCardComponent(e,full,horizontal,style))})
    }</Block>);
}
//Yo lo que tendría que hacer es tirar el 

//El return tendría que ir por cada 

const renderCardComponent = (e,full,horizontal,style) => {
  //const { navigation, horizontal, full, style, imageStyle } = this.props;
  //console.log(props)
  const imageStyles = [
    styles.centrado,
    full ? styles.fullImage : styles.horizontalImage,
    //imageStyle,
  ];
  const cardContainer = [styles.card, styles.shadow, styles.group, style];
  const imgContainer = [
    styles.centrado,
    styles.imageContainer,
    horizontal ? styles.horizontalStyles : styles.verticalStyles,
    styles.shadow,
  ];

  return (
    <Block
      row={true}
      card
      height={80}
      style={cardContainer}
      key={e.cardNumber}
    >
      <Block row={true} height={50} alignItems={"center"} paddingLeft={20}>
        {renderCardImagen(
          e.cardNumber,
          imageStyles
        )} 
      </Block>

      <Block
        row={true}
        height={50}
        flex
        alignItems={"center"}
        style={
          (styles.cardDescription, { paddingLeft: 50, alignItems: "center" })
        }
      >
        <Text size={20} center style={styles.cardTitle}>
          {e.cardNumber}
        </Text>
        {/*<Text size={12} muted={!ctaColor} color={ctaColor || argonTheme.COLORS.ACTIVE} bold>{item.cta}</Text>*/}
        {/*<Button onPress={props=>{<CustomModal {...props} visible={true}/>;console.log("e")}} style={{borderRadius:40}}>BORRAR</Button>*/}
      </Block>
      <Block row={true} height={10} alignItems={"center"}>
        {renderValidatedIcon(e.isValidated)}
      </Block>
    </Block>
  );
};

const renderCustomModal = () => {
  return (
    <CustomModal
      visible={isVisible}
      cardNumber={cardNumber}
      decir={toDecir}
      clientNumber={this.state.clientNumber}
    ></CustomModal>
  );
};
const renderCardImagen = (cardNumber,imgStyles) => {
  console.log("CardNumber: " + cardNumber);
  if (cardNumber.substring(0, 1) == 4) { 
    return (
      <Block
        flex
        center
        row={true}
        style={{ maxHeight: 50, maxWidth: 100, alignContent: "center" }}
      >
        <Image
          source={visa}
          style={(imgStyles, { height: 50, width: 100, alignItems: "center" })}
        ></Image>
      </Block>
    );
  }
  return (
    <Block
      flex
      center
      row={true}
      style={{ maxHeight: 50, maxWidth: 100, alignContent: "center" }}
    >
      <Image
        source={master}
        style={(imgStyles, { height: 50, width: 100, alignItems: "center" })}
      ></Image>
    </Block>
  );
};
const renderValidatedIcon = (isValid) => {
  if (isValid) {
    return (
      <TouchableOpacity
        onPress={this.changeState}
        style={{ alignItems: "flex-end", paddingBottom: 20 }}
      >
        <Image style={{ alignItems: "flex-end" }} source={borrarIcon}></Image>
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity
      disabled={true}
      style={{ alignItems: "flex-end", paddingTop: 0 }}
    >
      <Image style={{ alignItems: "flex-end" }} source={validateIcon}></Image>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  group: {
    paddingTop: theme.SIZES.BASE,
  },
  botonSi: {
    backgroundColor: "green",
  },
  botonNo: {
    backgroundColor: "red",
  },
  centrado: {
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  card: {
    backgroundColor: theme.COLORS.WHITE,
    marginVertical: theme.SIZES.BASE,
    borderWidth: 2,
    minHeight: 50,
    marginBottom: 15,
  },
  cardTitle: {
    flex: 1,
    flexWrap: "wrap",
    paddingLeft: 30,
    paddingBottom: 6,
    alignItems: "flex-end",
  },
  cardDescription: {
    padding: theme.SIZES.BASE / 2,
  },
  imageContainer: {
    borderRadius: 3,
    elevation: 1,
    overflow: "hidden",
    alignItems: "center",
  },
  image: {
    borderRadius: 3,
  },
  horizontalImage: {
    height: 100,
    width: 200,
  },
  horizontalStyles: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  verticalStyles: {
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
  },
  fullImage: {
    height: 215,
  },
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.1,
    elevation: 2,
  },
  button: {
    alignItems: "flex-end",
    padding: 10,
    backgroundColor: "#DDDDDD",
  },
  vistaPadre: {},
  viewHijo: {},
  borrarCard: {
    backgroundColor: "#EF280F",
  },
  noBorrarCard: {
    backgroundColor: "#6DC36D",
  },
  buttonCard: {
    alignItems: "flex-start",
    padding: 10,
  },
});
