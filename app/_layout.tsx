import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const RootLayout = () => {
    return (
        <Stack>
            <Stack.Screen name='memos' options={{ headerShown: false }}></Stack.Screen>
        </Stack>
    )
}

export default RootLayout