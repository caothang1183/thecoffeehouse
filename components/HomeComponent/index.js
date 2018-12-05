import React from 'react';
import { StyleSheet, View, Text, Platform, StatusBar } from 'react-native';
import { Font, AppLoading } from 'expo';

export default class HomeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loading: true };
    }

    async componentDidMount() {
        await Font.loadAsync({
            'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
        }).then(()=>{
            this.setState({ loading: false });
        })
    }

    render() {
        if (this.state.loading) {
            return <AppLoading />;
        }
        return (
            <View style={styles.container}>
                <Text>Home Screen</Text>
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
        justifyContent: 'center',
        fontFamily: 'Poppins-Bold'
    },
});
