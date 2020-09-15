import React from 'react';
import {StyleSheet,Text,View,TouchableOpacity} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

export default function ToDoItem({item,pressHandler}){
    return(
        // <TouchableOpacity onPress={()=>pressHandler(item.key)}>
        <View style={styles.item}>
            <MaterialIcons onPress={()=>pressHandler(item.key)} name="delete" size={18} />
            <Text style={styles.content}>{item.text}</Text>
        </View>
        // </TouchableOpacity>
    )
}

const styles=StyleSheet.create({
    item:{
        padding:15,
        marginBottom:12,
        borderColor:"#080808",
        borderWidth:1,
        borderRadius:10,
        borderStyle:"dashed",
        flexDirection:"row",
    },
    content:{
        marginLeft:12,
        color:"#287ade",
    }
})