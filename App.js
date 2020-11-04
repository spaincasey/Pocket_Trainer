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
      title: 'Pocket Trainer'
    }
  }
)

export default createAppContainer(navigator);


// CREATE TABLE users (user_id integer PRIMARY KEY AUTOINCREMENT, username varchar(25) NOT NULL, password varchar(30) NOT NULL);
// CREATE TABLE workouts (workout_id integer PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, description TEXT NOT NULL);
// INSERT INTO users (username, password) VALUES ('cspain2', 'test1234');


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
