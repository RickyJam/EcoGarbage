import React from 'react'

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomePage from "../Pages/HomePage";
import FirstLogin from "../Pages/FirstLogin";
import StartUpPage from "../Pages/StartUpPage";
import Header from "../UseFullComponent/Header";

const AppNavigator = createStackNavigator(
    {
        HomePage: HomePage,
        FirstLogin: FirstLogin,
        StartUpPage: StartUpPage,
        Header: Header
    },
    {
        initialRouteName: 'StartUpPage',
    },
);

const RootStack = createStackNavigator(
    {
        Main: {
            screen: StartUpPage,
        },
        /*MyModal: {
            screen: ModalScreen,
        },*/
    },
    {
        mode: 'modal',
        headerMode: 'none',
    }
);

export default createAppContainer(AppNavigator,RootStack);
