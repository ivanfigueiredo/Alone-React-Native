import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import styles from '../components/styleCadastro';


const Screen = ({navigation}) => {

    const [ nome, setNome] = useState('');
    const [ password, setPassword] = useState('');

    const handleLimpar = () => {
        setNome('');
        setPassword('');
    }

  return (
    <View style={styles.container}>
      
      <View>
        <Text style={{fontSize: 20, color:"#FFFFFF", marginTop: 20, marginBottom: 20}}>Cadastro Usuário</Text>
        <TextInput
          placeholder="Digite seu usuário"
          style={styles.input} 
          value={nome}
          onChangeText={(t) => setNome(t)}
        />
      </View>
      <View style={{margin:8}}>
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          style={styles.input}
          value={password}
          onChangeText={(t) => setPassword(t)}
        />
      </View>  
      <View style={{flexDirection:"row"}}>
        <TouchableOpacity  style={styles.opacity}>
          <Text style={styles.text}>Enviar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.opacity} onPress={handleLimpar}>
          <Text style={styles.text}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Screen;
