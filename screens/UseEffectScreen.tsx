import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

import {useFetch} from '../CustomHooks/useFetch';

const UseEffectScreen = props => {
   const [num, setNum] = useState('');

   const {data, loading} = useFetch(`http://numbersapi.com/${num}/trivia`);
   

  return (
    <View style={styles.container}>
      <Text>UseEffectScreen</Text>
      <Text>Choce number</Text>
      <TextInput 
         style={{borderBottomWidth: 1, marginVertical: 10}}
         value={num.toString()}
         onChangeText={(e) => {setNum(e)}}
         keyboardType='number-pad'
      />
      {loading ? <Text>Loading...</Text> : <Text>{data}</Text>}
     
    </View>
  );
}

UseEffectScreen.navigationOptions = navData => {
   return {
      headerTitle: 'UseEffect Screen'      
   };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

export default UseEffectScreen;