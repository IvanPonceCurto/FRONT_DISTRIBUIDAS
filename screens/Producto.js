import React from 'react';
import { Image, StyleSheet, Dimensions, Platform, ScrollView, Modal } from 'react-native';
import { Block, Button, Text, theme } from 'galio-framework';
import { HeaderHeight } from "../constants/utils";
import { SliderBox } from 'react-native-image-slider-box'
import { View } from 'native-base';
const { height, width } = Dimensions.get('screen');
/*  <Image  source={producto.producto.foto} style={styles.backgroundImage}/>*/
//<SliderBox images={producto.producto.fotos} dotStyle={{marginBottom:90}} style={styles.backgroundImage} ></SliderBox>
const altura = height - height*0.20
class Producto extends React.Component{

    renderProducto = () =>{
        const {route,navigation} = this.props;
        const producto = route.params
        const ProductoParam = producto.producto;
        const subasta = producto.subasta;
        console.log(producto)
        console.log(producto.producto.fotos)
        return(
        
            <Block flex style={styles.producto}>
            <Block flex>
              <Block style={styles.container}>
                <Block style={styles.backgroundImageContainer}>
                <Image style={styles.backgroundImage} source ={{uri:'https://res.cloudinary.com/apisbackfranivan/image/upload/v1607555915/MiAuto-MiAuto-93-1.png'}}/>
                </Block>
                <ScrollView
                  showsVerticalScrollIndicator={false}
                  style={{ width, marginTop: '-20%',marginBottom:'-15%' }}
                >
                <Block flex style={styles.productCard}>
                    <Block row space="between" style={styles.cardHeader}>
                        <Text size={25} style={styles.productNameText}>{producto.producto.nombreProducto}</Text>
                        <Text size={30} style={styles.productPrizeText}>{producto.producto.precioBase}</Text>
                    </Block>
                    <Block middle style={{ marginTop: 30}}>
                        <Block style={styles.divider} />
                    </Block>
                    <Block row>
                            <Block  style={styles.avatarContainer}>
                                <Image
                                    source={producto.producto.duenio.foto}
                                    style={styles.avatar}
                                />
                        </Block>
                        <Text size={20} style={styles.duenioText}>Dueño: {producto.producto.duenio.nombre}</Text>
                    </Block>
                    <Block style={styles.descripcionContainer}>
                        <Text size={20} bold style={styles.tituloDescripcion}>Descripcion</Text>
                        <Text style={styles.descripcionLarga}>{producto.producto.descripcion}</Text>
                        <Text style={styles.descripcionLarga}>fmsfmsfosmfsofmsfosmfosfmsofsmfosfmsofmsfosmfsofmsfosfmsofmsfosmfsofmsfosfmsofmsfsfmosfmsfosmfosfmsfosmfsofmsfosmfsofmsfosfmsfomfmsofmsfomsfo</Text>
                    </Block>
                    <Button style={styles.btnRealizarOferta} onPress={()=>navigation.navigate('Pujar',{ProductoParam,subasta})}>
                        <Text size={16} style={{color:'#FFFFFF'}} bold>Realiza tu Oferta!</Text>
                    </Button>
                </Block>
                </ScrollView>
            </Block>
            </Block>
            </Block>
       
        )
    }


    render(){

        
    
        return(
            <Block>
                {this.renderProducto()}
            </Block>
        )
    }
}


const styles = StyleSheet.create({

	producto: {
		marginTop: Platform.OS === 'android' ? -HeaderHeight : 0,
		flex: 1
	},
	container: {
		width: width,
		height: height,
		padding: 0
	},
	backgroundImageContainer: {
		width: width,
		height: height / 1.5
	},
	backgroundImage: {
		width: '100%',
		height: '100%'

	},


	productCard: {

		padding: 0,
		marginHorizontal: theme.SIZES.BASE,
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		backgroundColor: '#FFFFFF',
		height: altura,

	},
	cardHeader: {
		marginTop: 20
	},
	productNameText: {
		marginLeft: 20,
		marginTop: 16
	},
	productPrizeText: {
		marginRight: 20,
		marginTop: 10
	},
	divider: {
		width: "90%",
		borderWidth: 1,
		borderColor: "#C6C6C6",
	},
	avatarContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: '5%',
	},
	avatar: {
		width: 60,
		height: 60,
		borderRadius: 50,
		marginRight: 10
	},
	descripcionContainer: {
		paddingHorizontal: '5%',
		paddingVertical: '5%'
	},
	tituloDescripcion: {
		color: '#707070'
	},
	descripcionLarga: {
		marginTop: 20,
		color: '#707070'
	},
	btnRealizarOferta: {
		alignSelf: 'center',
		marginTop: '10%',
		borderRadius: 10,
		backgroundColor: '#3483FA'
	}
})
export default Producto