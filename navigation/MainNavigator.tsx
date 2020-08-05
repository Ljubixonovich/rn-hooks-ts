import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Platform} from 'react-native';

import HomeScreen from '../screens/HomeScreen';
import UseCalbackScreen from '../screens/UseCalbackScreen';
import UseEffectScreen from '../screens/UseEffectScreen';
import UseStateScreen from '../screens/UseStateScreen';
import SpaceScreen from '../screens/SpaceScreen';

const MainNavigator = createStackNavigator({
   Home: HomeScreen,
   UseCalback: UseCalbackScreen,
   UseEffect: UseEffectScreen,
   UseState: UseStateScreen,
   Space: SpaceScreen
}, {
   defaultNavigationOptions: {
      headerStyle: {
         backgroundColor: Platform.OS === 'android' ? 'blue' : ''
      },
      headerTintColor: Platform.OS === 'android' ? 'white' : 'blue',
   }
});

export default createAppContainer(MainNavigator);