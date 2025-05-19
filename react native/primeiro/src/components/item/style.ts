import { StyleSheet } from "react-native"
import { colors } from "@/styles/colors"

export const styles = StyleSheet.create({
    container :{
      
        backgroundColor: colors.black[100],
        height: 29,
        width:55,
        borderRadius:10,
        justifyContent:"center",
        alignItems: "center"
        
       
    },

    texto:{
       
        color: colors.white[100],
        fontSize: 16,
        fontWeight:"600",
    }

})