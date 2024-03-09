import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    FlatList,
} from 'react-native';
import React from 'react';
import { IconButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const dummyData = [{
    id: "01",
    title: "Wash car"
}, {
    id: "02",
    title: "Read a book"
}]

const ToDoScreen = () => {
    const renderTodos = ({ item, index }) => (
        <View
            style={{
                backgroundColor: "#1e90ff",
                borderRadius: 12,
                paddingHorizontal: 6,
                paddingVertical: 12,
                marginBottom: 12,
            }}
        >
            <IconButton icon={() => <Icon name="pencil" size={20} />}
                onPress={() => console.log('Pressed')} />
            <Text style={{ color: "#fff", fontWeight: "800" }}>{item.title}</Text>
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
            />

            <TouchableOpacity
                style={{
                    backgroundColor: "#000",
                    borderRadius: 6,
                    paddingVertical: 8,
                    marginVertical: 34,
                    alignItems: "center"
                }}>
                <Text style={{ color: "#fff", fontWeight: "bold" }}>
                    Add
                </Text>
            </TouchableOpacity>

            {/* Render To-do List */}

            <FlatList data={dummyData} renderItem={renderTodos}></FlatList>
        </View>
    )
}

export default ToDoScreen;

const styles = StyleSheet.create({})