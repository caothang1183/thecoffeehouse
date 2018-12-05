import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Dimensions from 'Dimensions';

const { height, width } = Dimensions.get('window');
export default class ProductDetail extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Product Detail {this.props.navigation.getParam('item')}</Text>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: height,
        width: width
    }
});