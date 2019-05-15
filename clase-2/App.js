
import Login from "./screens/Login";
import Logout from "./screens/Logout";
import Dashboard from "./screens/Dashboard";

import theme from "./screens/theme";

import { createStackNavigator, createAppContainer } from 'react-navigation';

const MainNavigator = createStackNavigator({
  Home: {
    screen: Login, navigationOptions: () => ({
      title: `Iniciar Sesion`,
      headerStyle: {
        backgroundColor: '#0085ff',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        textAlign: "center",
        flex: 1
      },
    })
  },
  Profile: {
    screen: Logout, navigationOptions: () => ({
      title: `Registro`,
      headerStyle: {
        backgroundColor: '#0085ff',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        flex: 1
      },
    })
  },
  Dashboard: {
    screen: Dashboard, navigationOptions: () => ({
      title: `Home`,
      headerStyle: {
        backgroundColor: '#0085ff',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        flex: 1
      },
    })
  },
});

const App = createAppContainer(MainNavigator);

export default App;
