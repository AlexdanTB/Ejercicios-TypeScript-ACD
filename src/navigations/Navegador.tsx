import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { PantallaCuadrado } from '../screens/PantallaCuadrado';
import { PantallaDivisionArreglo } from '../screens/PantallaDivisionArreglo';
import { PantallaPromedio } from '../screens/PantallaPromedio';
import { NavigationContainer } from '@react-navigation/native';
import { PantallaSumaArreglo } from '../screens/PantallaSumaArreglo';
import { RootStackParamList } from './tipos';

const Stack = createStackNavigator<RootStackParamList>();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Cuadrado" component={PantallaCuadrado} />
      <Stack.Screen name='SumaArreglo' component={PantallaSumaArreglo}/>
      <Stack.Screen name="DivisionArreglo" component={PantallaDivisionArreglo} />
      <Stack.Screen name="Promedio" component={PantallaPromedio} />
    </Stack.Navigator>
  );
}

export default function Navegador() {
    return(
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    )
}