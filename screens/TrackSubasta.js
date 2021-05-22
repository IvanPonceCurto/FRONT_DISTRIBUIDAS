import React, { useState } from "react";
import {
  StyleSheet,
  Dimensions,
  View
} from "react-native";
import { Block, Text, theme } from "galio-framework";
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

const { width, height } = Dimensions.get("screen");

const TrackSubasta = (props) => {

  const [tableHead, setTableHead] = useState(['ID', 'DESCRIPCION', 'VALOR']);
  const [tableData, setTableData] = useState([
                                              ['#2178', 'Puja', '250'],
                                              ['#2179', 'Puja', '300'],
                                              ['#2180', 'Puja', '320'],
                                              ['#2185', 'Puja', '360'],
                                              ['#2186', 'Puja ganadora', '360']
                                            ]);
  return (
    <Block style={styles.container}>
      <Text style={{marginTop:'7%'}} center color="#3483FA" size={22}>
        Subasta #456
      </Text>
      <Text center color="#3483FA" bold size={22}>
        SUBASTA DE RELOJ ROLEX
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
