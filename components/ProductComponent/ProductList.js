import React from 'react';
import { StyleSheet, View, ScrollView, FlatList } from 'react-native';
import ProductItem from './ProductItem';
import Dimensions from 'Dimensions';
import { connect } from 'react-redux';

const { height } = Dimensions.get('window');
class ProductList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        const { products } = this.props;
        products.then((data) => {
            this.setState({
                products: data
            })
        })
    }

    render() {
        const { products } = this.state;
        return (
            <ScrollView>
                <View style={styles.container}>
                    {products.map(product =>(
                        <ProductItem navigation={this.props.navigation} product={product} key={product._id} />
                    ))}
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
export default connect(mapStateToProps)(ProductList);