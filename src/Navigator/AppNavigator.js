import {createSwitchNavigator,createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from '../Screens/Login';
import Signup from '../Screens/Signup';
import Home from '../Screens/Home';
import BooksList from '../Screens/BooksList';
import AuthLoadingScreen from '../Screens/AuthLoadingScreen';

// const AuthStack = createStackNavigator({ Signup: Signup });

// const MainNavigator = createStackNavigator({
//   Login: {screen: Login},
//   Signup: {screen: Signup},
//   Home:{screen:Home},
//   AuthLoadingScreen:{screen:AuthLoadingScreen},
// });

// const AppNavigator = createAppContainer(MainNavigator);

// export default AppNavigator;

// const AppStack = createStackNavigator({ Login: Login, Home: Home });
const AuthStack = createStackNavigator({ Login: Login, Home: Home, Signup: Signup, BooksList: BooksList });

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      // App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    }
  )
);