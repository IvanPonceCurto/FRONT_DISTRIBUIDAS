import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Dimensions,
  View
} from "react-native";
import { Block, Text} from "galio-framework";
import { Table, Row, Rows} from 'react-native-table-component';
import AsyncStorage from "@react-native-async-storage/async-storage";


const { width, height } = Dimensions.get("screen");
const { getRegistrosByClienteBySubasta } = require("../services/registroDeSubasta.service");
const { getProductoById } = require("../services/producto.service");

const TrackSubasta = (props) => {
  const [nombreProducto, setNombreProducto] = useState();
  const [nroSubasta, setNroSubasta] = useState();
  const [tableHead, setTableHead] = useState(['ID', 'DESCRIPCION', 'VALOR']);
  const [tableData, setTableData] = useState([
                                              [],
                                              []
                                            ]);

  useEffect(() => {
    track();
  }, []);  

  const track = async () => {
    try {
      var lista = [];
      const idCliente = await AsyncStorage.getItem('idCliente');
      const resProducto = await getProductoById(1); //aca va el idProducto
      const res = await getRegistrosByClienteBySubasta(7,idCliente,1); //aca va el idSubasta, el idCliente y el idProducto
      const dataRes = await res.json();
      dataRes.listaPujasDeSubasta.forEach(item => {
        lista.push([item.idRegistro,"Puja",item.importe]);
      });
      //console.log(resProducto);
      setNombreProducto(resProducto.producto.descripcion.toUpperCase());
      setNroSubasta(7);
      setTableData(lista);
    } catch (error) {
        console.log(error);
    }
  }

  
  return (
    <Block style={styles.container}>
      <Text style={{marginTop:'7%'}} center color="#3483FA" size={22}>
        Subasta #{nroSubasta}
      </Text>
      <Text center color="#3483FA" bold size={22}>
        {nombreProducto}
      </Text>
      <View style={styles.container2}>
        <Table borderStyle={{borderWidth: 2, borderColor: 'transparent'}}>
          <Row data={tableHead} style={styles.head} textStyle={styles.textHead}/>
          <Rows data={tableData} textStyle={styles.text} />
        </Table>
      </View>
      </Block>
     
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
    //justifyContent: 'center',
    
    backgroundColor:'#fff'
  },
  container2: {
    flex: 1, 
    padding: 16, 
    paddingTop: 30, 
    backgroundColor: '#fff'
  },
  head: { 
    height: 40, 
    backgroundColor: '#EEBB00',
    borderRadius:10,
  },
  text: { 
    margin: 6,
    textAlign:'center',
    fontSize: 19,
    color: '#3483FA',
    
  },
  textHead: { 
    margin: 6 ,
    textAlign:'center',
    fontSize: 17,
    color:'#000000'
  }
});

export default TrackSubasta;
