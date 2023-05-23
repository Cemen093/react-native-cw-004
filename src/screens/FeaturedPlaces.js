import {View, Text, Button} from "react-native";
import * as React from "react";


export default function FeaturedPlaces({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Featured Places</Text>
            <Button
                onPress={() => navigation.goBack()}
                title="Go back home"
            />
        </View>
    );
}