import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { RootStackParamList } from '../navigations/tipos'

type Props = StackScreenProps<RootStackParamList, 'Home'>;

export const HomeScreen = ({navigation}: Props) => {
  return (
    <View>
        <Text>Ejercicios TypeScript</Text>
        <View style={styles.view1}>
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
const styles = StyleSheet.create({
    view1:{
        gap:20,
        marginVertical:10,
        alignItems:"center"
    },
    btns:{
        backgroundColor:"#f4d1c9ff",
        padding:10,
        paddingHorizontal:20,
        borderRadius:5
    }
})
