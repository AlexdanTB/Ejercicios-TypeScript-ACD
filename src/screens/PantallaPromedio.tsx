import React from 'react'
import { Text, View } from 'react-native'

export const PantallaPromedio = () => {

  interface Alumno{
    nombre: string;
    edad: number;
    calificacion: number;
  }
  
  return (
    <View>
        <Text>Promedio</Text>
    </View>
  )
}
