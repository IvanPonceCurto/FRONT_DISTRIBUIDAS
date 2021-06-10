import React,{useState,useEffect} from 'react';
import { Image, StyleSheet, Dimensions, Platform, ScrollView } from 'react-native';
import { Block, Button, Text, theme } from 'galio-framework';
import { HeaderHeight } from "../constants/utils";
import { SliderBox } from 'react-native-image-slider-box'
const { height, width } = Dimensions.get('screen');
const fotoPerfil = require('../assets/imgs/perfil.jpg')

const altura = height - height*0.20

//COSAS A HACER EN LA PANTALLA:
//falta foto de la persona, creo que lo estaba haciendo lauti eso

export default function Producto({route,navigation}){

	const objeto = route.params;
	const subasta = objeto.subasta;
	const producto = objeto.producto;
	const fotos = producto.lightfotos.map(foto =>{
		return foto.referencia_url;
	})
	const valor = objeto.valor;
	
	const[duenio,setDuenio] = useState({})

	const obtenerPersona = async function(){
	  var requestOptions = {
		method: 'GET'
	  
		};
		
		let response = await fetch(`https://distribuidas-backend.herokuapp.com/api/personas/getPersonaById/${producto.id_duenio}`, requestOptions)
		
		let data = await response.json();   
		setDuenio(data.persona)
	}
  
  
	 useEffect(()=>{
	   obtenerPersona()
	 },[setDuenio])
	 

	return(
            <Block>
                <Block flex style={styles.producto}>
				<Block flex>
				<Block style={styles.container}>
					<Block style={styles.backgroundImageContainer}>
					
					<SliderBox images={fotos} dotStyle={{marginBottom:90}} style={styles.backgroundImage} ></SliderBox>
					</Block>
					<ScrollView
					showsVerticalScrollIndicator={false}
					style={{ width, marginTop: '-20%',marginBottom:'-15%' }}
					>
					<Block flex style={styles.productCard}>
						<Block row space="between" style={styles.cardHeader}>
							<Text size={25} style={styles.productNameText}>{producto.descripcion}</Text>
							<Text size={30} style={styles.productPrizeText}>${producto.itemsCatalogo.precioBase}</Text>
						</Block>
						<Block middle style={{ marginTop: 30}}>
							<Block style={styles.divider} />
						</Block>
						<Block row>
								<Text size={20} style={styles.duenioText}>Dueño: {duenio.nombre}</Text>
								<Block  style={styles.avatarContainer}>
									<Image
										source={fotoPerfil}/*producto.duenio.foto*/
										style={styles.avatar}
									/>
								</Block>
						</Block>
						<Block style={styles.descripcionContainer}>
							<Text size={20} bold style={styles.tituloDescripcion}>Descripcion</Text>
							<Text size={15} style={styles.descripcionLargaTitulo}>{producto.descripcion}</Text>
							<Text style={styles.descripcionLarga}>{producto.descripcionLarga}</Text>
						</Block>
						<Button disabled={valor} style={styles.btnRealizarOferta} onPress={()=>navigation.navigate('Pujar',{producto,subasta})}>
							<Text size={16} style={{color:'#FFFFFF'}} bold>Realiza tu Oferta!</Text>
						</Button>
					</Block>
					</ScrollView>
				</Block>
				</Block>
				</Block>
   
            </Block>
        )
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
	duenioText:{
		marginTop:20,
		marginLeft:20
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
		marginTop:5
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
		color: '#707070',
		marginTop:10
	
	},
	descripcionLarga: {
		marginTop: 20,
		color: '#707070',
		marginHorizontal:20
	},
	descripcionLargaTitulo: {
		marginTop: 30,
		alignSelf:'center',
		color: '#707070'
	},
	btnRealizarOferta: {
		alignSelf: 'center',
		marginTop: '10%',
		borderRadius: 10,
		backgroundColor: '#3483FA'
	}
})
