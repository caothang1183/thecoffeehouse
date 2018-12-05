import React from 'react';
import { StyleSheet, View, ScrollView, Text, Platform, StatusBar } from 'react-native';
import ProductItem from './ProductItem';
import Dimensions from 'Dimensions';

const { height, width } = Dimensions.get('window');
class ProductComponent extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerContent}>
                    <Text style={styles.header}>Product List</Text>
                </View>
                <ScrollView>
                    <View style={styles.content}>
                        <View style={styles.itemContent}>
                            <ProductItem navigation={this.props.navigation}/>
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
        paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
        flexWrap: 'wrap',
        backgroundColor: '#cccccc',
        width: width,
        height: height
    },
    headerContent: {
        height: 50,
        width: width,
        backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center'
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    content: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row'
    },
    itemContent: {
        alignItems: 'center',
        backgroundColor: 'white',
        marginTop: 5,
        marginLeft: 3,
        marginRight: 3,
        borderRadius: 15,
        width: (width / 2) - 7,
        height: height * 0.45
    }
});

export default ProductComponent;