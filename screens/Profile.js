import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  TouchableOpacity
} from "react-native";
import { Block, Text, theme } from "galio-framework";
import { Icon } from '../components';
import { Button } from "../components";
import { argonTheme } from "../constants/index";
import ArticleCard from '../components/ArticleCard';
import AsyncStorage from "@react-native-async-storage/async-storage";
//import { TouchableOpacity } from "react-native-gesture-handler";

const perfil = require("../assets/imgs/fotoPerfil.jpg");

const { width, height } = Dimensions.get("screen");
const { getRegistrosByCliente } = require("../services/registroDeSubasta.service");
const { getFotosByProducto } = require("../services/foto.service");
const { getProductoById } = require("../services/producto.service");
const { getProductosByCliente } = require("../services/producto.service");
const { getPersona } = require("../services/persona.service");


const thumbMeasure = (width - 48 - 32) / 3;

const Profile = () => {

  const [misArticulos, setMisArticulos] = useState([]);
  const [categoria, setCategoria] = useState();
  const [direccion, setDireccion] = useState();
  const [nombre, setNombre] = useState();
  const [cliente, setCliente] = useState();
  const [subastasParticipadas, setSubastasParticipadas] = useState(0);
  const [articulosSubastados, setArticulosSubastados] = useState(0);
  const [objetos,setObjetos] = useState();
  useEffect(() => {
    recuperar();
    getRegistrosCliente(); 
    lenProductosSubastados();
  }, [])

  const recuperar = async () => { 
    try {
      const categoriaCliente = await AsyncStorage.getItem('categoria');
      const idCliente = await AsyncStorage.getItem('idCliente');
      const res = await getPersona(idCliente);
      //console.log(res);
      setCliente(idCliente);
      setCategoria(categoriaCliente);
      setNombre(res.persona.nombre);
      setDireccion(res.persona.direccion);
    } catch (error) {
        console.log(error);
    }
  }

  const lenProductosSubastados = async () => {
    const idCliente = await AsyncStorage.getItem('idCliente');
    const { productos } = await getProductosByCliente(idCliente);
    setArticulosSubastados(productos.length)
  }

  const getRegistrosCliente = async () => {
    const idCliente = await AsyncStorage.getItem('idCliente');
    const idProductos = [];
    const idObjetos = [];
    const { listaPujasDeCliente } = await getRegistrosByCliente(idCliente);
    for (const registro in listaPujasDeCliente) {
      if (!idProductos.includes(listaPujasDeCliente[registro].producto)) {
        idProductos.push(listaPujasDeCliente[registro].producto)
        idObjetos.push({idProducto:listaPujasDeCliente[registro].producto,idSubasta:listaPujasDeCliente[registro].subasta})
      };
    }
    setObjetos(idObjetos)
    const prodPromiseArr = [];
    console.log(idProductos)
    idProductos.forEach(async idProducto => {
      
      prodPromiseArr.push(getProductoById(idProducto));
    });
    const products = await Promise.all(prodPromiseArr);
    const fotoPromiseArr = [];
    products.forEach(producto => {
      fotoPromiseArr.push(getFotosByProducto(producto.producto.idProducto));
    });
    const fotos = await Promise.all(fotoPromiseArr);
    const productArray = [];
    fotos.forEach(foto => {
      const res = products.filter(product => product.producto.idProducto === foto.fotos[0].idProducto);
      res[0].producto.foto = foto.fotos[0].referencia_url;
      productArray.push(res[0]);
    });
    setMisArticulos(productArray);
    setSubastasParticipadas(productArray.length);
  }

  return (
    <Block flex style={styles.profile}>
      <Block flex>
        <Block
          //zsource={Images.ProfileBackground}
          style={styles.profileContainer, { backgroundColor: '#EEBB00' }}
          imageStyle={styles.profileBackground}
        >
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ width, marginTop: '22%' }}
          >
            <Block flex style={styles.profileCard}>
              <Block middle style={styles.avatarContainer}>
                <Image
                  source={perfil}
                  style={styles.avatar}
                />
              </Block>
              <Block style={styles.info}>
                <Block style={{ marginTop: 15 }} row space="evenly">
                  <Block middle>
                    <Text
                      bold
                      size={18}
                      color="#525F7F"
                      style={{ marginBottom: 4 }}
                    >
                      -
                      </Text>
                    <Block>
                      <Text style={{ textAlign: 'center' }} size={12} color={argonTheme.COLORS.TEXT}>Subastas</Text>
                      <Text style={{ textAlign: 'center' }} size={12} color={argonTheme.COLORS.TEXT}>ganadas</Text>
                    </Block>
                  </Block>
                  <Block middle>
                    <Text
                      bold
                      color="#525F7F"
                      size={18}
                      style={{ marginBottom: 4 }}
                    >
                      {subastasParticipadas}
                      </Text>
                    <Block>
                      <Text style={{ textAlign: 'center' }} size={12} color={argonTheme.COLORS.TEXT}>Subastas</Text>
                      <Text style={{ textAlign: 'center' }} size={12} color={argonTheme.COLORS.TEXT}>participadas</Text>
                    </Block>
                  </Block>
                  <Block middle>
                    <Text
                      bold
                      color="#525F7F"
                      size={18}
                      style={{ marginBottom: 4 }}
                    >
                      {articulosSubastados}
                      </Text>
                    <Block>
                      <Text style={{ textAlign: 'center' }} size={12} color={argonTheme.COLORS.TEXT}>Artículos</Text>
                      <Text style={{ textAlign: 'center' }} size={12} color={argonTheme.COLORS.TEXT}>subastados</Text>
                    </Block>
                  </Block>
                </Block>
              </Block>
              <Block flex>
                <Block middle style={styles.nameInfo}>
                  <Text bold size={28} color="#32325D">
                    {nombre}
                  </Text>
                  <Text size={18} color="#32325D" style={{ marginTop: 8 }}>
                    {direccion}
                  </Text>
                  <Block row style={{ marginTop: 2 }}>
                    <Icon
                      name={"Trophy"} family="AntDesign"
                      size={16}
                      style={{ marginTop: 5, marginHorizontal: 3 }}
                      color='brown'
                    />
                    <Text size={16} color="#32325D" style={{ marginTop: 2 }}>
                      {categoria}
                    </Text>
                  </Block>
                </Block>
                <Block middle style={{ marginTop: 20, marginBottom: 16 }}>
                  <Block style={styles.divider} />
                </Block>
                <Block middle>
                  {misArticulos.map((articulo,index) => {
                    
                    return (
                       
                        <ArticleCard key={articulo.producto.idProducto} item={objetos[index]} perfil={true} estadoFinal={'sdsd'} imagen={{ uri: articulo.producto.foto }} titulo={articulo.producto.descripcion} estado={'aprobado'} horizontal />
                      

                    );
                  })}
                
                </Block>

              </Block>
            </Block>
          </ScrollView>
        </Block>
      </Block>
    </Block>
  );
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
