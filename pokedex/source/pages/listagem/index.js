import React, { Component } from 'react';
import { Text, FlatList, SafeAreaView, TouchableOpacity, Image, Alert } from 'react-native';
import { Body, Button, Card, CardItem, Left, Right, Thumbnail, View } from 'native-base';
import * as API from '../../components/API';
import STYLE from './style'
import GLOBAL_STYLE from "../../assets/style";


const RenderItem = ({ item }) => {
    return (
        <Card>
            <CardItem>
                <Left>
                    <Thumbnail style={STYLE.thumbRenderItem} source={{ uri: item.image }} />
                </Left>
                <Body style={STYLE.bodyRenderItem}>
                    <Text style={STYLE.nomeRenderItem}>
                        {item.nome}
                    </Text>
                </Body>
                <Right style={STYLE.rigthRenderItem}>
                    <Image style={STYLE.eye} source={require('../..//assets/images/eye.png')} />
                </Right>
            </CardItem>
        </Card>
    )
}


class Listagem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrayPokemons: [],
            atualizarArray: false,
            proximaUrl: 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=20',
            urlAnterior: null,
        }
    }

    async componentDidMount() {
        await this.getPokemons('next');
    }

    pesquisa = async (valor) => {
        await this.getPokemons(valor)
    }


    getPokemons = async (validacao) => {

        let idPokedex, nomePokemon, arraySplit, arrayID, objeto, urlPesquisaAtual, consultaPokemon;

        urlPesquisaAtual = ((validacao == 'next') ? this.state.proximaUrl : this.state.urlAnterior);

        consultaPokemon = await API.getPokemons(urlPesquisaAtual);


        if (validacao == 'next' && this.state.proximaUrl == null || validacao == 'previous' && this.state.urlAnterior == null) {
            Alert.alert('Aviso', 'Não encontramos resultados para a operação.')
        } else {
            this.setState({ arrayPokemons: [] });

            for (let i = 0; i < consultaPokemon.results.length; i++) {

                arraySplit = consultaPokemon.results[i].url.split('/pokemon/');
                arrayID = arraySplit[1].split('/');
                idPokedex = arrayID[0];

                nomePokemon = consultaPokemon.results[i].name;

                objeto = {
                    'id': idPokedex,
                    'nome': nomePokemon.charAt(0).toUpperCase() + nomePokemon.slice(1),
                    'image': `https://pokeres.bastionbot.org/images/pokemon/${idPokedex}.png`
                }

                this.state.arrayPokemons.push(objeto)
            }

            this.setState({
                atualizarArray: !this.state.atualizarArray,
                urlAnterior: consultaPokemon.previous,
                proximaUrl: consultaPokemon.next
            })

        }

    }


    render() {
        return (
            <SafeAreaView style={GLOBAL_STYLE.baseView}>
                <View style={STYLE.viewBotoes}>

                    <Button
                        rounded={true}
                        style={[STYLE.botoes, GLOBAL_STYLE.white]}
                        onPress={() => this.pesquisa('previous')}
                    >
                        <Text style={STYLE.textoBotao}>
                            Anterior
                        </Text>
                    </Button>

                    <Button
                        rounded={true}
                        style={[STYLE.botoes, GLOBAL_STYLE.white]}
                        onPress={() => { this.pesquisa('next') }}
                    >
                        <Text style={STYLE.textoBotao}>
                            Próxima
                        </Text>
                    </Button>
                </View>
                <FlatList
                    data={this.state.arrayPokemons}
                    extraData={this.state.atualizarArray}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity>
                                <RenderItem item={item} />
                            </TouchableOpacity>
                        )
                    }}
                    style={STYLE.flatlist}
                />

            </SafeAreaView >
        );
    }
}

export default Listagem;