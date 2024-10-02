import { View, Text } from 'react-native'
import React from 'react'
import { AddressProvider } from '../contexts/AddressContext'
import { Stack } from 'expo-router'

const Layout = () => {
  return (
    <AddressProvider>
        <Stack screenOptions={{
            headerShown: false
        }} />
    </AddressProvider>
  )
}

export default Layout