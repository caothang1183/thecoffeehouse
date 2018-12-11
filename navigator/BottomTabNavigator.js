import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { HomeStack, ProductStack, AccountStack, SettingsStack } from './StackNavigator';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

const TabNavigator = createBottomTabNavigator(
    {
        Home: {
            screen: HomeStack,
            navigationOptions: {
                tabBarLabel: 'Home',
                tabBarIcon: ({ tintColor }) => (
                    <FontAwesomeIcon name="home" color={tintColor} size={24} />
                )
            }
        },
        Product: {
            screen: ProductStack,
            navigationOptions: {
                tabBarLabel: 'Product',
                tabBarIcon: ({ tintColor }) => (
                    <FontAwesomeIcon name="shopping-bag" color={tintColor} size={24} />
                )
            }
        },
        Account: {
            screen: AccountStack,
            navigationOptions: {
                tabBarLabel: 'Account',
                tabBarIcon: ({ tintColor }) => (
                    <FontAwesomeIcon name="user" color={tintColor} size={24} />
                ),
                tabBarVisible: false
            }
        },
        Settings: {
            screen: SettingsStack,
            navigationOptions: {
                tabBarLabel: 'Settings',
                tabBarIcon: ({ tintColor }) => (
                    <FontAwesomeIcon name="cog" color={tintColor} size={24} />
                )
            }
        }
    }, {
        initialRouterName: 'Home',
        order: ['Home', 'Product', 'Account', 'Settings'],
        navigationOptions: {
            tabBarVisible: true
        },
        tabBarOptions: {
            activeTintColor: 'orange',
            inactiveTintColor: 'black'
        }
    }
);

export const BottomTabNavigator = createAppContainer(TabNavigator);
