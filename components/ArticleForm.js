import React, { useState } from "react";
import {
	StyleSheet,
	Dimensions,
	View,
} from "react-native";
import { Text, theme } from "galio-framework";
import { Switch, Button, Icon, Input } from "../components";
import AsyncStorage from '@react-native-async-storage/async-storage';
import PickerSelect from '../components/PickerSelect';
import { useForm, Controller } from "react-hook-form";
import { LogBox } from 'react-native';
const { findDueñoById, createDueño } = require("../services/duenio.service");

const { width } = Dimensions.get("screen");
LogBox.ignoreLogs([
	'Non-serializable values were found in the navigation state',
]);

const ArticleForm = (props) => {
	const navigation = props.navigation;
	const [tipoMoneda, setPrecio] = useState('');
	const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');
	const { control, handleSubmit, formState: { errors } } = useForm();

	const checkClientIsDueñoOrCreate = async (idCliente) => {
		const response = await findDueñoById(idCliente);
		const { dueño } = response;
		if (!dueño) {
			const dueño = await createDueño(idCliente);
			const { objetoCreaod: { identificador } } = dueño;
			return parseInt(identificador)
		}
		return parseInt(idCliente);
	}

	const onSubmit = async (data) => {
		const idCliente = await AsyncStorage.getItem('idCliente');
		const idDuenio = await checkClientIsDueñoOrCreate(idCliente);
		const producto = {
			fecha: new Date(),
			disponible: true,
			descripcion: data.tituloArticulo,
			descripcionLarga: `${data.observaciones}. ${data.especificaciones}.`,
			id_duenio: idDuenio
		}
		navigation.navigate("Seleccionar Imagen Articulo", {
			tipo: 'Articulo',
			data: producto
		});
	};

	return (
		<View width={width * 0.8}>
			<PickerSelect
				list={['Auto', 'Obra de arte', 'Reloj', 'Smartphone', 'Otro']}
				onValueChange={value => setCategoriaSeleccionada(value)}
			></PickerSelect>

			<Controller
				control={control}
				render={({ field: { onChange, onBlur, value } }) => (
					<Input
						onBlur={onBlur}
						onChangeText={value => onChange(value)}
						error={!!errors.tituloArticulo}
						placeholder="Título del artículo"
						iconContent={false}
						style={styles.input}
					/>
				)}
				name="tituloArticulo"
				rules={{ required: true }}
				defaultValue=""
			/>
			{errors.tituloArticulo?.type === 'required' &&
				<Text style={styles.error}>
					Este campo es obligatorio.
        </Text>}

			<Controller
				control={control}
				render={({ field: { onChange, onBlur, value } }) => (
					<Input
						onBlur={onBlur}
						onChangeText={value => onChange(value)}
						error={!!errors.especificaciones}
						placeholder="Indique las especificaciones técnicas"
						iconContent={false}
						style={styles.input}
					/>
				)}
				name="especificaciones"
				rules={{ required: true }}
				defaultValue=""
			/>
			{errors.especificaciones?.type === 'required' &&
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

			<View style={{ flexDirection: 'row' }}>

				<Controller
					control={control}
					render={({ field: { onChange, onBlur, value } }) => (
						<Input
							onBlur={onBlur}
							onChangeText={value => onChange(value)}
							error={!!errors.precioArticulo}
							placeholder="Precio sugerido"
							iconContent={false}
							style={styles.input}
							keyboardType="decimal-pad"
						/>
					)}
					name="precioArticulo"
					rules={{ required: true }}
					defaultValue=""
				/>

				<PickerSelect
					list={['ARS', 'USD']}
					width={'50%'}
				></PickerSelect>
			</View>

			<Button
				style={styles.btnVerProducto}
				onPress={(handleSubmit(onSubmit))}>
				<Text size={16} style={{ color: '#FFFFFF' }} bold >Enviar</Text>
			</Button>

		</View>
	);
}

const styles = StyleSheet.create({
	input: {
		borderWidth: 2
	},
	error: {
		color: 'red',
		marginBottom: 10
	},
	btnVerProducto: {
		flex: 1,
		borderRadius: 10,
		marginTop: 30,
		backgroundColor: '#3483FA',
		alignSelf: 'center'
	}
});

export default ArticleForm;
