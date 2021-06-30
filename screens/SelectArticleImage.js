import React, { useState } from "react";
import {
	StyleSheet,
	Dimensions,
	View,
	KeyboardAvoidingView,
	ScrollView,
	Image,
	Alert
} from "react-native";
import { Button, Text, theme } from "galio-framework";
import argonTheme from "../constants/Theme";
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import { StackActions } from '@react-navigation/native';
const { createProducto } = require("../services/producto.service");
const { createFotoWithBase64, createFotoCloudinary } = require("../services/foto.service");

const SelectArticleImage = ({ route, navigation }) => {

	const [imageList, setImageList] = useState([]);
	const verifyPermissions = async () => {
		const results = await Permissions.askAsync(Permissions.CAMERA, Permissions.MEDIA_LIBRARY);
		if (results.status !== 'granted') {
			Alert.alert('Permisos insuficientes', 'No pudimos acceder a la cámara', [{ text: 'Ok' }]);
			return false;
		}
		return true;
	}

	const takeImageHandler = async () => {
		const hasPersmissions = await verifyPermissions();
		if (!hasPersmissions) {
			return;
		}
		const image = await ImagePicker.launchCameraAsync({
			allowsEditing: true,
			base64: true,
			quality: 0.5
		});
		console.log(image.uri);
		if (imageList.length < 6) {
			setImageList([...imageList, { uri: image.uri, base64: image.base64 }]);
		}
	}

	const removeImageFromList = (index) => {
		console.log(index);
		const newArr = [...imageList];
		newArr.splice(index, 1);
		setImageList(newArr);
	}

	const createProductAndPhoto = async () => {
		const resProducto = await createProducto(data);
		const { nuevoProducto: { idProducto } } = resProducto;
		imageList.forEach(async (imagen) => {
			const resCludinary = await createFotoCloudinary(`data:image/jpeg;base64,${imagen.base64}`);
			await createFotoWithBase64(idProducto, resCludinary.url);			
		 });
		navigation.navigate("Articulo Enviado");
	}

	const { data } = route.params;

	return (
		<ScrollView>
			<KeyboardAvoidingView style={styles.container}>
				<View style={styles.formContainer}>
					<Text style={styles.messageTitle}>Tomemos unas foto</Text>
					<Text style={styles.subtitle}>Tomá fotos claras de tus articulos.</Text>
					{/* <View style={styles.imagePreview}>
						<Image style={styles.image} source={{ uri: pickedImage }} />
					</View> */}
				</View>
				<View style={styles.smallImagePreviewContainer}>
					{imageList.map((item, index) => {
						return (
							<View key={index} style={styles.smallImagePreview}>
								<Image style={styles.image} source={{ uri: item.uri }} />
								<Button
									onlyIcon
									icon="close"
									iconFamily="Font-Awesome"
									iconColor={theme.COLORS.WHITE}
									onPress={() => { removeImageFromList(index) }}
									color="red"
									iconSize={theme.SIZES.BASE * 0.8}
								/>
							</View>
						);
					})}
				</View>
				<View style={styles.buttonsContainer}>
					<Button
						onlyIcon
						icon="camera"
						iconFamily="Font-Awesome"
						iconColor={theme.COLORS.WHITE}
						iconSize={theme.SIZES.BASE * 1.5}
						onPress={takeImageHandler}
						color="#EEBB00"
					/>
					{imageList.length >= 1 && <Button
						style={styles.button}
						color={argonTheme.COLORS.BLUE}
						onPress={() => createProductAndPhoto()}
						textStyle={{ color: argonTheme.COLORS.WHITE }}
					>
						Enviar artículos
        		</Button>
					}
				</View>
			</KeyboardAvoidingView>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center'
	},
	header: {
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: '10%',
		paddingBottom: '5%',
		backgroundColor: '#EEBB00',
		width: '100%'
	},
	title: {
		fontSize: 20,
		color: 'black'
	},
	messageTitle: {
		fontSize: 25,
		fontWeight: 'bold',
		color: '#0084AE',
		textAlign: 'center',
		marginBottom: 20
	},
	formContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		paddingVertical: '4%',
		width: '80%'
	},
	subtitle: {
		fontSize: 15,
		color: 'black',
	},
	input: {
		borderWidth: 2
	},
	inputIcons: {
		marginRight: 12
	},
	radioButtonContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginVertical: '5%'
	},
	radioButton: {
		flexDirection: 'row',
		alignItems: 'center',
		marginHorizontal: 20
	},
	button: {
		borderRadius: 10,
		backgroundColor: '#3483FA',
		alignSelf: 'center'
	},
	error: {
		color: 'red',
		marginBottom: 10
	},
	smallImagePreviewContainer: {
		width: '100%',
		flexWrap: 'wrap',
		paddingHorizontal: '5%',
		flexDirection: 'row',
		justifyContent: 'center',
		marginTop: '2%'
	},
	smallImagePreview: {
		width: 100,
		height: 100,
		alignItems: 'center',
		margin: 5,
		marginBottom: 40,
		justifyContent: 'center',
	},
	image: {
		width: '100%',
		height: '100%'
	},
	buttonsContainer: {
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	}
});


export default SelectArticleImage;
