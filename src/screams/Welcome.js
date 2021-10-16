import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from '../components/styleWelcome'



const Screen = ({navigation}) => {

    return(
        <View style={styles.container}>   
            <View style={styles.body}>
                    <View style={styles.efect}>
                        <Image 
                            style={styles.image}
                            source={require('../imagens/arte_Welcome.png')}
                            resizeMode="stretch"
                        />
                    </View>
                <TouchableOpacity style={styles.button} onPress={()=> {navigation.navigate('Login')}}>
                    <Text style={{fontSize:35, color:"#FFF", fontWeight:"bold"}}>Next</Text>
                </TouchableOpacity>
            </View>                
        </View>
    );
}
    
Screen.navigationOptions = () => {
    return {
        title:'Bem Vindo ao Alone Market'
    }
}

export default Screen;