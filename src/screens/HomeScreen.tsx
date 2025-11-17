import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { RootStackParamList } from '../navigations/tipos'

type Props = StackScreenProps<RootStackParamList, 'Home'>;

export const HomeScreen = ({navigation}: Props) => {
  return (
    <View>
        <Text>Ejercicios TypeScript</Text>
        <View>
            <TouchableOpacity onPress={()=> navigation.navigate('Cuadrado')}>
                <Text>Área del cuadrado</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> navigation.navigate('SumaArreglo')}>
                <Text>Suma Arreglo</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> navigation.navigate('DivisionArreglo')}>
                <Text>División Arreglo</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> navigation.navigate('Promedio')}>
                <Text>Promedio</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}
