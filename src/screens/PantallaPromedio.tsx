import React from 'react'
import { Text, View } from 'react-native'

export const PantallaPromedio = () => {

  interface Alumno {
    nombre: string;
    edad: number;
    calificacion: number;
  }

  const alumnos: Alumno[] = [
    {nombre: "Viviana", edad: 19, calificacion: 10},
    {nombre: "Wendy", edad: 20, calificacion: 8},
    {nombre: "Gerson", edad: 18, calificacion: 9}
  ]

  return (
    <View>
      <Text>Promedio</Text>
    </View>
  )
}
