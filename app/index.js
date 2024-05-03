import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-blue-500">
      <Text className="text-white text-2xl font-pblack">App Learning 1 2 3 4 5</Text>
      <StatusBar style="auto" />
      <Link href={"/home"} className="text-white underline">Home</Link>
    </View>
  );
}