import {Text, View} from "react-native"
import {styles} from "./styles"
import { colors } from "@/styles/colors"

import { Item } from "@/components/item"
import { Caixa } from "@/components/caixa"


export default function Index(){
    return( 
        
        <View style={styles.container}>
            
            <View style={styles.header}>
                <Item titulo="Menu"/>
                <Item titulo="Logs"/>
                <Item titulo="Credits"/>
            </View>

            <View style={styles.main}>
                   
                    <View style={styles.blocoPrincipal}>
                        <View style={[styles.blocosp1, styles.comumBlocos]}>
                            <Caixa width={50} height={120}/>
                            <Caixa width={50} height={120}/>
                            <Caixa width={50} height={120}/>
                            

                        </View>
                        <View style={[styles.blocosp2, styles.comumBlocos]}>
                                   
                                <Caixa width={200} height={36}/>
                                <Caixa width={200} height={36}/>
                                <Caixa width={200} height={36}/>

                                     
                                    
                        </View>
                        <View style={[styles.blocosp3, styles.comumBlocos]}>
                                     <Caixa width={39} height={39}/>
                                     <Caixa width={39} height={39}/>
                                     <Caixa width={39} height={39}/>
                                     <Caixa width={39} height={39}/>
                                     <Caixa width={39} height={39}/>

                                     <Caixa width={39} height={39}/>
                                     <Caixa width={39} height={39}/>
                                     <Caixa width={39} height={39}/>
                                     <Caixa width={39} height={39}/>
                                     <Caixa width={39} height={39}/>

                                     <Caixa width={39} height={39}/>
                                     <Caixa width={39} height={39}/>
                                     <Caixa width={39} height={39}/>
                                     <Caixa width={39} height={39}/>
                                     <Caixa width={39} height={39}/>

                                     
                                    
                        </View>

                    </View>
            </View>

           

            <View style={styles.footer}>
                    <Text style={styles.texto}>Exercício 03-DDM</Text>
            </View>

        </View>

    )

} 
