import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


const UseCalbackScreen = props => {
  return (
    <View style={styles.container}>
      <Text>UseCalbackScreen</Text>
    </View>
  );
}

UseCalbackScreen.navigationOptions = navData => {
   return {
      headerTitle: 'UseCalback Screen'      
   };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default UseCalbackScreen;