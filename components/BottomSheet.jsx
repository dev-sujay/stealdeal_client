import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const BottomSheet = ({ visible, onClose, addresses, onSelect }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.sheet}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Select Address</Text>
            <Pressable onPress={onClose}>
              <AntDesign name="close" size={24} color="black" />
            </Pressable>
          </View>
          {addresses.map((address) => (
            <TouchableOpacity key={address.id} onPress={() => onSelect(address)} style={styles.addressItem}>
              <Text style={styles.addressText}>{address.address}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  sheet: {
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: '600',
  },
  addressItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  addressText: {
    fontSize: 16,
  },
});

export default BottomSheet;
