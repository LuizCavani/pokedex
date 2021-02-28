
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../../pages/login';
import Listagem from '../../pages/listagem';
import Status from "../../pages/status";

const STACK = createStackNavigator();

export default function Routes() {
    return (
        <STACK.Navigator initialRouteName="Login" >
            <STACK.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <STACK.Screen name="Listagem" component={Listagem} options={{ headerTitle: 'Lista de Pokemons' }} />
            <STACK.Screen name="Status" component={Status} options={{ headerTitle: 'Status do Pokemon' }} />
        </STACK.Navigator>
    );
}