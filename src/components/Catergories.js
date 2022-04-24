import {Text, SafeAreaView, FlatList } from 'react-native'
import React from 'react'
import CatergoriesCard from './CatergoriesCard'

export default function Catergories({catergories, setSearchTerm, searchTerm}) {
  return (
    <SafeAreaView>
      <FlatList
        data={catergories}
        renderItem={({item, index})=>{
            return <CatergoriesCard
            index={index}
            name={item.name}
            active={item.name === searchTerm}
            handlePress={() => setSearchTerm(item.name)}
            />
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(category) => category.name}
      />
    </SafeAreaView>
  )
}