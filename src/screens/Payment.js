import React, {useState} from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';




const Payment = () => {
    const [numberBonuses, setNumberBonuses] = useState(0)
    const DATA = [
        { id: '1', title: 'Оплата наличкой' ,
            icon: {name: "cash", size: 24, color: "green"}},
        { id: '2', title: 'Оплата бонусами (' + numberBonuses + ')' ,
            icon: {name: "brightness-percent", size: 24, color: "orange"}},
        { id: '3', title: 'Google Pay' ,
            icon: {name: "google-plus", size: 24, color: "black"}},
    ];
    const handleComponentPress = (id) => {
        console.log(`Компонент ${id} был нажат, больше он ничего не делает.`);
    };

    const handleAddButtonPress = () => {
        console.log('Кнопка добавления была нажата, но её реалезацыя не была произведена.');
    };

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => handleComponentPress(item.id)} style={styles.item}>
                <MaterialCommunityIcons name={item.icon.name} size={item.icon.size} color={item.icon.color} />
                <Text style={styles.title}>{item.title}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <FlatList data={DATA} renderItem={renderItem} keyExtractor={(item) => item.id} />
            <TouchableOpacity onPress={handleAddButtonPress} style={styles.addButton}>
                <Ionicons name="ios-add" size={32} color="white" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 30,
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    addButton: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Payment;