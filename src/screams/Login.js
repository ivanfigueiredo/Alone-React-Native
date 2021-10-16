import { parse } from '@babel/core';
import React, { useState } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import styles from '../components/stylesLogin';


const Screen = ({navigation}) => {

  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');

  const handleFazerLogin = async () => {
    if(usuario !== '' && password !== ''){
            
      const req = await fetch('https://api.b7web.com.br/loginsimples/', {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: usuario,
        password: password
      })
      });

      const json = await req.json();

      if(json.status == 'ok'){
        navigation.navigate('ListarProdutos');
      } else{
        alert("Email ou senha inválidos!");
      }

    }else{
      alert("Informe os dados do usuário!");
    }
    
  }

  return (
    <View style={styles.container}>
      <View>
        <Image 
          style={styles.image}
          source={require('../imagens/logo60-2.png')}
        />
      </View>  
      <View>
        <TextInput
          placeholder="Usuário"
          style={styles.input} 
          value={usuario}
          onChangeText={(t)=>setUsuario(t)}
        />
      </View>
      <View style={{margin:8}}>
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          style={styles.input}
          value={password}
          onChangeText={(t)=>setPassword(t)}
        />
      </View>  
      <View style={{flexDirection:"row"}}>
      
        <TouchableOpacity style={styles.opacity} onPress={handleFazerLogin}>
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

Screen.navigationOptions = () => {
  return {
      title:'Login'
  }
}

export default Screen;