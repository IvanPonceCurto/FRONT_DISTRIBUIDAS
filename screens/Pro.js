import React from 'react';
import { ImageBackground, Image, StyleSheet, StatusBar, Dimensions, Platform, Linking,ScrollView } from 'react-native';
import { Block, Button, Text, theme } from 'galio-framework'; 
import {Card} from '../components/Card'
import { Images, argonTheme } from '../constants/';
import { HeaderHeight } from "../constants/utils";

const { height, width } = Dimensions.get('screen');


export default class Pro extends React.Component {

  render() {
    return (
      
        <Block flex style={styles.catalogo}>
          <Block flex>
              <Block style={styles.container,{ backgroundColor:'#3483FA'}}> 
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={{ width, marginTop: '25%' }}
                  >
                    <Block flex style={styles.catalogoCard}>
                      <Text>OOOOOOOO</Text>
                    </Block>
                </ScrollView>
              </Block>
          </Block>
        </Block>
       
    
    );
  }
}

const styles = StyleSheet.create({
  catalogo:{
    marginTop: Platform.OS === 'android' ? -HeaderHeight : 0,
    flex:1
  },
  container: {
    width: width,
    height: height,
    padding: 0,
    zIndex: 1
    
  },
  catalogoBackground: {
    width: width,
    height: height / 2
  },
  title: {
    paddingBottom: theme.SIZES.BASE,
    paddingHorizontal: theme.SIZES.BASE * 2,
    marginTop: 44,
    color: argonTheme.COLORS.HEADER
  },
  group: {
    paddingTop: theme.SIZES.BASE * 2
  },

  catalogoCard:{
    padding: theme.SIZES.BASE,
    marginHorizontal: theme.SIZES.BASE,
    marginTop: 100,
    borderTopLeftRadius: 6,
    height:height,
    borderTopRightRadius: 6,
    backgroundColor: '#FFFFFF',
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    zIndex: 2
  }

});
