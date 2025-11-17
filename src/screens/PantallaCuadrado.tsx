import React, { useState } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/appStyle'

export const PantallaCuadrado = () => {
    const [lado, setlado] = useState<number>(0)
    const [area, setarea] = useState<number>(0)
    const handleLado = (x: number): void=>{
        if(!x){
            setarea(0);
        }
        setlado(x);
    }
    const calcular = () =>{
        setarea(lado*lado);
    }
    return (
        <View style={styles.vw2}>
            <Text style={styles.titulo}>Calcular área</Text>
            <Text>Ingresa el lado del cuadrado</Text>
            <TextInput keyboardType="numeric" onChangeText={(value)=> handleLado(Number.parseInt(value))}
            style={styles.input} placeholder='cm'></TextInput>
            <TouchableOpacity style={styles.btns} onPress={calcular}>
                <Text>Calcular</Text>
            </TouchableOpacity>
            <Text>El área del cuadrado es: {area} cm2</Text>
        </View>
    )
}
