import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/appStyle'

export const PantallaSumaArreglo = () => {
    const nums= [5, 6, 8, 2, 3, 11]
    const [suma, setsuma] = useState<number>()

    const sumar = ()=>{
        nums.reduce((a: number, na: number)=>{
            setsuma(a+na)
            return a + na;
        }, 0);
    }
  return (
    <View style={styles.vw2}>
        <Text style={styles.titulo}>Suma arreglo de números</Text>
        <Text>{nums.join(", ")}</Text>
        <TouchableOpacity onPress={sumar} style={styles.btns}>
            <Text>Sumar</Text>
        </TouchableOpacity>
        <Text>Resultado = {suma}</Text>

    </View>
  )
}