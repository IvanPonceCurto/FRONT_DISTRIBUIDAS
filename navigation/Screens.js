import React from "react";
import { Dimensions } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// screens
import Home from "../screens/Home";
import Onboarding from "../screens/Onboarding";
import Pro from "../screens/Pro";
import Profile from "../screens/Profile";
import Register from "../screens/Register";
import Registro from "../screens/Registro";
import Producto from "../screens/Producto";
import Pujar from "../screens/Pujar";
import Metricas from "../screens/Metricas";
import TrackSubasta from "../screens/TrackSubasta";
import RegistroFinalizado from "../screens/RegistroFinalizado";
import SelectUserImage from "../screens/SelectUserImage";
import InputPM from "../components/InputPM";
import PaymentsMethod from "../components/paymentsMethod"
import CargaCorrecta from "../components/CargaCorrecta";
import Articulos from "../screens/Articulos";
import SelectArticleImage from "../screens/SelectArticleImage";
import ArticuloEnviado from "../screens/ArticuloEnviado";
// drawer
import CustomDrawerContent from "./Menu";

// header for screens
import { Header } from "../components";


const { width } = Dimensions.get("screen");

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();



function SubastarStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Perfil"
        component={Register}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              transparent

              title="Subastar"
              subasta={true}
              bgColor={"#EEBB00"}
              navigation={navigation}
              scene={scene}
            //back
            />
          ),
          cardStyle: { backgroundColor: "#FFFFFF" },
          headerTransparent: true
        }}
      />
      <Stack.Screen
        name="Articulos"
        component={Articulos}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Mis Articulos"
              bgColor={"#EEBB00"}
              navigation={navigation}
              scene={scene}
              back
            />
          )
        }}
      />
      <Stack.Screen
        name="Seleccionar Imagen Articulo"
        component={SelectArticleImage}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title=""
              bgColor={"#EEBB00"}
              navigation={navigation}
              scene={scene}
              back
            />
          )
        }}
      />
      <Stack.Screen
        name="Articulo Enviado"
        component={ArticuloEnviado}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title=""
              bgColor={"#EEBB00"}
              navigation={navigation}
              scene={scene}
              back
            />
          )
        }}
      />

    </Stack.Navigator>
  );
}



function ProfileStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Perfil"
        component={Profile}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              transparent
              title="Subastar"
              perfil={true}
              bgColor={"#EEBB00"}
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#FFFFFF" },
          headerTransparent: true
        }}
      />
      <Stack.Screen
        name="Metricas"
        component={Metricas}
        options={{
          header: ({ navigation, scene }) => (
            <Header

              back
              title="Metricas"

              bgColor={"#EEBB00"}
              navigation={navigation}
              scene={scene}
            />
          )

        }}
      />
      <Stack.Screen
        name="TrackSubasta"
        component={TrackSubasta}
        options={{
          header: ({ navigation, scene }) => (
            <Header

              back
              title="Track Subasta"

              bgColor={"#EEBB00"}
              navigation={navigation}
              scene={scene}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

function HomeStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Home"
              home={true}
              search
              bgColor={'#EEBB00'}
              options
              navigation={navigation}
              scene={scene}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />
      <Stack.Screen
        name="Catalogo"
        component={Pro}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Catalogo"
              back
              home={true}
              bgColor={'#EEBB00'}
              navigation={navigation}
              scene={scene}
            />
          ),

          headerTransparent: true,
          cardStyle: { backgroundColor: '#3483FA' }
        }}
      />
      <Stack.Screen
        name="Producto"
        component={Producto}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title=""
              back
              iconColor={'#FFFFFF'}
              transparent
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: true,
          cardStyle: { backgroundColor: '#EEBB00' }
        }}
      />
      <Stack.Screen
        name="Pujar"
        component={Pujar}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title=""
              back
              iconColor={'#FFFFFF'}
              transparent
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: true,
          cardStyle: { backgroundColor: '#EEBB00' }
        }}
      />

    </Stack.Navigator>
  );
}

export default function OnboardingStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="none">
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        option={{
          headerTransparent: true
        }}
      />
      <Stack.Screen name="App" component={AppStack} />
      <Stack.Screen
        name="Registro"
        component={Registro}
      />
      <Stack.Screen
        name="Seleccionar Imagen"
        component={SelectUserImage}
      />
      <Stack.Screen
        name="Registro Finalizado"
        component={RegistroFinalizado}
      />
    </Stack.Navigator>
  );
}

const cardsList = [
  {
    cardNumber: "4517650612345678"
  },
  {
    cardNumber: "4517650612345698"
  }, {
    cardNumber: "4517610612345699"
  }
];

function MediosDePagoStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="PM"
        component={props => { return <PaymentsMethod {...props} lista={cardsList} /> }
        }
        options={{
          header: ({ navigation, scene }) => (
            <Header
              back
              title="Medios de Pago"
              navigation={navigation}
              scene={scene}
              bgColor={"#EEBB00"}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />
      <Stack.Screen
        name="InputPM"
        component={InputPM}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              back
              title="Ingresar medio de pago"
              navigation={navigation}
              scene={scene}
              bgColor={"#EEBB00"}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />
      <Stack.Screen
        name="CargaCorrecta"
        component={CargaCorrecta}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              back
              title="Carga correcta de medio de pago"
              navigation={navigation}
              scene={scene}
              bgColor={"#EEBB00"}
            />
          ),
          cardStyle: { backgroundColor: "#F8F9FE" }
        }}
      />

    </Stack.Navigator>
  )
}

function AppStack(props) {
  return (
    <Drawer.Navigator
      style={{ flex: 1 }}
      drawerContent={props => <CustomDrawerContent {...props} />}
      drawerStyle={{
        backgroundColor: "white",
        width: width * 0.8
      }}
      drawerContentOptions={{
        activeTintcolor: "white",
        inactiveTintColor: "#000",
        activeBackgroundColor: "transparent",
        itemStyle: {
          width: width * 0.75,
          backgroundColor: "transparent",
          paddingVertical: 16,
          paddingHorizonal: 12,
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          overflow: "hidden"
        },
        labelStyle: {
          fontSize: 18,
          marginLeft: 12,
          fontWeight: "normal"
        }
      }}
      initialRouteName="Home"
    >
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="Perfil" component={ProfileStack} />
      <Drawer.Screen name="Subastar" component={SubastarStack} />
      <Drawer.Screen name="PM" component={MediosDePagoStack} />
    </Drawer.Navigator>
  );
}

