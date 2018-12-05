import { createStackNavigator } from 'react-navigation';
import HomeComponent from '../components/HomeComponent/index';
import RegisterComponent from '../components/AccountComponent/RegisterComponent';
import ProductComponent from '../components/ProductComponent/index';
import ProductDetail from '../components/ProductComponent/ProductDetail';
import AccountComponent from '../components/AccountComponent/index';
import SettingsComponent from '../components/SettingsComponent/index';

export const HomeStack = createStackNavigator({
    Home: {
        screen: HomeComponent,
        navigationOptions: {
            headerMode: 'none',
            header: null
        }
    }
    
});

export const ProductStack = createStackNavigator({
    Product: {
        screen: ProductComponent,
        navigationOptions: {
            headerMode: 'none',
            header: null
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
    Account: {
        screen: AccountComponent,
        navigationOptions: {
            headerMode: 'none',
            header: null
        }
    },
    Register: {
        screen: RegisterComponent,
        navigationOptions: {
            headerMode: 'none'
        }
    }
});

export const SettingsStack = createStackNavigator({
    Settings: {
        screen: SettingsComponent,
        navigationOptions: {
            title: 'Settings',
            headerMode: 'none',
            headerStyle: {
                backgroundColor: 'orange'
            },
        }
    }
});