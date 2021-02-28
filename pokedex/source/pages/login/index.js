import React, { Component } from 'react';
import { Text, SafeAreaView, TextInput, View, Alert } from 'react-native';
import { Button } from "native-base";
import STYLE from './style';
import GLOBAL_STYLE from "../../assets/style";

class Login extends Component {

    constructor(props) {
        super(props);
        this.inputSenha = React.createRef()
        this.state = {
            email: '',
            senha: ''
        }
    }

    validarLogin = (email, senha) => {
        const { navigation } = this.props;
        if (email == 'admin@email.com' && senha == 'admin') {
            navigation.navigate('Listagem');
        } else {
            Alert.alert('Atenção', 'Os dados de acesso estão incorretos ou campos incompletos, por gentileza verifique os mesmos!')
        }
    }

    render() {
        const { email, senha } = this.state;
        return (
            <SafeAreaView style={[STYLE.test, GLOBAL_STYLE.grey]}>
                <Text style={STYLE.titulo}>Pokédex</Text>
                <View style={STYLE.viewConfig}>
                    <View style={STYLE.viewInputs}>
                        <TextInput
                            keyboardType='email-address'
                            returnKeyType='next'
                            placeholder='E-mail'
                            value={email}
                            autoCapitalize='none'
                            style={STYLE.inputs}
                            onChangeText={(text) => { this.setState({ email: text }) }}
                            onSubmitEditing={() => { this.inputSenha.current.focus() }}
                        />
                        <TextInput
                            ref={this.inputSenha}
                            secureTextEntry={true}
                            placeholder='Senha'
                            autoCapitalize='none'
                            value={senha}
                            style={STYLE.inputs}
                            onChangeText={(text) => { this.setState({ senha: text }) }}
                            onSubmitEditing={() => this.validarLogin(email, senha)}
                        />
                    </View>
                </View>
                <View style={STYLE.viewBotao}>
                    <Button
                        rounded={true}
                        style={[STYLE.botao, GLOBAL_STYLE.white]}
                        onPress={() => this.validarLogin(email, senha)}
                    >
                        <Text style={STYLE.textoBotao}>Acessar</Text>
                    </Button>
                </View>
            </SafeAreaView>
        );
    }
}

export default Login;