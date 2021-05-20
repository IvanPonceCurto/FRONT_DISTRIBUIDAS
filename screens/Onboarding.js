import React from "react";
import {
  StyleSheet,
  Dimensions,
  View,
  KeyboardAvoidingView
} from "react-native";
import { Input, Icon } from "../components";
import { Button, Text, theme } from "galio-framework";
import argonTheme from "../constants/Theme";

const { width } = Dimensions.get("screen");

const Onboarding = (props) => {

  const { navigation } = props;

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
          <Input
            borderless
            placeholder="Email"
            iconContent={
              <Icon
                size={16}
                color={argonTheme.COLORS.ICON}
                name="hat-3"
                family="ArgonExtra"
                style={styles.inputIcons}
              />
            }
          />
          <Input
            borderless
            placeholder="Clave"
            iconContent={
              <Icon
                size={16}
                color={argonTheme.COLORS.ICON}
                name="hat-3"
                family="ArgonExtra"
                style={styles.inputIcons}
              />
            }
          />
          <Button
            style={styles.button}
            color={argonTheme.COLORS.BLUE}
            onPress={() => navigation.navigate("App")}
            textStyle={{ color: argonTheme.COLORS.WHITE }}
          >
            Iniciar sesión
          </Button>
          <Text style={styles.subtitle}>Solicitar cuenta</Text>
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
    marginVertical: '30%',
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
});

export default Onboarding;
