import { useState, useEffect } from 'react';

export const useFetch = (url) => {
   const [state, setState] = useState({ data: null, loading: true });

   useEffect(() => {
      setState(state => ({ data: state.data, loading: true }));
      const f = async () => {
         const res = await fetch(url);
         // const response = await res.text();
         const response = await res.json();
         console.log('lj :');
         setState({ data: response, loading: false })
      };
      f();
   }, [url, setState]);

   return state;
};