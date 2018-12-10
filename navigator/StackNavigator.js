import { createStackNavigator } from 'react-navigation';
import Home from '../components/HomeComponent/index';
import ProductList from '../components/ProductComponent/ProductList';
import ProductDetail from '../components/ProductComponent/ProductDetail';
import Register from '../components/AccountComponent/Register';
import Login from '../components/AccountComponent/Login';
import Settings from '../components/SettingsComponent/index';

export const HomeStack = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            headerMode: 'none',
            header: null
        }
    }
    
});

export const ProductStack = createStackNavigator({
    Product: {
        screen: ProductList,
        navigationOptions: {
            headerMode: 'none',
            title: 'Product List',
            headerStyle: {
                backgroundColor: 'orange'
            },
        }
    },
    ProductDetail: {
        screen: ProductDetail,
        navigationOptions: {
            headerMode: 'none',
            title: 'Product Detail',
            headerStyle: {
                backgroundColor: 'orange'
            },
        }
    }
});


export const AccountStack = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            headerMode: 'none',
            header: null
        }
    },
    Register: {
        screen: Register,
        navigationOptions: {
            headerMode: 'none'
        }
    }
});

export const SettingsStack = createStackNavigator({
    Settings: {
        screen: Settings,
        navigationOptions: {
            title: 'Settings',
            headerMode: 'none',
            headerStyle: {
                backgroundColor: 'orange'
            },
        }
    }
});