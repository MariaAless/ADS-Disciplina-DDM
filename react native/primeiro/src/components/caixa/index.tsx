import { View } from "react-native";
import { colors } from "@/styles/colors";
import { styles } from "./style";



export function Caixa({width = 100, height = 100}){
    return(
        <View  style={[ styles.container, 
            { width: width, height: height},
          ]}></View>
    )
}