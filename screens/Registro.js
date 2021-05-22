import React, { useState } from "react";
import {
  StyleSheet,
  Dimensions,
  View,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { RadioButton } from 'react-native-paper';
import { Input, Icon } from "../components";
import { Button, Text, theme } from "galio-framework";
import argonTheme from "../constants/Theme";
import { useForm, Controller } from "react-hook-form";



const { width } = Dimensions.get("screen");

const Registro = (props) => {

  const { control, handleSubmit, formState: { errors } } = useForm();
  const [gender, setGenero] = useState('M');
  const onSubmit = data => {
    console.log({ ...data, gender: gender });
    navigation.navigate("Seleccionar Imagen");
  };

  const { navigation } = props;


  return (
    <ScrollView>
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Solicitar cuenta</Text>
        </View>
        <View style={styles.formContainer}>

          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                error={!!errors.firstName}
                placeholder="Nombre"
              />
            )}
            name="firstName"
            rules={{ required: true }}
            defaultValue=""
          />
          {errors.firstName?.type === 'required' &&
            <Text style={styles.error}>
              Este campo es obligatorio.
            </Text>}

          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                error={!!errors.lastName}
                placeholder="Apellido"
              />
            )}
            name="lastName"
            rules={{ required: true }}
            defaultValue=""
          />
          {errors.lastName?.type === 'required' &&
            <Text style={styles.error}>
              Este campo es obligatorio.
            </Text>}

          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                error={!!errors.phone}
                keyboardType="decimal-pad"
                placeholder="Teléfono"
              />
            )}
            name="phone"
            rules={{ required: true }}
            defaultValue=""
          />
          {errors.phone?.type === 'required' &&
            <Text style={styles.error}>
              Este campo es obligatorio.
            </Text>}

          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                error={!!errors.birthDate}
                placeholder="Fecha de nacimiento"
              />
            )}
            name="birthDate"
            rules={{ required: true, pattern: /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/ }}
            defaultValue=""
          />
          {errors.birthDate?.type === 'required' &&
            <Text style={styles.error}>
              Este campo es obligatorio.
            </Text>}
          {errors.birthDate?.type === 'pattern' &&
            <Text style={styles.error}>
              La fecha debe ser en formato dd/mm/yyyy
            </Text>}

          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                error={!!errors.email}
                placeholder="Email"
              />
            )}
            name="email"
            rules={{ required: true, pattern: /\S+@\S+\.\S+/ }}
            defaultValue=""
          />
          {errors.email?.type === 'required' &&
            <Text style={styles.error}>
              Este campo es obligatorio.
            </Text>}
          {errors.email?.type === 'pattern' &&
            <Text style={styles.error}>
              Este email es inválido.
            </Text>}

          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                error={!!errors.dni}
                placeholder="DNI"
                keyboardType="decimal-pad"
              />
            )}
            name="dni"
            rules={{ required: true }}
            defaultValue=""
          />
          {errors.dni?.type === 'required' &&
            <Text style={styles.error}>
              Este campo es obligatorio.
            </Text>}

          <View style={styles.radioButtonContainer}>
            <View style={styles.radioButton}>
              <RadioButton
                value="M"
                color="#EEBB00"
                status={gender === 'M' ? 'checked' : 'unchecked'}
                onPress={() => setGenero('M')}
              />
              <Text>Masculino</Text>
            </View>
            <View style={styles.radioButton}>
              <RadioButton
                value="F"
                color="#EEBB00"
                status={gender === 'F' ? 'checked' : 'unchecked'}
                onPress={() => setGenero('F')}
              />
              <Text>Femenino</Text>
            </View>
          </View>
          <Button
            style={styles.button}
            color={argonTheme.COLORS.BLUE}
            onPress={(handleSubmit(onSubmit))}
            textStyle={{ color: argonTheme.COLORS.WHITE }}
          >
            Siguiente
          </Button>
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
  formContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: '8%',
    width: width * 0.7
  },
  subtitle: {
    fontSize: 20,
    color: '#3483FA',
    marginTop: '5%',
    fontWeight: 'bold'
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
    marginTop: '1%',
  },
  error: {
    color: 'red',
    marginBottom: 10
  }
});


export default Registro;
