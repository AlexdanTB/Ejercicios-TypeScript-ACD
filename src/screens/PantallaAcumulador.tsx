import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/appStyle'

export const PantallaAcumulador = () => {

    const [contador, setcontador] = useState(0)

  return (
    <View style={{flex:1}}>
        <Text style={{textAlign:"center", fontSize:30, fontWeight:"bold", margin:20}}>{contador}</Text>
          <TouchableOpacity style={[styles.btnLocationBL, styles.btna]}
        onPress={()=> setcontador(contador+5)}>
            <Text style={styles.btntxt}>+5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btnLocationBR, styles.btna]}
        onPress={()=> setcontador(contador-5)}>
            <Text style={styles.btntxt}>-5</Text>
        </TouchableOpacity> 
       
    </View>
  )
}
