import { View, Text, Image} from "react-native";
import gStyles from "../../../res/gStyles";

const Tab = ({ tabContent }) => {
    return (
        <View style={gStyles.contentItem}>
            <Image source={tabContent.image} style={gStyles.image} />
            <Text style={gStyles.title}>{tabContent.title}</Text>
            <Text style={gStyles.text}>{tabContent.text}</Text>
        </View>
    );
};

export default Tab;