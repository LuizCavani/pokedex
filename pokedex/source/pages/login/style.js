import { StyleSheet } from "react-native";

const STYLE = StyleSheet.create({
    test: {
        flex: 1,
    },
    titulo: {
        alignSelf: 'center',
        fontSize: 30,
        fontWeight: "bold",
        flex: 1,
        textAlignVertical: "center"
    },
    viewConfig: {
        flex: 1,
        flexDirection: 'row'
    },
    viewInputs: {
        flex: 1,
        marginHorizontal: '5%'
    },
    inputs: {
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#000000',
        borderRadius: 10,
        marginVertical: '3%'
    },
    viewBotao: {
        flex: 1,
        flexDirection: "row",
    },
    botao: {
        flex: 1,
        justifyContent: "center",
        marginHorizontal: '5%',
        borderWidth: 2,
        borderColor: '#000000',
        alignSelf: "center"
    },
    textoBotao: {
        fontSize: 20,
        fontWeight: "bold"
    }
});

export default STYLE;