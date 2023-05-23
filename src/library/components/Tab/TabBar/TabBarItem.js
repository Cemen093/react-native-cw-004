import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import gStyles from "../../../../res/gStyles";

const TabBarItem = ({ tab, isActive, onPress }) => {
    return (
        <TouchableOpacity
            style={[gStyles.tabButton, isActive ? gStyles.activeTabButton : null]}
            onPress={onPress}
        >
            <Text style={gStyles.tabButtonText}>{tab.name}</Text>
        </TouchableOpacity>
    );
};

export default TabBarItem;