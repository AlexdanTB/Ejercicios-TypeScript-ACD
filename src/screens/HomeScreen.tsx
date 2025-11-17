import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

export const HomeScreen = () => {
  return (
    <View>
        <Text>Ejercicios TypeScript</Text>
        <View>
            <TouchableOpacity>
                <Text>Área del cuadrado</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>Suma Arreglo</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>División Arreglo</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>Promedio</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}
