import {StyleSheet} from "react-native";

const gStyles = StyleSheet.create({
    tabContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    tabBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingHorizontal: 10,
    },
    tabButton: {
        paddingVertical: 10,
    },
    activeTabButton: {
        borderBottomWidth: 2,
        borderBottomColor: '#000',
    },
    tabButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },
    content: {
        flex: 1,
        padding: 20,
    },
    contentItem: {
        marginBottom: 20,
        alignItems: "center",
    },
    image: {
        height: 200,
        resizeMode: 'contain',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    text: {
        fontSize: 16,
        color: '#666',
    },
    input: {
        borderWidth: 2,
        borderColor: '#99ff99', // цвет границы
        borderRadius: 10, // радиус скругления краев
        paddingHorizontal: 10, // отступы по горизонтали внутри поля ввода
        paddingVertical: 8, // отступы по вертикали внутри поля ввода
        margin: 10,
    },
});

export default gStyles;