import React from 'react';
import { TabNavigator } from 'react-navigation';
import Touchable from '@appandflow/touchable';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
import styled from 'styled-components/native';

import Colors from '../../constants/Colors';
import {
  HomeScreen,
  ActivitiesScreen,
  ProfileScreen,
} from '../screens';

const AddButton = styled(Touchable)`
  marginRight: 10;
`;

const NavbarDefaultStyle = {
  backgroundColor: Colors.redColor,
};

export default TabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      headerStyle: NavbarDefaultStyle,
      headerRight: (
        <AddButton feedback="opacity" onPress={() => navigation.navigate('CreateGroup')}>
          <MaterialIcons
            name="add-circle"
            size={30}
            color="#fff"
          />
        </AddButton>
      ),
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome
          name="home"
          size={25}
          color={tintColor}
        />
      ),
    }),
  },
  Activities: {
    screen: ActivitiesScreen,
    navigationOptions: ({ navigation }) => ({
      headerStyle: NavbarDefaultStyle,
      headerRight: (
          <AddButton feedback="opacity" onPress={() => navigation.navigate('CreateActivity')}>
            <MaterialIcons
              name="add-circle"
              size={30}
              color="#fff"
            />
          </AddButton>
        ),
      tabBarIcon: ({ tintColor }) => (
        <MaterialIcons
          name="notifications"
          size={25}
          color={tintColor}
        />
      ),
    }),
  },
  ProfileScreen: {
    screen: ProfileScreen,
    navigationOptions: {
      headerStyle: NavbarDefaultStyle,
      tabBarIcon: ({ tintColor }) => (
        <MaterialIcons
          name="account-circle"
          size={25}
          color={tintColor}
        />
      ),
    },
  },
}, {
  swipeEnabled: false,
  animationEnabled: false,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    showLabel: false,
    showIcon: true,
    inactiveTintColor: Colors.blackBlueColor,
    activeTintColor: Colors.redColor,
    pressColor: Colors.redColor,
    indicatorStyle: { backgroundColor: Colors.redColor },
    style: {
      backgroundColor: Colors.whiteColor,
    },
  },
});
