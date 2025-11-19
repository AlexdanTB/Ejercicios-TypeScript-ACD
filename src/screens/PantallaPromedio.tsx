import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appStyle';

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

    const promedios = alumnos.map((alumno, i)=>(
       <Text key={i}>{alumno.nombre}: {alumno.calificacion}</Text>
    ))
   

  return (
    <View style={styles.vw2}>
      <Text style={styles.titulo}>Promedio de calificaciones</Text>
      <Text>Alumnos:</Text>
      <View>{promedios}</View>
    </View>
      
  )
}
