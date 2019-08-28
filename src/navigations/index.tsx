import * as React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import LoginScreen from '../screen/login';
import principal from '../screen/principal';

const navigation = createSwitchNavigator({
    LoginScreen, principal
})

export default createAppContainer(navigation);