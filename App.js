import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import DrawerNav from "./components/drawernav"
import{NavigationContainer} from "@react-navigation/native"

export default class App extends React.Component{

  render(){
    return(
      <NavigationContainer>
      <DrawerNav/>
      
      </NavigationContainer>

    )
  }
}