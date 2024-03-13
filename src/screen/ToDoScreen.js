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

const ToDoScreen = () => {

    //Init local states
    const [todo, setTodo] = useState("");
    const [todoList, setTodoList] = useState([]);
    const [editedTodo, setEditedTodo] = useState(null);


    //Handle Add To-do

    const handleAddTodo = () => {
        //structure of a single to-do item
        // {
        //     id:
        //     title:
        // }

        if (todo == "") {
            return;
        }

        setTodoList([...todoList, { id: Date.now().toString(), title: todo }])
        setTodo("");
    };

    //Handle Delete To-Do

    const handleDeleteTodo = (id) => {
        const updatedTodoList = todoList.filter((todo) => todo.id !== id)

        setTodoList(updatedTodoList)
    }

    //Handle Edit todo

    const handleEditTodo = (todo) => {
        setEditedTodo(todo);
        setTodo(todo.Title);
    }

    //Handle Update

    const handleUpdateTodo = () => {
        const updatedTodos = todoList.map((item) => {
            if (item.id == editedTodo.id) {
                return { ...item, title: todo };
            }

            return item;
        });

        setTodoList(updatedTodos);
        setEditedTodo(null);
        setTodo("");
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
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.8,
                shadowRadius: 2,
            }}>


            <Text style={{ color: "#fff", fontWeight: "800", flex: 1 }}>{item.title}</Text>
            <TouchableOpacity onPress={() => handleEditTodo(item)}>
                <Entypo name="edit" size={20} color="#fff" paddingHorizontal={4} />
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

            {editedTodo ? (
                <TouchableOpacity
                    style={{
                        backgroundColor: "#000",
                        borderRadius: 6,
                        paddingVertical: 12,
                        marginVertical: 34,
                        alignItems: "center",
                        shadowColor: "#000",
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.8,
                        shadowRadius: 3,
                    }}
                    onPress={() => handleUpdateTodo()}
                >
                    <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 20 }}>
                        Save
                    </Text>
                </TouchableOpacity>
            ) : (
                <TouchableOpacity
                    style={{
                        backgroundColor: "#000",
                        borderRadius: 6,
                        paddingVertical: 12,
                        marginVertical: 34,
                        alignItems: "center",
                        shadowColor: "#000",
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.8,
                        shadowRadius: 3,
                    }}
                    onPress={() => handleAddTodo()}
                >
                    <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 20 }}>
                        Add
                    </Text>
                </TouchableOpacity>
            )}


            {/* Render To-do List */}

            <FlatList data={todoList} renderItem={renderTodos}></FlatList>
        </View>
    )
}

export default ToDoScreen;

const styles = StyleSheet.create({})