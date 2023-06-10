import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppNavigation from './src/navigation/AppNavigation'
import { createStore } from 'redux';
import rootReducer from './src/redux/store/rootReducer';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { persistor } from './src/redux/store/configureStore';
import { configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger'


const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
const App = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>

                <AppNavigation />
            </PersistGate>
        </Provider>
    )
}

export default App

const styles = StyleSheet.create({})