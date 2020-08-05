import {useState} from 'react';

export const useForm = (initialValues) => {
   const [values, setValues] = useState(initialValues);

   return [values, (identifier, val) => {
      setValues({
         ...values,
         [identifier]: val
      });
   }];
};