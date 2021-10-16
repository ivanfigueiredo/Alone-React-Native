import {StyleSheet} from 'react-native';
import { NavigationEvents } from 'react-navigation';

const styles = StyleSheet.create({
    
    container:{
        flex:1,
        backgroundColor:"#1E90FF",
        flexDirection:"row",
    },

    area:{
        marginTop:10,
        marginLeft:10,
        width:390,
        height:400,
        backgroundColor:"#FFF",
    },  

    input:{
        width:390,
        height:40,
        backgroundColor:"#FFFFFF",
        borderColor:"#FFF",
        borderWidth:1,
        borderTopColor:"#FFF",
        fontSize:15,
        fontWeight:"bold",
        color:"#000",
        padding:9,
        marginTop: 10,
        marginLeft: 10,
    },

    opacity:{
        
        backgroundColor:"#5C9E07",
        marginTop:20,
        marginLeft:10,
        alignItems:"center",
        justifyContent:"center",

    },

    text:{
        fontSize:15,
        color:"#FFF",
        fontWeight:"bold",
        marginTop:-3,
    },
});

  export default styles;