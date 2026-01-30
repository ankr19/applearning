import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function HomeScreen() {
  return (
    <SafeAreaView className="bg-gray-200 flex-1">
      <Text>HomeScreen</Text>
    </SafeAreaView>
  )
}