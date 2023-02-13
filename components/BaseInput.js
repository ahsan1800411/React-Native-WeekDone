import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button, Modal } from 'react-native';

export default function BaseInput({ onPressHandler, visible, endModal }) {
    const [enteredGoal, setEnteredGoal] = useState('');

    function changeHandler(text) {
        setEnteredGoal(text);
    }
    return (
        <Modal animationType='slide' visible={visible}>
            <View style={styles.add}>
                <TextInput
                    placeholder='Your Course Goals'
                    style={styles.textInput}
                    value={enteredGoal}
                    onChangeText={changeHandler}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button
                            title='Add'
                            onPress={() => {
                                onPressHandler(enteredGoal);
                                setEnteredGoal('');
                            }}
                        />
                    </View>
                    <View style={styles.button}>
                        <Button title='Cancel' color='red' onPress={endModal} />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    add: {
        flexDirection: 'column',
        justifyContent: 'center',
        marginBottom: 24,
        flex: 1,
        borderBottomColor: '#cccccc',
        borderBottomWidth: 2,
    },
    textInput: {
        borderWidth: 2,
        borderColor: '#cccccc',
        marginRight: 8,
        width: '100%',
        padding: 6,
        borderRadius: 12,
    },
    buttonContainer: {
        flexDirection: 'row',
    },
    button: {
        marginTop: 5,
        marginHorizontal: 5,
        width: '40%'
    },
});
