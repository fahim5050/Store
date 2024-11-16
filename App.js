
import Routes from './Routes.js';

import { Provider } from 'react-redux';
import Store from "./Store.js"
import { StatusBar } from 'react-native';


export default function App() {
  return (

  <Provider store={Store}>
 <StatusBar barStyle="light-content" backgroundColor="black" />
    <Routes/>
   
  </Provider>
  
  );
}


