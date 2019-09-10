import React from 'react';
import {
  StyleSheet,
} from 'react-native';

import Routes from './Commons/Components/Routes/Routes'

export default class App extends React.Component {

  constructor(props) {
    super(props)
    global.city = null
  }

  render(){
    return (
        <Routes/>
    );
  }
};

const styles = StyleSheet.create({

})
