import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './redux/reducers';
import firebase from 'firebase';

import Login from './screens/Login';
import Home from './screens/Home';
import ColorScreen from './screens/ColorScreen';
import HomeScreen from './screens/HomeScreen';
import ColorAdjuster from './screens/ColorAdjuster';
import TextScreen from './screens/TextScreen';
import FlexBoxScreen from './screens/FlexBoxScreen';

const navigator = createStackNavigator(
  {
    Login: Login,
    Home: Home,
    HomeScreen: HomeScreen,
    ColorScreen: ColorScreen,
    ColorAdjuster: ColorAdjuster,
    TextScreen: TextScreen,
    FlexBoxScreen: FlexBoxScreen
  },
  {
    initialRouteName: 'HomeScreen',
    defaultNavigationOptions: {
      title: 'PT'
    }
  }
)

export default createAppContainer(navigator);

// export default () => {
//   return (
//     <Provider store={createStore(reducers)}>
//       <App />
//     </Provider>
//   )
// }

// export default createAppContainer(navigator);


// class App extends Component {
//   componentWillMount() {
    // firebase.initializeApp({
    //   apiKey: "AIzaSyBXETQAG6ypZnAhyjNRSlwIQzZvBIJFA9w",
    //   authDomain: "pockettrainer-a01ce.firebaseapp.com",
    //   databaseURL: "https://pockettrainer-a01ce.firebaseio.com",
    //   projectId: "pockettrainer-a01ce",
    //   storageBucket: "pockettrainer-a01ce.appspot.com",
    //   messagingSenderId: "370280614708",
    //   appId: "1:370280614708:web:2bd63fa82c41afb6e2b361",
    //   measurementId: "G-HZHJ8X18F1"
    // });
  // }

//   render() {
//     return (
//       <Provider store={createStore(reducers)}>
//         <View>
//           <Header />
//         </View>
//       </Provider>
//     )
//   };
// }

// export default App;


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
