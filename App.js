import React,{useState} from 'react';
import { StyleSheet, View,FlatList ,Alert,TouchableWithoutFeedback,Keyboard} from 'react-native';
import Header from './components/Header';
import ToDoItem from './components/ToDoItem';
import AddTodo from './components/addTodo';
import addTodo from './components/addTodo';
import Sandbox from './components/sandbox';

export default function App() {
  const[todos,setTodo]=useState([
    {text:"Buy Fairness Cream",key:"1"},
    {text:"Watch New Movie",key:"2"}
  ]);

  const pressHandler=(key)=>{
    setTodo((Todos)=>{
      return Todos.filter(todo=>todo.key!=key);
    });
  }

  const AddTODO=(text)=>{
    if(text.length>3){
      setTodo((prevTodos)=>{
        return[
          ...prevTodos,
          {text:text,key:Math.random().toString()}
        ]
      });
    }
    else{
      Alert.alert("OOPS...!","Invalid Todo Insertion",[
        {text:'OK'}
      ])
    }
  }
  return(
    // <Sandbox/>
    <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}>
      <View style={styles.container}>
      <Header/>
      <View style={styles.content}>
        <AddTodo AddTODO={AddTODO} />
        <View style={styles.list}>
          <FlatList data={todos} renderItem={({item})=>(
             <ToDoItem item={item} pressHandler={pressHandler} />
          )} />
        </View>

      </View>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content:{
    padding:40,
    flex:1,
  },
  list:{
    marginTop:30,
    flex:1,
  }
});
