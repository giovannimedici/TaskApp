import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    FlatList,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { Ionicons, Entypo } from '@expo/vector-icons';

const dummyData = [{
    id: "01",
    title: "Wash car"
}, {
    id: "02",
    title: "Read a book"
}]

const ToDoScreen = () => {

    //Init local states
    const[todo, setTodo] = useState("")
    const[todoList, setTodoList] = useState([])

    //Handle Add To-do

    const handleAddTodo = () => {
        //structure of a single to-do item
        // {
        //     id:
        //     title:
        // }

        setTodoList([...todoList, {id: Date.now().toString(), title: todo }])
        setTodo("");
    };

    //Handle Delete To-Do

    const handleDeleteTodo = (id) => {
        const updatedToDdoList = todoList.filter((todo) => todo.id !== id)

        setTodoList(updatedToDdoLists)
    }

    //Render todo
    const renderTodos = ({ item, index }) => (
        <View
            style={{
                backgroundColor: "#1e90ff",
                borderRadius: 12,
                paddingHorizontal: 6,
                paddingVertical: 12,
                marginBottom: 12,
                flexDirection: "row",
                alignItems: "center",
            }}>
            
            
            <Text style={{ color: "#fff", fontWeight: "800", flex: 1 }}>{item.title}</Text>
            <TouchableOpacity>
                <Entypo name="edit" size={20} color="#fff" paddingHorizontal={4}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleDeleteTodo(item.id)}>
                <Ionicons name="trash-outline" size={20} color="#fff" />
            </TouchableOpacity>
        </View>
    )

    return (
        <View style={{ marginHorizontal: 16 }}>
            <TextInput
                style={{
                    borderWidth: 2,
                    borderColor: "#1e90ff",
                    borderRadius: 6,
                    paddingVertical: 12,
                    paddingHorizontal: 16,
                    marginTop: 40
                }}
                placeholder='Add a task'
                value={todo}
                onChangeText={(userText) => setTodo(userText)}
                
            />
            
            <TouchableOpacity
                style={{
                    backgroundColor: "#000",
                    borderRadius: 6,
                    paddingVertical: 8,
                    marginVertical: 34,
                    alignItems: "center"
                }}
                onPress={() => handleAddTodo()}
                >
                <Text style={{ color: "#fff", fontWeight: "bold" }}>
                    Add
                </Text>
            </TouchableOpacity>

            {/* Render To-do List */}

            <FlatList data={todoList} renderItem={renderTodos}></FlatList>
        </View>
    )
}

export default ToDoScreen;

const styles = StyleSheet.create({})