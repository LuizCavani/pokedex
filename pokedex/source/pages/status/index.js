import React, { Component } from 'react';
import { Card, CardItem, Left, Body, Right } from 'native-base';
import { SafeAreaView, Image, Text, LogBox, View, FlatList, ScrollView } from 'react-native';
import { getSinglePokemon } from "../../components/API";
import STYLE from './style';
import GLOBAL_STYLE from "../../assets/style";


LogBox.ignoreLogs([
    'VirtualizedLists should never be nested',
])

const RenderItemStatus = ({ item }) => {
    return (
        <CardItem>
            <Text style={STYLE.subtituloSessoes}>{item.stat.name.charAt(0).toUpperCase() + item.stat.name.slice(1)}: <Text style={STYLE.itensTipo}>{item.base_stat}</Text></Text>
        </CardItem>
    )
}

const RenderItemTipos = ({ item }) => {
    return (
        <View style={{ alignItems: 'center' }}>
            <Text style={STYLE.itensTipo}>{item.type.name.charAt(0).toUpperCase() + item.type.name.slice(1)}</Text>
        </View>
    )
}

class Status extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dadosPokemon: {},
            atualizarArrayStatus: false,
        }
    }

    componentDidMount() {
        this.getPokemonStatus()
    }

    getPokemonStatus = async () => {

        let consulta, objetoPokemon;

        consulta = await getSinglePokemon(this.props.route.params.pokemonId);

        objetoPokemon = {
            'id': consulta.id,
            'nome': consulta.name.charAt(0).toUpperCase() + consulta.name.slice(1),
            'altura': consulta.height,
            'peso': consulta.weight,
            'status': consulta.stats,
            'tipos': consulta.types
        }

        this.setState({ dadosPokemon: objetoPokemon })

    }

    render() {
        const { pokemonId } = this.props.route.params;
        const { dadosPokemon } = this.state;
        const { status } = this.state.dadosPokemon;
        const { tipos } = this.state.dadosPokemon

        return (
            <SafeAreaView style={GLOBAL_STYLE.baseView}>
                <ScrollView style={{ margin: '3%' }}>
                    <Card>
                        <CardItem style={STYLE.cardSessao}>
                            <Text style={STYLE.tituloSessoes}>{dadosPokemon.nome}</Text>
                        </CardItem>
                        <CardItem cardBody style={STYLE.cardBody}>
                            <Image
                                resizeMode='contain'
                                source={{ uri: `https://pokeres.bastionbot.org/images/pokemon/${pokemonId}.png` }}
                                style={STYLE.pokemonImage}
                            />
                        </CardItem>
                    </Card>

                    <Card>
                        <CardItem style={STYLE.cardSessao}>
                            <Text style={STYLE.tituloSessoes}>Informações</Text>
                        </CardItem>
                        <View style={{ flexDirection: 'row' }}>
                            <CardItem style={STYLE.cardSessao}>
                                <Text style={STYLE.subtituloSessoes}>Tipo(s)</Text>
                            </CardItem>
                            <FlatList
                                data={tipos}
                                keyExtractor={item => item.index}
                                renderItem={({ item, index }) => {
                                    return (
                                        <RenderItemTipos key={index} item={item} />
                                    )
                                }}
                                style={{ flex: 1, alignSelf: 'center' }}
                            />
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <CardItem style={STYLE.cardSessao}>
                                <Text style={STYLE.subtituloSessoes}>Altura: <Text style={STYLE.itensTipo}>{dadosPokemon.altura}</Text></Text>
                            </CardItem>
                            <CardItem style={STYLE.cardSessao}>
                                <Text style={STYLE.subtituloSessoes}>Peso: <Text style={STYLE.itensTipo}>{dadosPokemon.peso}</Text></Text>
                            </CardItem>
                        </View>
                    </Card>

                    <View >
                        <Card>
                            <CardItem style={STYLE.cardSessao}>
                                <Text style={STYLE.tituloSessoes}>Status</Text>
                            </CardItem>
                            <FlatList
                                data={status}
                                keyExtractor={item => item.index}
                                renderItem={({ item }) => {
                                    return (
                                        <RenderItemStatus item={item} />
                                    )
                                }}
                            />
                        </Card>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}


export default Status;