import { Pressable, StyleSheet, Text, } from 'react-native';
import React from 'react';

export default function BaseItem({ item, handlePress }) {
    return (
        <Pressable style={({ pressed }) => pressed && styles.ripple}>
            <Text onPress={() => {
                handlePress(item);
            }} style={styles.goalItem} >
                {item}
            </Text>
        </Pressable>

    );
}

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        padding: 8,
        backgroundColor: 'blue',
        color: 'white',
    },
    ripple: {
        opacity: 0.5
    }
});
