import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from "react-native-vector-icons/Ionicons"

import Feed from '../screens/feed';
import CreatePost from '../screens/createPost'

const Tab = createBottomTabNavigator();

export default class BottomTabNav extends React.Component {
  render() {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Feed') {
              iconName = focused ? 'book' : 'book-outline';
            } else if (route.name === 'CreatePost') {
              iconName = focused ? 'create' : 'create-outline';
            }
           return <Ionicons name={iconName} color={color} size={size}/>
          },
        })} tabBarOptions={{activeTintColor:"red",inactiveTintColor:"gray"}}>
        <Tab.Screen name={'Feed'} component={Feed} />
        <Tab.Screen name={'CreatePost'} component={CreatePost} />
      </Tab.Navigator>
    );
  }
}
