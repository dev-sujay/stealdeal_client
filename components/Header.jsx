import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import RollingContent from 'react-native-rolling-bar';
import { AntDesign } from '@expo/vector-icons';
import React, { useState } from 'react';
import BottomSheet from './BottomSheet'; // Adjust the path as necessary
import { useAddress } from '../contexts/AddressContext';

const productNames = ['fruits', 'vegetables', 'milk', 'snacks', 'beverages'];

const Header = () => {
    const { addresses, updateAddress } = useAddress();
    const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);

    const handleSelectAddress = (selectedAddress) => {
        updateAddress(selectedAddress);
        setBottomSheetVisible(false);
    };

    return (
        <>
            <View style={styles.header}>
                <View>
                    <Text style={styles.deliverTo}>
                        Deliver to
                    </Text>
                    <Pressable onPress={() => setBottomSheetVisible(true)} style={styles.addressContainer}>
                        <Text>
                            {
                                addresses.find(address => address.isCurrent).address.slice(0, 20) + '...'
                            }
                        </Text>
                            <AntDesign name="down" size={16} color="black" />
                    </Pressable>
                </View>
                <View>
                    <Image style={styles.avatar} source={{ uri: 'https://www.w3schools.com/howto/img_avatar.png' }} />
                </View>
            </View>
            <View style={styles.searchBar}>
                <Ionicons name="search" size={24} color="#888" style={styles.searchIcon} />
                <Text style={styles.searchText}>Search for </Text>
                <RollingContent interval={1000} defaultStyle={false}>
                    {
                        productNames.map((productName, index) => (
                            <Text key={index} style={styles.searchText}>
                                {productName}...
                            </Text>
                        ))
                    }
                </RollingContent>
            </View>

            {/* Bottom Sheet Component */}
            <BottomSheet
                visible={isBottomSheetVisible}
                onClose={() => setBottomSheetVisible(false)}
                addresses={addresses}
                onSelect={handleSelectAddress}
            />
        </>
    );
};

const styles = StyleSheet.create({
    header: {
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 10
    },
    deliverTo: {
        fontSize: 20,
        fontWeight: "500"
    },
    addressContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 50
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f8f8f8',
        padding: 2,
        paddingHorizontal: 8,
        borderRadius: 8,
        height: 55,
        marginVertical: 10,
    },
    searchIcon: {
        marginHorizontal: 10
    },
    searchText: {
        fontSize: 17,
        color: '#333',
    }
});

export default Header;
