import React, { useState } from "react";
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  KeyboardAvoidingView,
  ScrollView,
  View,
  Modal,
  SafeAreaView,
  Image
} from "react-native";
import { Block, Checkbox, Text, theme } from "galio-framework";
import ArticleCard from '../components/ArticleCard';
import { articles, Images, argonTheme } from "../constants/";
import im1 from '../assets/imgs/s20.jpg';
import im2 from '../assets/imgs/rolex.jpg';
import im3 from '../assets/imgs/anillo.jpg';



const { width, height } = Dimensions.get("screen");
const cardWidth = width - theme.SIZES.BASE * 2;

const Articulos = (props) => {
  
  return (
    <ScrollView>
      <Block flex style={styles.group}>
          {/* <Text bold size={16} style={styles.title}>
            Cards
          </Text> */}
          <Block flex>
            <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
              <ArticleCard perfil={false} imagen={im1} titulo={'S20'} estado={'aprobado'} tipo={'articulo'} horizontal />
              <ArticleCard perfil={false} imagen={im2} titulo={'Reloj Rolex'} estado={'rechazado'} tipo={'coleccion'} horizontal />
              <ArticleCard perfil={false} imagen={im3} titulo={'Anillo de oro'} estado={'revision'} tipo={'articulo'} horizontal />
              
            </Block>
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