import { LogBox, StyleSheet, Text, View } from "react-native";
import React from "react";
import AppNavigation from "./src/navigation/AppNavigation";
import { createStore } from "redux";
import rootReducer from "./src/redux/store/rootReducer";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { persistor, store } from "./src/redux/store/configureStore";

LogBox.ignoreAllLogs();
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate
        loading={null}
        persistor={persistor}>
        <AppNavigation />
      </PersistGate>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
