import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { useState } from 'react';
import Search from './src/components/Search';
import Catergories from './src/components/Catergories';

export default function App() {
  const [searchTerm, setSearchTerm] = useState("")

  const commonCatorgories = [
    {
      name: "Burger",
    },
    {
      name: "Indian",
    },
    {
      name: "Pizza",
    },
    {
      name: "Mexican",
    },
    {
      name: "Sweets"
    }
]
  console.debug("app.js term is : ", searchTerm)
  return (
    <View >
      <Search setSearchTerm={setSearchTerm}/>
      <Catergories
        catergories={commonCatorgories}
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
      />
      <StatusBar style="auto" />
    </View>
  );
}

