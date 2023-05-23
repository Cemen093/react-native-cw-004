import { View } from "react-native";
import Tab from "./Tab";
import gStyles from "../../../res/gStyles";

const Tabs = ({ tabs, activeTab }) => {
    return (
        <View style={gStyles.content}>
            <Tab tabContent={tabs[activeTab].content} />
        </View>
    );
};

export default Tabs;