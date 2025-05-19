import { StyleSheet } from "react-native"
import { colors } from "@/styles/colors"

export const styles = StyleSheet.create({
    
    
    container: {
        flex: 1,  // Ocupa toda a tela    
        
    },
    header : {
        padding: 20,
        height:60,
        width:"100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems:"center",
        backgroundColor: colors.gray[100]
    },

    main: {
        flex: 1, //preenche o espaço restante
        backgroundColor:colors.purple[100],
        justifyContent:"center",
        alignItems:"center",
        padding:20,
            
    },
    blocoPrincipal:{
        flex:1,
        flexDirection:"column",
        justifyContent:"space-around",
        alignItems:"center",
        borderRadius:10,
        backgroundColor:colors.purple[200],
        width:"90%",
        paddingTop:10,
        paddingBottom:10,

    },
    comumBlocos :{
        
        backgroundColor:colors.purple[300],
        height:"25%",
        width:"75%",
        borderRadius: 2, 
        overflow: 'hidden', // Para cortar qualquer conteúdo fora do limite
    },

    blocosp1: {
        flexDirection: 'row', 
        justifyContent: 'space-around',
        alignItems: 'center',
    },

    blocosp2: {
    flexDirection: 'column', 
    justifyContent: 'space-around',
    alignItems: 'center',

    },
    blocosp3: {
    flexDirection: 'row', // Alinhamento horizontal
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap', // Permite que os elementos "quebrem" para a próxima linha
    gap: 5,
    paddingTop:12,
    paddingRight:2,
    paddingLeft:2,

    },

    footer:{
        height: 60,
        backgroundColor:colors.purple[400],
        justifyContent: 'center',
        alignItems: 'center'

    },

    texto:{
        color: colors.white[100],
        fontSize:20,
    }

    
})