import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Or other icon set

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search for 'Bottles'"
        placeholderTextColor="#888" // Adjust placeholder color as needed.
      />
      <Ionicons name="search" size={24} color="#888" style={styles.icon} /> {/* Search Icon */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff', // Background color of search bar
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10, // Add margin as needed
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
  },
  icon: {
    marginLeft: 10, // Spacing between input and icon.
  },
});

export default SearchBar;