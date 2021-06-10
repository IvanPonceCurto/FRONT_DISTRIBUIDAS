import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  ScrollView,
  View
} from "react-native";
import { Block, theme } from "galio-framework";
import ArticleCard from '../components/ArticleCard';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator } from 'react-native';
const { getProductosByCliente } = require("../services/producto.service");
const { getFotosByProducto } = require("../services/foto.service");

const Articulos = (props) => {

  const [misArticulos, setMisArticulos] = useState([]);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    getMisArticulos();
  }, []);

  const getMisArticulos = async () => {
    const idCliente = await AsyncStorage.getItem('idCliente');
    const { productos } = await getProductosByCliente(idCliente);
    const promiseArr = [];
    productos.forEach(producto => {
      promiseArr.push(getFotosByProducto(producto.idProducto));
    });
    const fotos = [];
    Promise.all(promiseArr).then(values => {
      values.forEach(value => {
        fotos.push({ idProducto: value.fotos[0].idProducto, uri: value.fotos[0].referencia_url });
      });
      const productArr = []
      fotos.forEach(foto => {
        const res = productos.filter(product => product.idProducto === foto.idProducto);
        res[0].foto = foto.uri;
        productArr.push(res[0]);
      });
      setShowLoader(false);
      setMisArticulos(productArr);
    });
  }

  return (
    <ScrollView>
      <Block flex style={styles.group}>
        <Block flex>
          {showLoader ?
            <View style={{ marginTop: '20%' }}>
              <ActivityIndicator size="large" color="#3483FA" />
            </View>
            :
            <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
              {misArticulos.map((articulo, index) => {
                return <ArticleCard key={index} perfil={false} imagen={{ uri: articulo.foto }} titulo={articulo.descripcion} estado={'revision'} horizontal />
              })}
            </Block>
          }
        </Block>
      </Block>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  }
});
export default Articulos;