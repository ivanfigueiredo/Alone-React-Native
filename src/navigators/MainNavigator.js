import { createStackNavigator } from 'react-navigation-stack';
import Welcome from '../screams/Welcome';
import Login from '../screams/Login';
import Signup from '../screams/Cadastro';
import ListarProdutos from '../screams/ListarProdutos';
import Movie from '../screams/Movie';
import Trailer from '../screams/Trailer';


const MainNavigator = createStackNavigator({
    Welcome:{
        screen:Welcome
    },
    Login:{
        screen:Login
    },
    Signup:{
        screen:Signup
    },
    ListarProdutos:{
        screen:ListarProdutos
    },
    Movie:{
        screen:Movie
    },
    Trailer:{
        screen:Trailer
    },
}, {
    defaultNavigationOptions:{
        headerStyle:{
            height:50
        },
        headerTitleStyle:{
            fontSize:25,
            color:'#5C9E07'
        },
        headerTintColor:'#5C9E07'
        
    }
});

export default MainNavigator;