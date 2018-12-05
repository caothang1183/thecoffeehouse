import React from 'react';
import { StyleSheet, View, Text, Platform, StatusBar } from 'react-native';

export default class SettingsComponent extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Settings Screen</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
});
