import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './src/screens/Login';
import Home from './src/screens/Home';

const navigator = createStackNavigator(
  {
    Login: Login,
    Home: Home
  },
  {
    initialRouteName: 'Login',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
)

export default createAppContainer(navigator);





// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
