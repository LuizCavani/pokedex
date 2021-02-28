import { StyleSheet } from "react-native";

const STYLE = StyleSheet.create({
    pokemonImage: {
        flex: 1,
        height: 300,
        width: 300
    },
    cardBody: {
        borderWidth: 2,
        borderRadius: 30,
        margin: '3%'
    },
    cardSessao: {
        flex: 1,
        justifyContent: 'center'
    },
    tituloSessoes: {
        fontSize: 30,
        fontWeight: "bold"
    },
    subtituloSessoes: {
        fontSize: 25,
        fontWeight: "bold"
    },
    status: {
        flexDirection: 'row'
    },
    viewStat: {
        flexDirection: 'row'
    },
    itensTipo: {
        fontSize: 20,
        margin: 2,
        fontWeight: "normal"
    }
});

export default STYLE;