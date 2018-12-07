import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import ProductItem from './ProductItem';
import Dimensions from 'Dimensions';
import axiosCaller from '../../utils/axiosCaller';

const { height, width } = Dimensions.get('window');
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
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.content}>
                        <View style={styles.itemContent}>
                            <ProductItem navigation={this.props.navigation} />
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexWrap: 'wrap',
        backgroundColor: '#cccccc',
        width: width,
        height: height
    },
    content: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row'
    },
    itemContent: {
        alignItems: 'center',
        backgroundColor: 'white',
        marginTop: 10,
        marginLeft: 3,
        marginRight: 3,
        borderRadius: 15,
        width: (width / 2) - 7,
        height: height * 0.4
    }
});

export default ProductComponent;