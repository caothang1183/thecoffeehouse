import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Dimensions from 'Dimensions';

const { height, width } = Dimensions.get('window');
export default class ProductItem extends React.Component {

    render() {
        return (
            <View style={styles.itemContent}>
                <View style={styles.container}>
                    <View style={styles.pdImage}>
                        <Image style={styles.image} source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }} />
                    </View>
                    <View style={styles.pdDetail}>
                        <View style={styles.pdName}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', paddingTop: 10 }}>Product Name</Text>
                            <Text style={{ fontStyle: 'italic' }}>Size Small(475ml)</Text>
                        </View>
                        <View style={styles.line} />
                        <View style={styles.pdPrice}>
                            <Text style={{ fontSize: 15, fontWeight: 'bold', flex: 2 }}> 50.000 đ</Text>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('ProductDetail', { item: 69 }) }}>
                                <Image style={styles.btnDetail} source={require('../../assets/images/button/plus.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    itemContent: {
        backgroundColor: 'white',
        borderRadius: 15,
        height: height * 0.35,
        margin: 7.5
    },
    container: {
        flex: 1,
    },
    pdImage: {
        flex: 3,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        width: (width / 2) - 20,
    },
    image: {
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        height: '100%',
    },
    pdDetail: {
        flex: 2,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    },
    pdName: {
        flex: 1,
        paddingLeft: 10,
    },
    line: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        padding: 10,
    },
    pdPrice: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 10,
        paddingLeft: 10
    },
    btnDetail: {
        marginRight: 10,
        height: 20,
        width: 20,
        justifyContent: 'center',
        alignItems: 'center'
    }
});


// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     },
//     pdImage: {
//         flex: 1,
//         borderTopLeftRadius: 15,
//         borderTopRightRadius: 15,
//         width: (width / 2 - 7),
//         height: (height / 4),
//     },
//     pdName: {
//         margin: 10
//     },
//     line: {
//         borderBottomColor: '#ccc',
//         borderBottomWidth: 1,
//         paddingTop: 12
//     },
//     pdDetail: {
//         flex: 1,
//         flexDirection: 'row',
//         marginTop: 10
//     },
//     btnDetail: {
//         marginRight: 10,
//         height: 20,
//         width: 20,
//         justifyContent: 'center',
//         alignItems: 'center'
//     }
// });