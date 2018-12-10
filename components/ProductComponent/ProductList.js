import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import ProductItem from './ProductItem';
import Dimensions from 'Dimensions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { initProduct } from '../../actions/ProductAction';

const { height } = Dimensions.get('window');
class ProductList extends React.Component {

    componentDidMount() {
        this.props.initProduct();
    }


    render() {
        console.log(this.props.products)
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

function mapStateToProps(state) {
    return {
        products: state.products
    }
}

function mapActionsToProps(dispatch) {
    return bindActionCreators({
        initProduct,
    }, dispatch);
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
export default connect(mapStateToProps, mapActionsToProps)(ProductList);