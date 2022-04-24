import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

export default function CatergoriesCards({name, index, handlePress, active}) {
  return (
    <TouchableOpacity onPress={handlePress}>
    <View style={[
      styles.container,
      index ===0 ? {marginLeft: 25} : {marginLeft: 15},
      active ? {opacity: 1} : {opacity: 0.62}
     // active ? {backgroundColor: "#F8F8F8"} : {backgroundColor: "white"}
    ]}>
      <Text style={{fontWeight: "bold"}}>{name} </Text>
    </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
      width: 80,
      height: 80,
      borderRadius: 5,
      marginVertical: 15, 
      alignItems: "center",
      backgroundColor: "whitesmoke",
      justifyContent: "center",
  },
})