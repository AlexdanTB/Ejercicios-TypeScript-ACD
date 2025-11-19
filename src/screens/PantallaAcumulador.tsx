import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

export const PantallaAcumulador = () => {

    const [contador, setcontador] = useState(0)

  return (
    <View>
        <Text>{contador}</Text>
        <TouchableOpacity
        onPress={()=> setcontador(contador+5)}>
            <Text>+5</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=> setcontador(contador-5)}>
            <Text>-5</Text>
        </TouchableOpacity>
    </View>
  )
}
