import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function Homepage() {
    const data = [
        { English: "Hi", Vietnam: "chào" },
        { English: "One", Vietnam: "một" },
        { English: "Two", Vietnam: "hai" }
    ]

    const [list, setList] = useState([
        
        { English: "Hi", Vietnam: "chào" },
        { English: "One", Vietnam: "một" },
        { English: "Two", Vietnam: "hai" }

    ])
    const [changeText, setChangeText] = useState("English");
    const [index, setIndex] = useState(0);

    const onPressChange = () => {
        const newText = changeText == "English" ? "Vietnam" : "English";
        setChangeText(newText)
    }
    const nextWord = () => {
        if (index < list.length - 1) {
            setIndex(prevIndex => prevIndex + 1);
            setChangeText("English")
        }
    }
    const preWord = () => {
        if (index > 0) {
            setIndex(prevIndex => prevIndex - 1);
            setChangeText("English")
        }
    }
    const removeWord = () => {
        if (index > 0) {
            list.splice(index, 1);
            setIndex(prevIndex => prevIndex - 1);
            setChangeText("English")
        }
        else if (index === 0 && list.length > 1) {
            const updatedList = [...list];
            updatedList.splice(0, 1);
            setList(updatedList);
            setChangeText("English")
        }
    }
    const resetWord = () => {
        setList(data);
        setIndex(0);
        setChangeText("English")
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity activeOpacity={1} style={styles.square} onPress={onPressChange}>
                <Text style={styles.text}>{list[index][changeText]}</Text>
            </TouchableOpacity>
            <View style={styles.button}>
                <TouchableOpacity style={styles.buttonItem} onPress={preWord}>
                    <Text style={styles.buttonText}>Previous</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonItem} onPress={nextWord}>
                    <Text style={styles.buttonText}>Next</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress={removeWord} style={{ backgroundColor: "white", width: 320, height: 50, borderRadius: 5, alignItems: "center", justifyContent: "center", marginVertical: 20 }}>
                    <Text >
                        Remove From Deck
                    </Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress={resetWord} style={{ backgroundColor: "white", width: 320, height: 50, borderRadius: 5, alignItems: "center", justifyContent: "center" }}>
                    <Text >
                        Reset Deck
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
    
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(239, 239, 243, 1)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    square: {
        width: "90%",
        height: "50%",
        borderRadius: 10,
        backgroundColor: "#EA4559",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        color: "white",
        fontSize: 50
    },
    button: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "90%",

    },
    buttonItem: {
        marginTop: 15,
        width: 80,
        alignItems: "center",
        height: 30,
        justifyContent: "center",
        borderRadius: 5,
        borderColor: "#EA4559",
        borderWidth: 1
    },
    buttonText: {
        color: "#EA4559"
    }
});

