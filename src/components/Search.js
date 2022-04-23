import {View, TextInput, StyleSheet} from 'react-native'
import {FontAwesome} from "@expo/vector-icons"
import { useState } from 'react';
import { SafeAreaView } from 'react-native';
export default function Search ({setSearchTerm}){

    const [input, setInput] = useState("");
    const handleReturn = () => {
        if(!input){ return
        }
        else{
            console.debug(input)
            setSearchTerm(input)
            setInput("")
        }
    }

return (
    <SafeAreaView style={[styles.container]}>
        <FontAwesome name="search" size={25}></FontAwesome>
        <TextInput 
        style={styles.input}
        placeholder='Ressie, food'
        value={input}
        onChangeText= { (text) => {setInput(text)}

        }
        onEndEditing={handleReturn}
        />
    </SafeAreaView>
);
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginTop: 1,
        marginHorizontal: 25,
        backgroundColor: "white",
        padding: 15,
        borderRadius: 40,
    },
    input: {
        fontSize: 20,
        marginLeft: 10,
        width:'100%',
         
    }
})