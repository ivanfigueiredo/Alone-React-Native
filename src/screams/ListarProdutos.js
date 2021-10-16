import React, { useState, useEffect} from 'react';
import { Text, View, TextInput, FlatList, TouchableHighlight } from 'react-native';
import styles from '../components/styleListarProdutos';


const Screen = ({navigation}) => {

  const [movies, setMovies] = useState([]);
  const [buscar, setBuscar] = useState('');

  useEffect(()=>{
    const reqMovies = async () => {
      const req = await fetch("https://api.b7web.com.br/cinema/");
      const json = await req.json();

      if(json){
        setMovies(json);
      }
    }

    reqMovies();
  }, []);

  const handleClick = (t) => {
   
    let index = null;
    for(let i in movies){
      if(movies[i].titulo === t){
        index = i;
      }
      
    }
    navigation.navigate('Movie', {
      titulo: movies[index].titulo,
      avatar: movies[index].avatar,
      index: index,
    })
    setBuscar('');
  }

  const moviesFiltro = movies.filter((mov) => mov.titulo.toLowerCase().includes(buscar.toLocaleLowerCase()));


  return (
    <View style={styles.container}>
      
      <View>
        <TextInput
          placeholder="&#128269;  Consultar filmes "
          style={styles.input} 
          value={buscar}
          onChangeText={t=>setBuscar(t)}
        />
        
        <View style={styles.area}>
            <FlatList 
              data={moviesFiltro}
              renderItem={({item})=>(
                  <TouchableHighlight onPress={() => {handleClick(item.titulo)}} underlayColor="#CCCCCC" activeOpacity={0.8}>
                    <Text style={{fontSize: 20, marginLeft: 5, marginTop: 5, color:'#000'}}>{item.titulo}</Text>
                  </TouchableHighlight>
              )}
              keyExtractor={item => item.titulo}
            />
        </View>
        
      </View>
    </View>
  );
}

Screen.navigationOptions = () => {
  return {
      title:'Consultar Filmes'
  }
}

export default Screen;