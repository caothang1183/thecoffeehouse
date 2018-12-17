import React from 'react';
import { StyleSheet, View, Text, Platform, StatusBar } from 'react-native';
import { AppLoading } from 'expo';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { initProduct } from '../../actions/ProductAction';

class HomeComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = { loading: true };
    }

    componentWillMount() {
        this.props.initProduct();
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
        paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Poppins-Bold'
    },
});

export default connect(mapStateToProps, mapActionsToProps)(HomeComponent);
