import React, { useState } from "react";
import {
  StyleSheet,
  Dimensions
} from "react-native";
import { Block, Text, theme } from "galio-framework";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
import { ScrollView } from "react-native-gesture-handler";


const { width, height } = Dimensions.get("screen");


const Metricas = (props) => {
  const [dataMeses, setDataMeses] = useState([0, 45, 28, 80, 99, 43, 25, 50, 38, 90, 50, 10]);
  const [labelsSubasta, setLabelsSubasta] = useState(['Reloj','Notebook', 'S20', 'Anillo', 'Diamante']);
  const [dataPujas, setDataPujas] = useState([5,8,3,10,4]);
  
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
      <ScrollView>
        <Text style={{margin:20}} center color="#3483FA" size={22}>
            Subastas por mes
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
            Pujas por subasta
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
