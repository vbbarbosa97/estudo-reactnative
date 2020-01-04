import { createAppContainer  } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import User from './pages/User';

/* 
O createAppContaine sempre precisa vir por volta das rotas
O createStackNavigator é um dos tipos de rotas
*/

const Routes = createAppContainer(
    createStackNavigator(
    {
        Main,
        User,
    },
    {
        headerLayoutPreset: 'center',//configura ao centro o header
        headerBackTitleVisible: false, //vai fazer só a seta aparecer
        //configurações padrões em todasas telas
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#7159c1',
            },
            headerTintColor: '#fff',
        },
    }
    ),
);

export default Routes;
