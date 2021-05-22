import React from "react";
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  ImageBackground,
  Platform
} from "react-native";
import { Block, Text, theme } from "galio-framework";
import { Card, Icon } from '../components';
import { Button } from "../components";
import { Images, argonTheme } from "../constants";
import { HeaderHeight } from "../constants/utils";
import articles from '../constants/articles';
import ArticleCard from '../components/ArticleCard';
import im1 from '../assets/imgs/s20.jpg';
import im2 from '../assets/imgs/rolex.jpg';
import im3 from '../assets/imgs/anillo.jpg';

const tevez = require("../assets/imgs/carlitos.jpg")
const cliente = {
                  idCliente: 42395030,
                  categoria:'Platino'
                }//SACAR TODO DE PERSONA //dejar solo los campos de la tabla cliente
const persona = {
                  idPersona: 42395030,
                  nombre: 'Carlos',
                  apellido: 'Tevez',
                  password: '1234',
                  mail: 'carlitos@gmail.com',
                  dirección: 'Fuerte Apache 124',
                  estado: 'Aprobado',
                  documento: 37456214,
                  foto: tevez 
              }
  //registros de subastas con el id del cliente y de registro de subasta saco infod el producto
const { width, height } = Dimensions.get("screen");

const thumbMeasure = (width - 48 - 32) / 3;

class Profile extends React.Component {
  render() {
    return (
      <Block flex style={styles.profile}>
        <Block flex>
          <Block
            //zsource={Images.ProfileBackground}
            style={styles.profileContainer, {backgroundColor:'#EEBB00'}}
            imageStyle={styles.profileBackground}
          >
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{ width, marginTop: '22%' }}
            >
              <Block flex style={styles.profileCard}>
                <Block middle style={styles.avatarContainer}>
                  <Image
                    source={persona.foto}
                    style={styles.avatar}
                  />
                </Block>
                <Block style={styles.info}>
                  <Block style={{marginTop:15}} row space="evenly">
                    <Block middle>
                      <Text
                        bold
                        size={18}
                        color="#525F7F"
                        style={{ marginBottom: 4 }}
                      >
                        2K
                      </Text>
                      <Block>
                        <Text style={{textAlign: 'center'}} size={12} color={argonTheme.COLORS.TEXT}>Subastas</Text>
                        <Text style={{textAlign: 'center'}} size={12} color={argonTheme.COLORS.TEXT}>ganadas</Text>
                      </Block>
                    </Block>
                    <Block middle>
                      <Text
                        bold
                        color="#525F7F"
                        size={18}
                        style={{ marginBottom: 4 }}
                      >
                        10
                      </Text>
                      <Block>
                        <Text style={{textAlign: 'center'}} size={12} color={argonTheme.COLORS.TEXT}>Subastas</Text>
                        <Text style={{textAlign: 'center'}} size={12} color={argonTheme.COLORS.TEXT}>participadas</Text>
                      </Block>
                    </Block>
                    <Block middle>
                      <Text
                        bold
                        color="#525F7F"
                        size={18}
                        style={{ marginBottom: 4 }}
                      >
                        89
                      </Text>
                      <Block>
                        <Text style={{textAlign: 'center'}} size={12} color={argonTheme.COLORS.TEXT}>Artículos</Text>
                        <Text style={{textAlign: 'center'}} size={12} color={argonTheme.COLORS.TEXT}>subastados</Text>
                      </Block>
                    </Block>
                  </Block>
                </Block>
                <Block flex>
                  <Block middle style={styles.nameInfo}>
                    <Text bold size={28} color="#32325D">
                      {persona.nombre} {persona.apellido}
                    </Text>
                    <Text size={18} color="#32325D" style={{ marginTop: 8 }}>
                      {persona.dirección}
                    </Text>
                    <Block row style={{ marginTop: 2 }}>
                      <Icon 
                        name={"Trophy"} family="AntDesign" 
                        size={16}
                        style={{ marginTop: 5, marginHorizontal: 3 }}
                        color='brown'
                      />
                      <Text size={16} color="#32325D" style={{ marginTop: 2 }}>
                        {cliente.categoria}
                      </Text>
                    </Block>
                  </Block>
                  <Block middle style={{ marginTop: 20, marginBottom: 16 }}>
                    <Block style={styles.divider} />
                  </Block>
                  <Block middle>
                    <ArticleCard perfil={true} estadoFinal={'ganado'} imagen={im1} titulo={'S20'} estado={'aprobado'} tipo={'articulo'} horizontal />
                    <ArticleCard perfil={true} estadoFinal={'perdido'} imagen={im2} titulo={'Reloj Rolex'} estado={'rechazado'} tipo={'coleccion'} horizontal />
                    <ArticleCard perfil={true} estadoFinal={'ganado'} imagen={im3} titulo={'Anillo de oro'} estado={'revision'} tipo={'articulo'} horizontal />
                    <Button
                      color="transparent"
                      textStyle={{
                        color: "#233DD2",
                        fontWeight: "500",
                        fontSize: 16
                      }}
                    >
                      Ver más
                    </Button>
                  </Block>
                  
                </Block>
              </Block>
            </ScrollView>
          </Block>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  profile: {
    marginTop: 0,
    //marginTop: Platform.OS === "android" ? -HeaderHeight : 0,
    // marginBottom: -HeaderHeight * 2,
    flex: 1
  },
  profileContainer: {
    width: width,
    height: height,
    padding: 0,
    zIndex: 1
  },
  profileBackground: {
    width: width,
    height: height / 2
  },
  profileCard: {
    // position: "relative",
    padding: theme.SIZES.BASE,
    marginHorizontal: theme.SIZES.BASE,
    marginTop: 65,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    zIndex: 2
  },
  info: {
    paddingHorizontal: 40
  },
  avatarContainer: {
    position: "relative",
    marginTop: -80
  },
  avatar: {
    width: 124,
    height: 124,
    borderRadius: 62,
    borderWidth: 0
  },
  nameInfo: {
    marginTop: 35
  },
  divider: {
    width: "90%",
    borderWidth: 1,
    borderColor: "#E9ECEF"
  },
  thumb: {
    borderRadius: 4,
    marginVertical: 4,
    alignSelf: "center",
    width: thumbMeasure,
    height: thumbMeasure
  }
});

export default Profile;
