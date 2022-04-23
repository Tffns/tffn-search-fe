import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { useState } from 'react';
import Search from './src/components/Search';

export default function App() {
  const [searchTerm, setSearchTerm] = useState("Indian")
  console.debug("app.js term is : ", searchTerm)
  return (
    <View >
      <Search setSearchTerm={setSearchTerm}/>
      <StatusBar style="auto" />
    </View>
  );
}

