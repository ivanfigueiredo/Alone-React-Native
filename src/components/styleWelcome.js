import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    
    container:{
            flex:1,
            //backgroundColor:"#1C1C1C",
            //backgroundColor:"#006400",
            //backgroundColor:"#4169e1",
            backgroundColor:"#1E90FF",
    },

    body:{
            marginTop:10,
            marginLeft:10,
            marginRight:10,
            height:"97%",
            alignItems:"center",
            borderWidth:4,
            borderRadius:10,
            borderColor:"#FFF",
            
    },

    texto:{
            paddingTop:10,
            textAlign:"center",
            fontSize:28,
            color:"#FFF",
            fontWeight:"bold",
    },

    image:{
        height:"90%",
        width:"90%",
        marginTop:30,
        alignItems:"center",
        alignContent:"center",
    },

    button:{
        marginTop:"10%",
        height:55,
        width:140,
        borderRadius:30,
        borderWidth:2,
        borderColor:"#FFF",
        justifyContent:"center",
        alignItems:"center",
        //backgroundColor:"#008000",
        //backgroundColor:"#3CB371",
        //backgroundColor:"#4169E1",
        backgroundColor:"#5C9E07",
    },

    efect:{
        marginTop:"5%",
        height:"75%",
        width:"82%",
        borderRadius:40,
        borderColor:"#FFF",
        borderWidth:2,
        //backgroundColor:"#00BFFF",
        //backgroundColor:"#228B22",
        //backgroundColor:"#1E90FF",
        backgroundColor:"#1E90FF",
    },
});

export default styles;