import React,{useState} from 'react';
import {StyleSheet,Text,TextInput,View,Button} from 'react-native';

export default function addTodo({AddTODO}){
    const[text,setText]=useState('');

    const changeHandler=(val)=>{
        setText(val);
    }
    const TodoAdder=()=>{
        AddTODO(text);
        setText('');
        this.textin.clear();
    }
    return(
        <View>
            <TextInput 
            ref={input=>{this.textin=input}}
            style={styles.input} 
            placeholder="Add Todo"
            onChangeText={changeHandler} />
            <Button onPress={TodoAdder} title="Add TODO" color="orange" />
        </View>
    )
}

const styles=StyleSheet.create({
    input:{
        marginBottom:10,
        padding:8,
        borderBottomWidth:1,
        borderBottomColor:"#bf6e22",
    }
})