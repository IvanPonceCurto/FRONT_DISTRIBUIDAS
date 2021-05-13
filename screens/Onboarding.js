import React from "react";
import {
  StyleSheet,
  Dimensions,
  View,
  KeyboardAvoidingView,
  TouchableOpacity
} from "react-native";
import { Input, Icon } from "../components";
import { Button, Text, theme } from "galio-framework";
import argonTheme from "../constants/Theme";
import { useForm, Controller } from "react-hook-form";

const { width } = Dimensions.get("screen");

const Onboarding = (props) => {

  const { navigation } = props;
  const { control, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data);
    navigation.navigate("App");
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior="padding"
        enabled
      >
        <View style={styles.logoContainer}>
          <Text style={styles.title}>BetFast</Text>
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
                error={!!errors.email}
                placeholder="Email"
                iconContent={
                  <Icon
                    size={16}
                    color={argonTheme.COLORS.ICON}
                    name="ic_mail_24px"
                    family="ArgonExtra"
                    style={styles.inputIcons}
                  />
                }
              />
            )}
            name="email"
            rules={{ required: true }}
            defaultValue=""
          />

          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                error={!!errors.password}
                secureTextEntry={true}
                placeholder="Clave"
                iconContent={
                  <Icon
                    size={16}
                    color={argonTheme.COLORS.ICON}
                    name="padlock-unlocked"
                    family="ArgonExtra"
                    style={styles.inputIcons}
                  />
                }
              />
            )}
            name="password"
            rules={{ required: true }}
            defaultValue=""
          />

          <Button
            style={styles.button}
            color={argonTheme.COLORS.BLUE}
            onPress={handleSubmit(onSubmit)}
            textStyle={{ color: argonTheme.COLORS.WHITE }}
          >
            Iniciar sesión
          </Button>
          <TouchableOpacity onPress={() => navigation.navigate("Registro")}>
            <Text style={styles.subtitle}>Solicitar cuenta</Text>
          </TouchableOpacity>
          <Text style={styles.subtitle}>Ingresar como invitado</Text>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EEBB00',
    flex: 1,
    alignItems: 'center'
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: '25%',
  },
  title: {
    fontSize: 40,
    color: '#0084AE'
  },
  formContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: '10%',
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
  button: {
    width: width - theme.SIZES.BASE * 12,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0,
    marginTop: '10%',
  },
  error: {
    color: 'red',
    marginBottom: 10
  }
});

export default Onboarding;
