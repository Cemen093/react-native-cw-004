import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

// Importing screens
import FeaturedPlaces from "./src/screens/FeaturedPlaces";
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import ContactScreen from './screens/ContactScreen';
import SettingsScreen from './screens/SettingsScreen';
import ProfileScreen from './screens/ProfileScreen';

const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <View style={styles.container}>
                <Drawer.Navigator initialRouteName="Home">
                    <Drawer.Screen name="Home" component={HomeScreen} />
                    <Drawer.Screen name="About" component={AboutScreen} />
                    <Drawer.Screen name="Contact" component={ContactScreen} />
                    <Drawer.Screen name="Settings" component={SettingsScreen} />
                    <Drawer.Screen name="Profile" component={ProfileScreen} />
                </Drawer.Navigator>
            </View>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});