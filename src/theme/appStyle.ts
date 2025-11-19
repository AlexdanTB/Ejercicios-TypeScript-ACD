import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    vw2:{
        gap:10,
        marginVertical:10,
        alignItems:"center"
    },
    titulo:{
        fontSize:18,
        fontWeight:"bold",
        textAlign:"center",
        margin:15
    },
    input:{
        backgroundColor: "#fdfdfdff",
        padding:5,
        width:"50%",
        borderColor:"#b581adff",
        borderWidth:0.5,
        margin:5
    },
    btns:{
        backgroundColor:"#f4d1c9ff",
        padding:10,
        paddingHorizontal:20,
        borderRadius:5
    },
    fli:{
        textAlign:"center",
        margin:5,
        padding: 5
    },
    btna:{
      backgroundColor: "#65388bff",
      width:60,
      height:60,
      borderRadius:50,
      justifyContent: "center"
    },
    btnLocationBL:{
      position: "absolute",
      bottom:25,
      left:25
    },
    btnLocationBR:{
      position: "absolute",
      bottom:25,
      right:25
    },
    btntxt:{
      color:"white",
      fontSize:25,
      textAlign:"center"
    }
})