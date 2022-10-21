import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabNav from './bottomtabnav';
import Profile from '../screens/profile';

const Drawer = createDrawerNavigator();

export default class DrawerNav extends React.Component {
  render() {
    return (
      <Drawer.Navigator>
        <Drawer.Screen name={'Home'} component={BottomTabNav} />
        <Drawer.Screen name={'Profile'} component={Profile} />
      </Drawer.Navigator>
    );
  }
}
