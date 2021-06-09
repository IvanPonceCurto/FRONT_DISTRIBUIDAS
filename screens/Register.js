import React, { useState } from "react";
import {
  StyleSheet,
  Dimensions,
  View,
  ScrollView,
  Modal
} from "react-native";
import { Text } from "galio-framework";
import { Switch } from "../components";
import ArticleForm from "../components/ArticleForm";
import CollectionForm from "../components/CollectionForm";

const { width } = Dimensions.get("screen");


const Register = (props) => {
  const navigation = props.navigation;
  //coleccion
  const [switchValue, setSwitchValue] = useState(false);
  const form1 = <ArticleForm navigation={navigation} />
  const form2 = <CollectionForm navigation={navigation}/>

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text center color="#3483FA" size={22}>
          ¿Qué tipo de artículo te gustaría subastar?
        </Text>
        <View style={styles.switchContainer}>
          <Text color="#000000" size={18}>
            Colección de artículos
        </Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => setSwitchValue(switchValue === false ? true : false)}
            value={switchValue}
          />
        </View>
        {switchValue === false ? form1 : form2}
      </View>
    </ScrollView>
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
  text: {
    marginVertical: 20,
    fontSize: 20,
    fontWeight: 'bold'
  },
  text2: {
    margin: 5,
    fontSize: 16,
    textAlign: 'center'
  }
});

export default Register;
