
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../../pages/login';
import listagem from '../../pages/listagem';


const STACK = createStackNavigator();

export default function Routes() {
    return (
        <STACK.Navigator initialRouteName="Login" >
            <STACK.Screen name="Login" component={Login} options={{ header: () => <></> }} />
            <STACK.Screen name="Listagem" component={listagem} />
        </STACK.Navigator>
    );
}