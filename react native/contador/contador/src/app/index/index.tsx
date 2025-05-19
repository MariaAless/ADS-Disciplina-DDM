import React, { useState } from 'react'; 
import { Button, StyleSheet, Text, View,TouchableOpacity } from 'react-native';


/* 
estudar sobre hooks e estados
*/
export default function ContadorSimples() {
  // Estado para armazenar o valor do contador
  const [contador, setContador] = useState(0); // declaração do estado
  //  useState(0)-->  função que inicializa o estado, começando com o valor que voce colocou
  const [mensagem, setMensagem] = useState("Contador Reiniciado!");

  // Funções para manipular o contador usando declaração de função normal
  function aumentar() {
    setContador(contador + 1); // valor que esta no contador mais um
    // toda vez que for mexer tenho que mexer no estado 
    setMensagem("Contador atualizado!")
  }

  function diminuir() {
    setContador(contador - 1);
    setMensagem("Contador atualizado!")

  }

  function resetar() {
    setContador(0); // coloca o contador igual a zero 
    setMensagem("Contador Reiniciado!")

  }

  return (
    <View style={styles.container}>
     


      <View style={styles.main}>
         {/* Título do App */}
          <Text style={styles.titulo}>Contador App</Text>

          {/* Valor do Contador */}
          <View style={styles.circularContador}>
            <Text style={styles.contador}>{contador}</Text>
          </View>


          <Text style={styles.text_mensagem}>{mensagem}</Text>


          {/* Botões de Controle */}
          <View style={styles.botoes}>
              <TouchableOpacity onPress={diminuir} style={[styles.botao,styles.botao_menos]} >  
                  <Text style={styles.text_botao}>-</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={resetar}  style={[styles.botao,styles.botao_resetar]} >  
                  <Text style={styles.text_botao}>Reset</Text>
              </TouchableOpacity> 

              <TouchableOpacity onPress={aumentar}  style={[styles.botao,styles.botao_mais]} >  
                  <Text style={styles.text_botao}>+</Text>
              </TouchableOpacity>    
            
          </View>


      </View>
     


      <View style={styles.footer}>
          <Text style={styles.text_footer}>Aprenda React Native com Expo!</Text>
      </View>

    </View>
   
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  main:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  footer:{
    paddingBottom:20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    
  },
  
  contador: {
    fontSize: 40,
    fontWeight: 'bold',
    
  },
  botoes: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-between',
    gap: 20,
    marginTop: 20,
    
  },
  botao:{
    borderRadius:35,
    width: 70,
    height: 70,
    justifyContent:'center',
    alignItems:'center',
  
   
  },
  botao_menos:{
    backgroundColor: "#ff6b6b",
  }, 
  botao_resetar:{
    backgroundColor: "#4ecdc4",
  }, 
  botao_mais:{
    backgroundColor: "#5ac9a5",
  }, 
  
  circularContador:{
    backgroundColor:"#ffffff",
    alignItems:'center',
    justifyContent:'center',
    width: 120,
    height: 120,
    borderRadius:60,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,


  },
  text_botao:{
    color:'white',
    fontSize: 20,
    fontWeight: 'bold',

  },
  text_mensagem:{
    paddingTop:20,
    paddingBottom:20,
    fontSize:17
  },

  text_footer:{
    color:'grey',
  }
  

  
});
