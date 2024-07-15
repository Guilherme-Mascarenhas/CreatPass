import { View, Text, StyleSheet, Pressable } from "react-native";

export function PassItem ({ data, removeItem }){
    return(
        <Pressable onLongPress={removeItem} style={style.container}>
            <Text style={style.title}>{data}</Text>
        </Pressable>
    )
}

const style = StyleSheet.create({
    container:{
        backgroundColor: '#0e0e0e',
        padding: 14,
        width: '100%',
        marginBottom: 14,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title:{
        color: '#FFF'
    }

});