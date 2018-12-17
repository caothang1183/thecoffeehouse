import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Dimensions from 'Dimensions';

const { height, width } = Dimensions.get('window');
export default class ProductDetail extends React.Component {
    render() {
        const item = this.props.navigation.getParam('item');
        return (
            <View style={styles.container}>
                <Text>Product Detail {item._id}</Text>
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