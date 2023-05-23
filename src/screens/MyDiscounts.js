import {View, Text, TextInput, StyleSheet} from "react-native";
import {useState} from "react";
import TabBar from "../library/components/Tab/TabBar/TabBar";
import {DiscountList} from "../library/components/Discont/DiscontList";
import gStyles from "../res/gStyles";
import R from "../res/R";


export default function MyDiscounts() {
    const [promoCode, setPromoCode] = useState('');
    const [activeTab, setActiveTab] = useState(0);
    const [discounts, setDiscounts] = useState([
        {
            id: 1,
            image: R.images.discont,
            value: "-30% на 3 поездки",
            limit: "Но не более 30 грн. на поездку",
            isActive: true,
            expirationDate: "действует до 04.06.2023",
        },
        {
            id: 1,
            image: R.images.discont,
            value: "-100% на 0 поездок",
            limit: "Но не более чем никогда",
            isActive: false,
            expirationDate: "действует до 00.00.0000",
        }
    ]);
    const tabs = [
        { id: 0, name: 'Мои скидки' },
        { id: 1, name: 'Промокод' }
    ]

    return (
        <View style={gStyles.tabContainer}>
            <TabBar tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
            {activeTab === 0 ?
                <DiscountList discounts={discounts} /> :
                <TextInput style={gStyles.input}
                    placeholder="Введите промокод"
                    onChangeText={(promoCode) => setPromoCode(promoCode)}
                    value={promoCode}
                />
            }
        </View>
    );
}