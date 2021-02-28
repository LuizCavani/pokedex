import { StyleSheet } from "react-native";

const STYLE = StyleSheet.create({
    thumbRenderItem: {
        borderWidth: 1,
        borderColor: '#000000'
    },
    bodyRenderItem: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    rigthRenderItem: {
        alignSelf: "center"
    },
    nomeRenderItem: {
        fontSize: 20
    },
    eye: {
        width: 50,
        height: 50
    },
    flatlist: {
        flex: 1,
        margin: '3%'
    },
    viewBotoes: {
        flex: .1,
        margin: '3%',
        flexDirection: "row"
    },
    botoes: {
        flex: 1,
        justifyContent: "center",
        borderWidth: 1,
        borderColor: '#000000',
        alignSelf: "center",
        marginHorizontal: '2%'
    },
    textoBotao: {
        fontSize: 20,
        fontWeight: "bold"
    }
});

export default STYLE;