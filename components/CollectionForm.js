import React, { useState } from "react";
import {
	StyleSheet,
	Dimensions,
	View,
	ScrollView,
	Modal
} from "react-native";
import { Text, theme } from "galio-framework";
import { Switch, Button, Icon, Input } from "../components";
import PickerSelect from '../components/PickerSelect';
import { useForm, Controller } from "react-hook-form";


const { width } = Dimensions.get("screen");


const CollectionForm = (props) => {
	const navigation = props.navigation;
	const [tipoMoneda, setPrecio] = useState('');
	const { control, handleSubmit, formState: { errors } } = useForm();

	const onSubmit = data => {
		navigation.navigate("Seleccionar Imagen Articulo", {
			tipo: 'Colleccion',
			data: data
		});
	};

	return (
		<View width={width * 0.8}>

			<Controller
				control={control}
				render={({ field: { onChange, onBlur, value } }) => (
					<Input
						onBlur={onBlur}
						onChangeText={value => onChange(value)}
						error={!!errors.tituloColeccion}
						placeholder="Título de la colección"
						iconContent={false}
						style={styles.input}
					/>
				)}
				name="tituloColeccion"
				rules={{ required: true }}
				defaultValue=""
			/>
			{errors.tituloColeccion?.type === 'required' &&
				<Text style={styles.error}>
					Este campo es obligatorio.
          </Text>}

			<Controller
				control={control}
				render={({ field: { onChange, onBlur, value } }) => (
					<Input
						onBlur={onBlur}
						onChangeText={value => onChange(value)}
						error={!!errors.descripcionColeccion}
						placeholder="Descripción de la colección"
						iconContent={false}
						style={styles.input}
					/>
				)}
				name="descripcionColeccion"
				rules={{ required: true }}
				defaultValue=""
			/>
			{errors.descripcionColeccion?.type === 'required' &&
				<Text style={styles.error}>
					Este campo es obligatorio.
          </Text>}

			<Controller
				control={control}
				render={({ field: { onChange, onBlur, value } }) => (
					<Input
						onBlur={onBlur}
						onChangeText={value => onChange(value)}
						placeholder="Observaciones"
						iconContent={false}
						style={styles.input}
					/>
				)}
				name="observaciones"
				defaultValue=""
			/>

			<Controller
				control={control}
				render={({ field: { onChange, onBlur, value } }) => (
					<Input
						onBlur={onBlur}
						onChangeText={value => onChange(value)}
						error={!!errors.cantidadPiezas}
						placeholder="Cantidad de piezas"
						iconContent={false}
						style={styles.input}
						keyboardType="decimal-pad"
					/>
				)}
				name="cantidadPiezas"
				rules={{ required: true }}
				defaultValue=""
			/>
			{errors.cantidadPiezas?.type === 'required' &&
				<Text style={styles.error}>
					Este campo es obligatorio.
          </Text>}

			<View style={{ flexDirection: 'row' }}>

				<Controller
					control={control}
					render={({ field: { onChange, onBlur, value } }) => (
						<Input
							onBlur={onBlur}
							onChangeText={value => onChange(value)}
							error={!!errors.precioColeccion}
							placeholder="Precio sugerido"
							iconContent={false}
							style={styles.input}
							keyboardType="decimal-pad"
						/>
					)}
					name="precioColeccion"
					rules={{ required: true }}
					defaultValue=""
				/>
				<PickerSelect
					list={['ARS', 'USD']}
					width={'50%'}
				></PickerSelect>
			</View>
			{errors.precioColeccion?.type === 'required' &&
				<Text style={styles.error}>
					Este campo es obligatorio.
          </Text>}
			<Button
				style={styles.btnVerProducto}
				onPress={(handleSubmit(onSubmit))}>
				<Text size={16} style={{ color: '#FFFFFF' }} bold >Enviar</Text>
			</Button>

		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: '25%',
		alignItems: 'center',
		justifyContent: 'center'
	},
	switchContainer: {
		flexDirection: 'row',
		marginTop: 20,
	},
	touchableOpacity: {
		backgroundColor: 'orange',
		paddingHorizontal: 50
	},
	text: {
		marginVertical: 20,
		fontSize: 20,
		fontWeight: 'bold'
	},
	title: {
		fontSize: 20,
		color: 'black'
	},
	input: {
		borderWidth: 2
	},
	button: {
		width: width - theme.SIZES.BASE * 12,
		height: theme.SIZES.BASE * 3,
		shadowRadius: 0,
		shadowOpacity: 0,
		marginTop: '1%',
	},
	error: {
		color: 'red',
		marginBottom: 10
	},
	text2: {
		margin: 5,
		fontSize: 16,
		textAlign: 'center'
	},
	btnVerProducto: {
		flex: 1,
		borderRadius: 10,
		marginTop: 30,
		backgroundColor: '#3483FA',
		alignSelf: 'center'
	}
});

export default CollectionForm;
