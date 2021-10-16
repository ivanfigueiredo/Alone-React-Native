import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    
    container:{
        flex:1,
        //backgroundColor:"#000000",
        //backgroundColor:"#006400",
        backgroundColor:"#1E90FF",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        alignContent:"center",
        flexWrap:"wrap",
    },

    input:{
        width:370,
        height:35,
        backgroundColor:"#FFFFFF",
        borderRadius:10,
        borderColor:"#FFF",
        borderWidth:1,
        borderTopColor:"#FFF",
        fontSize:15,
        fontWeight:"bold",
        color:"#000",
        padding:9,
    },

    image:{
        height:145,
        width:145,
        margin:18,
        borderWidth:1,
        //borderColor:"#FF0000",
        borderColor:"#FFF",
        borderRadius:120,
        //backgroundColor:"#000",
    },

    opacity:{
        //backgroundColor:"#008000",
        //backgroundColor:"#4169E1",
        backgroundColor:"#5C9E07",
        height:40,
        width:372,
        marginTop:1,
        margin:35,
        marginBottom:1,
        padding:9,
        borderWidth:1,
        borderRadius:10,
        borderColor:"#FFF",
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