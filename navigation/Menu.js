import React from "react";

import {
  ScrollView,
  StyleSheet,
} from "react-native";
import { Block, Text, theme } from "galio-framework";


import { DrawerItem as DrawerCustomItem } from '../components';

function CustomDrawerContent({ drawerPosition, navigation, profile, focused, state, ...rest }) {

  const screens = [
    "Home", 
    "Perfil",
    "Subasta",
    "PM"
  ];

  return (
    <Block
      style={styles.container}
      forceInset={{ top: 'always', horizontal: 'never' }}
    >
      <Block flex={0} style={styles.header}>
        <Text color="#0084AE" style={styles.texto}>BetFast</Text>
      </Block>
      <Block flex style={{ paddingLeft: 8, paddingRight: 14 },styles.content}>
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
          {screens.map((item, index) => {
              return (
                <DrawerCustomItem
                  title={item}
                  key={index}
                  navigation={navigation}
                  focused={state.index === index ? true : false}
                />
              );
            })}
            <Block flex style={{ marginTop: 24, marginVertical: 8, paddingHorizontal: 8 }}>
              <Block style={{ borderColor: "rgba(0,0,0,0.2)", width: '100%', borderWidth: StyleSheet.hairlineWidth }}/>
              <Text color="#8898AA" style={{ marginTop: 16, marginLeft: 8 }}>DOCUMENTATION</Text>
            </Block>
            <DrawerCustomItem title="Getting Started" navigation={navigation} />
        </ScrollView>
      </Block>
    </Block>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    minHeight:40,
    backgroundColor:'#EEBB00',
    paddingBottom: theme.SIZES.BASE * 2,
    shadowColor: theme.COLORS.BLACK,
    shadowRadius: 10,
    shadowOpacity: 0.75,
    elevation: 2
    
  },
  content:{
   
    paddingHorizontal: 10,
    paddingTop: theme.SIZES.BASE * 2,
    justifyContent: 'center'

  },
  texto:{
    fontSize:30,
    justifyContent:'center',
    marginTop:25,
    marginLeft:10
   
  }
  
  
});

export default CustomDrawerContent;
