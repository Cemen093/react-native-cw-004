import React, { useState } from 'react';
import { View } from 'react-native';
import R from "../res/R";
import gStyles from "../res/gStyles";
import TabBar from "../library/components/Tab/TabBar/TabBar";
import Tabs from "../library/components/Tab/Tabs";

const Trips = () => {
    const [activeTab, setActiveTab] = useState(0);
    const tabs = [
        { id: 0, name: 'Текущие', content: {
                title: "Еще нет поездок",
                text: "",
                image: R.images.current,
            } },
        { id: 1, name: 'Прошлые', content: {
                title: "Прошлые",
                text: "История поездок будет хранится здесь",
                image: R.images.past,
            } },
        { id: 2, name: 'Уведомления', content: {
                title: "Уведомления",
                text: "Ваши уведомления будут хранится здесь",
                image: R.images.notifications,
            } },
    ];

    return (
        <View style={gStyles.tabContainer}>
            <TabBar tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
            <Tabs tabs={tabs} activeTab={activeTab} />
        </View>
    );
};

export default Trips;