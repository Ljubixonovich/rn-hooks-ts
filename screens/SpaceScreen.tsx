import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView} from 'react-native';

import ListItem from '../components/ListItem';
import {useFetch} from '../CustomHooks/useFetch';


const SpaceScreen = props => {
   const [num, setNum] = useState('');

   const {data, loading} = useFetch(`http://numbersapi.com/${num}/trivia`);

  
  

  return (
     <ScrollView style={{flex: 1}}>
    <View style={styles.container}>
      <Text>UseEffectScreen</Text>
      <Text>Choce number</Text>
      <TextInput 
         style={{borderBottomWidth: 1, marginVertical: 10}}
         value={num}
         onChangeText={(e) => {setNum(e)}}
      />
        {/* {loading2 ? <Text>Loading...</Text> : <Text>{data2}</Text>} */}
      {loading ? <Text>Loading...</Text> : <Text>{data}</Text>}
     
    </View>
    </ScrollView>
  );
}

SpaceScreen.navigationOptions = navData => {
   return {
      headerTitle: 'Space'      
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

export default SpaceScreen;