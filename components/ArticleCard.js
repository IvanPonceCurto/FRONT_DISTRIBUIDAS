import React from 'react';
import { withNavigation } from '@react-navigation/compat';
import PropTypes from 'prop-types';
import { StyleSheet, Image, TouchableWithoutFeedback, View } from 'react-native';
import { Block, Text, theme } from 'galio-framework';
import { argonTheme } from '../constants';
const { getTrackSubasta } = require("../services/registroDeSubasta.service")


class ArticleCard extends React.Component {

  track = async (idCliente) => {
    try {
      const res1 = await getTrackSubasta(this.props.idCliente,7);
      //console.log(idCliente);
    } catch (error) {
        console.log(error);
    }
  }
  render() {
    
    const { navigation, item, horizontal, full, style, ctaColor, imageStyle, titulo, estado, tipo, perfil, estadoFinal, idCliente} = this.props;
    //this.track(idCliente);
    const imageStyles = [
      full ? styles.fullImage : styles.horizontalImage,
      imageStyle
    ];
    const cardContainer = [styles.card, styles.shadow, style];
    const imgContainer = [styles.imageContainer,
      horizontal ? styles.horizontalStyles : styles.verticalStyles,
      styles.shadow
    ];
    let estadoItem;
    let tipoItem;
    let estadoFinalItem;
    let colorEstadoFinal;
    if(estado==='aprobado'){
      estadoItem = (
        <Text size={16} color={'green'} bold>Aprobado</Text>
      );
    }
    if(estado==='rechazado'){
        estadoItem = (
          <Text size={16} color={'red'} bold>Rechazado</Text>
        );
    }
    if(estado==='revision'){
      estadoItem = (
        <Text size={16} color={'black'} bold>En revisión</Text>
      );
    }
    if (tipo==='coleccion'){
        tipoItem = (
          <Text size={16} color={'black'}>Coleccion de artículos</Text>
        );
      }
      if(tipo==='articulo'){
        tipoItem = (
          <Text size={16} color={'black'}>Artículo individual</Text>
        );
    }
        //<TouchableWithoutFeedback onPress={() => navigation.navigate('Home')}>
    if(perfil===false){
      estadoFinalItem = (
        <Block row={horizontal} card flex style={cardContainer}>
        
            <Block flex style={imgContainer}>
              <Image source={this.props.imagen} style={imageStyles}/>
            </Block>
          <TouchableWithoutFeedback>
            <Block flex space="between" style={styles.cardDescription}>
              <Text size={18} style={styles.cardTitle} bold>{titulo}</Text>
              {tipoItem}
              {estadoItem}
            </Block>
          </TouchableWithoutFeedback>
        </Block>
      );
    }else{
      if (estadoFinal==='ganado'){
        colorEstadoFinal = (
          <Text size={19} color='green' >Ganado</Text>
        );
      }else{
        colorEstadoFinal = (
          <Text size={19} color='red' ></Text>
        );
      }
      estadoFinalItem = (
        <Block row={horizontal} card flex style={cardContainer}>
          
              <Block flex style={imgContainer}>
                <Image source={this.props.imagen} style={imageStyles}/>
              </Block>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('TrackSubasta',{producto:item})}>
              <Block flex space="between" style={styles.cardDescription}>
                <Text size={18} style={styles.cardTitle} bold>{titulo}</Text>
                {tipoItem}
                {colorEstadoFinal}
              </Block>
            </TouchableWithoutFeedback>
          </Block>
      );
    }


    return (
      <Block row={horizontal}>
        {estadoFinalItem}
      </Block>
    );
  }
}

ArticleCard.propTypes = {
  item: PropTypes.object,
  horizontal: PropTypes.bool,
  full: PropTypes.bool,
  ctaColor: PropTypes.string,
  imageStyle: PropTypes.any,
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.COLORS.WHITE,
    marginVertical: theme.SIZES.BASE,
    borderWidth: 0,
    minHeight: 114,
    marginBottom: 16
  },
  cardTitle: {
    flex: 1,
    flexWrap: 'wrap',
    paddingBottom: 6
  },
  cardDescription: {
    padding: theme.SIZES.BASE / 2
  },
  imageContainer: {
    borderRadius: 3,
    elevation: 1,
    overflow: 'hidden',
  },
  image: {
    // borderRadius: 3,
  },
  horizontalImage: {
    height: 122,
    width: 'auto',
  },
  horizontalStyles: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  verticalStyles: {
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0
  },
  fullImage: {
    height: 215
  },
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.1,
    elevation: 2,
  },
});

export default withNavigation(ArticleCard);