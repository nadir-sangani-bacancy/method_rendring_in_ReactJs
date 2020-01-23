import React from 'react';
import logo from './logo.svg';
import './App.css';
import Inlinemethodbinding from './inlinemethodbinding';
import Bindmethodusingconstructor from './bindmethodusingconstructor';
import Bindmethodusingarrow from './bindmethodusingarrow';
import Bindmethodwithparameter from './bindmethodwithparameter';
import Bindmethodusingarrowwithparameter from './bindingmethodusingarrowwithparameter';

class App extends React.Component{

  render(){
    return(
      <div>
        <p>THIS IS FROM PARENT </p>
        <Inlinemethodbinding />
        <Bindmethodusingconstructor />
        <Bindmethodusingarrow />  
        <Bindmethodwithparameter />
        <Bindmethodusingarrowwithparameter />
      </div>
    )
  }
}

export default App;
