import React from 'react';
import {StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function Home() {
    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 48.47727256741481,
                    longitude: 35.020238613628436,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                <Marker
                    coordinate={{ latitude: 48.47727256741481, longitude: 35.020238613628436 }}
                    title={'Marker title'}
                    description={'Marker description'}
                />
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        flex: 1,
    },
});
