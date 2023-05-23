import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

// Importing screens
import FeaturedPlaces from "./FeaturedPlaces";
import Home from "./Home";
import MyDiscounts from "./MyDiscounts";
import NewsAndPromotions from "./NewsAndPromotions";
import Payment from "./Payment";
import Settings from "./Settings";
import Trips from "./Trips";
import Wallet from "./Wallet";

const Drawer = createDrawerNavigator();

export default function OnboardingNavigator() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={Home}/>
                <Drawer.Screen
                    name="Trips"
                    component={Trips}
                    options={{swipeEnabled: false, title: "Поездки"}}
                />
                <Drawer.Screen
                    name="Payment"
                    component={Payment}
                    options={{swipeEnabled: false, title: "Оплата"}}
                />
                <Drawer.Screen
                    name="My Discounts"
                    component={MyDiscounts}
                    options={{swipeEnabled: false, title: "Мои скидки"}}
                />
                <Drawer.Screen
                    name="Featured Places"
                    component={FeaturedPlaces}
                   options={{swipeEnabled: false, title: "Избранные места"}}
                />
                <Drawer.Screen
                    name="News and Promotions"
                    component={NewsAndPromotions}
                    options={{swipeEnabled: false, title: "Новости и акции"}}
                />
                <Drawer.Screen
                    name="Wallet"
                    component={Wallet}
                    options={{swipeEnabled: false, title: "Кошелек"}}
                />
                <Drawer.Screen
                    name="Settings"
                    component={Settings}
                    options={{swipeEnabled: false, title: "Настройки"}}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}