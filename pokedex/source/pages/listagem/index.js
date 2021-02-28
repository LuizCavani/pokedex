import React from 'react';
import { View, Text, Button } from 'react-native';

export default function listagem({ navigation }) {
    return (
        <View>
            <Text>Lista</Text>
            <Button title='BAck' onPress={() => { navigation.goBack(null) }} />
        </View>
    );
}