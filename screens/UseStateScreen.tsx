import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

import {useForm} from '../CustomHooks/useForm';

const expensiveOperation = () => {
   // lots of code
   // ...
   return 10;
}

const UseStateScreen = props => {
   // setNum(n => n + 1) je bolje od setNum(num + 1);
   
   // only run on first time
   const [num, setNum] = useState(() => expensiveOperation());

   const [values, handleChange] = useForm({email: '', password: ''});

  return (
    <View style={styles.container}>
      <TextInput 
         placeholder='email'
         value={values.email}
         onChangeText={handleChange.bind(this, 'email')}
      />
      <TextInput 
         placeholder='password'
         value={values.password}
         onChangeText={handleChange.bind(this, 'password')}
      />
      <Button 
         title='Result'
         onPress={() => {console.log(values)}}
      />
    </View>
  );
}

UseStateScreen.navigationOptions = navData => {
   return {
      headerTitle: 'UseState Screen'      
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

export default UseStateScreen;