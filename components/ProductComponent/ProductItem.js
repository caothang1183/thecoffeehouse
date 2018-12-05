import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Dimensions from 'Dimensions';

const { height, width } = Dimensions.get('window');
export default class ProductItem extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.pdImage}
                    source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }} />
                <View style={styles.pdName}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Product Name</Text>
                    <Text style={{ fontStyle: 'italic' }}>Size Small(475ml)</Text>
                    <View style={styles.line} />
                    <View style={styles.pdDetail}>
                        <Text style={{ fontSize: 15, fontWeight: 'bold', flex: 2 }}> 50.000 đ</Text>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('ProductDetail', { item: 69 }) }}>
                            <Image style={styles.btnDetail} source={require('../../assets/images/button/plus.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    pdImage: {
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        width: (width / 2 - 7),
        height: (height / 4),
    },
    pdName: {
        margin: 10
    },
    line: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        paddingTop: 12
    },
    pdDetail: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 10
    },
    btnDetail: {
        marginRight: 10,
        height: 20,
        width: 20,
        justifyContent: 'center',
        alignItems: 'center'
    }
});