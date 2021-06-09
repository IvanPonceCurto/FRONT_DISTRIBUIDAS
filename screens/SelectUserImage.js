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



const { width } = Dimensions.get("screen");

const SelectUserImage = (props) => {

	const [pickedImage, setPickedImage] = useState()
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
		console.log(image);
		setPickedImage(image.uri)
	}

	const { navigation } = props;


	return (
		<ScrollView>
			<KeyboardAvoidingView style={styles.container}>
				<View style={styles.header}>
					<Text style={styles.title}>Solicitar cuenta</Text>
				</View>
				<View style={styles.formContainer}>
					<Text style={styles.messageTitle}>¿Tomamos una foto?</Text>
					<Text style={styles.subtitle}>La necesitamos para validar tu identidad.</Text>
					<View style={styles.imagePreview}>
						<Image style={styles.image} source={{uri: pickedImage}} />
					</View>
				</View>
				<Button
						onlyIcon
						icon="camera"
						iconFamily="Font-Awesome"
						iconColor={theme.COLORS.WHITE}
						iconSize={theme.SIZES.BASE * 1.5}
						onPress={takeImageHandler}
						color="#EEBB00"
					/>
				{pickedImage && <Button
					style={styles.button}
					color={argonTheme.COLORS.BLUE}
					onPress={() => navigation.navigate("Registro Finalizado")}
					textStyle={{ color: argonTheme.COLORS.WHITE }}
				>
					Solicitar
        </Button>}
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
		paddingVertical: '8%',
		width: '80%'
	},
	subtitle: {
		fontSize: 15,
		color: 'black',
		marginBottom: 10
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
		width: width - theme.SIZES.BASE * 12,
		height: theme.SIZES.BASE * 3,
		shadowRadius: 0,
		shadowOpacity: 0,
	},
	error: {
		color: 'red',
		marginBottom: 10
	},
	imagePreview: {
		width: '100%',
		height: 200,
		alignItems: 'center',
		justifyContent: 'center',
		borderColor: '#CCC',
		borderWidth: 1,
		backgroundColor: '#CCC'
	},
	image: {
		width: '100%',
		height: '100%'
	}
});


export default SelectUserImage;
