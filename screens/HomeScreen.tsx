import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


const HomeScreen = props => {
  return (
    <View style={styles.container}>
      <Button
         title='Space'
         onPress={() => props.navigation.navigate('Space')}
      />
      <Button
         title='Use State'
         onPress={() => props.navigation.navigate('UseState')}
      />
      <Button
         title='Use Effect'
         onPress={() => props.navigation.navigate('UseEffect')}
      />
      <Button
         title='Use Calback'
         onPress={() => props.navigation.navigate('UseCalback')}
      />
    </View>
  );
}

HomeScreen.navigationOptions = navData => {
   return {
      headerTitle: 'Hooks'      
   };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});

export default HomeScreen;