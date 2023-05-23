import { View } from "react-native";
import gStyles from "../../../../res/gStyles";
import TabBarItem from "./TabBarItem";


const TabBar = ({ tabs, activeTab, setActiveTab }) => {

    return (
        <View style={gStyles.tabBar}>
            {tabs.map(tab => (
                <TabBarItem
                    key={tab.id}
                    tab={tab}
                    isActive={tab.id === activeTab}
                    onPress={() => setActiveTab(tab.id)}
                />
            ))}
        </View>
    );
};

export default TabBar;