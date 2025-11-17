import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { styles } from '../theme/appStyle'

export const PantallaDivisionArreglo = () => {
    const arreglo = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

    return (
        <View style={styles.vw2}>
            <Text style={styles.titulo}>División Arreglo</Text>
            <Text>Arreglo de números:</Text>
            <Text>{arreglo.join(", ")}</Text>
            <View style={{ flexDirection: "row", width:"45%", gap: 20}}>
                <FlatList
                    data={arreglo}
                    renderItem={({ item }) =>
                        <Text style={[styles.fli, {backgroundColor:"#fff3e0ff"}]}>{item}</Text>
                    }>
                </FlatList>
                <FlatList
                    data={arreglo.map(num => num / 5)}
                    renderItem={({ item }) =>
                        <Text style={[styles.fli, {backgroundColor:"#f4ddfeff"}]}>{item}</Text>
                    }>
                </FlatList>

            </View>
        </View>
    )
}
