import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { RootStackParamList } from '../navigations/tipos'
import { styles } from '../theme/appStyle';

type Props = StackScreenProps<RootStackParamList, 'Home'>;

export const HomeScreen = ({navigation}: Props) => {
  return (
    <View>
        <Text style={styles.titulo}>Ejercicios TypeScript</Text>
        <View style={styles.vw2}>
            <TouchableOpacity style={styles.btns} 
            onPress={()=> navigation.navigate('Cuadrado')}>
                <Text>Área del cuadrado</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btns} 
            onPress={()=> navigation.navigate('SumaArreglo')}>
                <Text>Suma Arreglo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btns} 
            onPress={()=> navigation.navigate('DivisionArreglo')}>
                <Text>División Arreglo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btns} 
            onPress={()=> navigation.navigate('Promedio')}>
                <Text>Promedio</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btns} 
            onPress={()=> navigation.navigate('Acumulador')}>
                <Text>Acumulador</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}