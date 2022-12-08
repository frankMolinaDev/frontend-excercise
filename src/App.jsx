import React from "react";
import Home from "./components/Home/Home";
import "antd/dist/reset.css";
import {ConfigProvider, theme} from "antd";
import {Provider} from "react-redux";
import {store} from "./redux/store";
import "./styles/theme.css";

const App = () => (
    <ConfigProvider
        theme={{
            algorithm: theme.compactAlgorithm,
            token: {
                fontFamily: "'Open Sans', sans-serif",
                colorPrimary:
                    "linear-gradient(87.49deg, rgb(111, 100, 245) 0.6%, rgb(206, 73, 207) 48.69%, rgb(244, 111, 102) 98.83%) text"
            }
        }}
    >
        <Provider store={store}>
            <Home />
        </Provider>
    </ConfigProvider>
);

export default App;
