import React from "react";
import {Layout, Typography} from "antd";

const {Header} = Layout;
const {Text} = Typography;

function HeaderComponent() {
    return (
        <Header className="site-layout-background" style={{padding: 0}}>
            <Text strong style={{color: "white"}}>
                Here your URL!
            </Text>
        </Header>
    );
}

export default HeaderComponent;
