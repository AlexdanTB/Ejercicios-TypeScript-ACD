import React from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/appStyle'

export const PantallaCuadrado = () => {
    return (
        <View style={styles.vw2}>
            <Text style={styles.titulo}>Calcular área</Text>
            <Text>Ingresa el lado del cuadrado</Text>
            <TextInput style={styles.input} placeholder='cm'></TextInput>
            <TouchableOpacity style={styles.btns}>
                <Text>Calcular</Text>
            </TouchableOpacity>
            <Text>El área del cuadrado es: </Text>
        </View>
    )
}
