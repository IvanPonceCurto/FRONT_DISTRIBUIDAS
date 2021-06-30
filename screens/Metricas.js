import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Dimensions,
  View
} from "react-native";
import { Block, Text} from "galio-framework";
import {
  LineChart,
  BarChart,
} from "react-native-chart-kit";
import { ScrollView } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ActivityIndicator } from 'react-native';

const { getRegistrosByClienteBySubasta } = require("../services/registroDeSubasta.service");
const { getProductoById } = require("../services/producto.service");

const { width, height } = Dimensions.get("screen");


const Metricas = ({route}) => {
  const [showLoader, setShowLoader] = useState(true);
  const [dataMeses, setDataMeses] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [labelsSubasta, setLabelsSubasta] = useState([]);
  const [dataPujas, setDataPujas] = useState([]);
  const info = route.params.info;

  useEffect(() => {
    obtenerDatosBarra();
  }, [])

  const obtenerDatosBarra = async () => { 
    try {
      var listaPujas = [];
      var listaProductos = [];
      const idCliente = await AsyncStorage.getItem('idCliente');
      
      info.forEach(async item => {
        const res = getRegistrosByClienteBySubasta(item.idSubasta,idCliente,item.idProducto);
        listaPujas.push(res);
        
      });
      const pujas = await Promise.all(listaPujas);
      info.forEach(async item => {
        const res = getProductoById(item.idProducto);
        listaProductos.push(res);
        
      });
      const nombresProductos = await Promise.all(listaProductos);
      const auxNombres = [];
      nombresProductos.forEach( item => {
        auxNombres.push(item.producto.descripcion);
      });
      const auxPujas = [];
      const pujasList = [];
      pujas.forEach ( item => {
        auxPujas.push(item.listaPujasDeSubasta.length);
        pujasList.push(item.listaPujasDeSubasta);
      });
      const auxProductos = [];
      var flag = false;
      pujasList.forEach ( i => {
        i.forEach ( j => {
          auxProductos.forEach ( k => {
            if(j.producto == k.idProducto){
              flag = true;
            }
          });
          if (flag == false){
            auxProductos.push({
              idProducto: j.producto,
              creado: j.createdAt,
              subasta: j.subasta

            });
          }
          flag = false;
        });
      });
      var fechas = [0,0,0,0,0,0,0,0,0,0,0,0];
      auxProductos.forEach ( item => {
        var date = item.creado.toString();
        var dateCompleto = date[5]+date[6];
        if(dateCompleto == "01")
          fechas[0]=fechas[0]+1
        else if(dateCompleto == "02")
          fechas[1]=fechas[1]+1
        else if(dateCompleto == "03")
          fechas[2]=fechas[2]+1
        else if(dateCompleto == "04")
          fechas[3]=fechas[3]+1
        else if(dateCompleto == "05")
          fechas[4]=fechas[4]+1
        else if(dateCompleto == "06")
          fechas[5]=fechas[5]+1
        else if(dateCompleto == "07")
          fechas[6]=fechas[6]+1
        else if(dateCompleto == "08")
          fechas[7]=fechas[7]+1
        else if(dateCompleto == "09")
          fechas[8]=fechas[8]+1
        else if(dateCompleto == "10")
          fechas[9]=fechas[9]+1
        else if(dateCompleto == "11")
          fechas[10]=fechas[10]+1
        else if(dateCompleto == "12")
          fechas[11]=fechas[11]+1
      });
      setShowLoader(false);
      setDataMeses(fechas);
      setDataPujas(auxPujas);
      setLabelsSubasta(auxNombres);
      
    } catch (error) {
      console.log(error);
    }

}
  
  

  const data = {
    labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio","Julio","Agosto", "Septiembre","Octubre","Noviembre","Diciembre"],
    datasets: [
      {
        data: dataMeses,
        color: (opacity = 1) => `rgba(238, 187, 0, ${opacity})`, // optional
        strokeWidth: 2 // optional
      }
    ],
    //legend: ["Cantidad de subastas por mes"] // optional
  };
  const dataBarra = {
    labels: labelsSubasta,
    datasets: [
      {
        data: dataPujas,
        strokeWidth: 2 // optional
      }
    ],
    //legend: ["Cantidad de subastas por mes"] // optional
  };
  
  const chartConfig = {
    
    backgroundGradientFrom: "#FFFFFF",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#FFFFFF",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) =>`rgba(0,0,0, ${opacity})`,
    
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: true, // optional
    fillShadowGradient: 'blue',
    fillShadowGradientOpacity: 0.2,
    decimalPlaces: 0
  };
  const chartConfig2 = {
    backgroundGradientFrom: "#FFFFFF",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#FFFFFF",
    backgroundGradientToOpacity: 0,
    color: (opacity = 0) => `rgba(0,0,0, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.8,
    useShadowColorFromDataset: false, // optional
    fillShadowGradient: '#EEBB00',
    fillShadowGradientOpacity: 1,
    decimalPlaces: 0
  };
  //https://stackoverflow.com/questions/64035350/solid-bars-in-bar-chart-with-react-native-chart-kit ACA HAY ESTILOS
  return (
    
      
    <Block flex style={{justifyContent:'center', alignItems:'center', backgroundColor:'white'}}>
    {showLoader ?
        <View >
          <ActivityIndicator size="large" color="#3483FA" />
        </View>
        :
      <ScrollView>
        <Text style={{margin:20}} center color="#3483FA" size={22}>
            Pujas de productos por mes
        </Text>
        <LineChart
          verticalLabelRotation={90}
          style={styles.graphStyle}
          fromZero={true}
          data={data}
          width={width}
          height={400}
          chartConfig={chartConfig}
        />
        <Text style={{margin:20}} center color="#3483FA" size={22}>
            Pujas por producto por subasta
        </Text>
        <BarChart
          style={styles.graphStyle}
          fromZero={true}
          showValuesOnTopOfBars={true}
          data={dataBarra}
          width={width}
          height={350}
          chartConfig={chartConfig2}
          verticalLabelRotation={45}
        />
      </ScrollView>
    }
    </Block>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '25%'
  },
  graphStyle: {
    flex: 1,
    paddingRight: 30,
  }
});

export default Metricas;
