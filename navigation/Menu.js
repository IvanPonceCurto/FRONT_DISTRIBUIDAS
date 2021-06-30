import React, { useEffect ,useState} from "react";

import {
  ScrollView,
  StyleSheet,
} from "react-native";
import { Block, Text, theme } from "galio-framework";
import AsyncStorage from '@react-native-async-storage/async-storage';


import { DrawerItem as DrawerCustomItem } from '../components';


const RenderMenu = ( {navigation, state,estado,screens}) =>{


  if(estado==='1'){
          return(

                      
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
                          </Block>
                      </ScrollView>      
          

            
    );
  }
  else{
    return(
                      
                    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                            <DrawerCustomItem
                                        title={'Cerrar Sesión'}
                                        navigation={navigation}
                                        focused={state.index === 4 ? true : false}
                                      
                                      />
                        <Block flex style={{ marginTop: 24, marginVertical: 8, paddingHorizontal: 8 }}>
                              <Block style={{ borderColor: "rgba(0,0,0,0.2)", width: '100%', borderWidth: StyleSheet.hairlineWidth }}/>
                          
                            </Block>
                    </ScrollView>
         
    )
  }
}

//<RenderMenu navigation={navigation} state={state} estado={estado}/>

export default function CustomDrawerContent({ drawerPosition, navigation, profile, focused, state, ...rest }) {

  const[estado,setState] = useState("");
 

  async function checkMenu(){
    const estado1 = await AsyncStorage.getItem('state');
    setState(estado1)
    console.log(estado)
    
  } 
  const screens = [
    "Home", 
    "Perfil",
    "Subastar",
    "Medios de Pago",
    "Cerrar Sesión"
  ];
  
  useEffect(() =>{
    checkMenu()
  },[setState])

  return (
    
    <Block style={styles.container}
            forceInset={{ top: 'always', horizontal: 'never' }}>
                    <Block flex={0} style={styles.header}>
                      <Text color="#0084AE" style={styles.texto}>BetFast</Text>
                    </Block>
                    <Block flex style={{ paddingLeft: 8, paddingRight: 14 },styles.content}>
                    <RenderMenu navigation={navigation} state={state} estado={estado} screens={screens}/>      
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
