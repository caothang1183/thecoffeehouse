import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import ProductItem from './ProductItem';
import Dimensions from 'Dimensions';
import axiosCaller from '../../utils/axiosCaller';

const { height } = Dimensions.get('window');
class ProductComponent extends React.Component {

    componentDidMount() {
        return axiosCaller('products', 'GET', null)
            // .then((response) => response.json())
            .then((responseJson) => {
                return console.log(responseJson);
            })
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <ProductItem navigation={this.props.navigation} />
                    <ProductItem navigation={this.props.navigation} />
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#cccccc',
        padding: 5,
        height: height
    },
    
});

export default ProductComponent;