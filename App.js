import React from 'react';
import { BottomTabNavigator } from './navigator/BottomTabNavigator';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';

const store = createStore(rootReducer);
class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <BottomTabNavigator />
            </Provider>
        );
    }
}

export default App;
