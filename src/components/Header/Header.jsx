import React from "react";
import {Layout, Typography} from "antd";
import {useSelector} from "react-redux";

const {Header} = Layout;
const {Text} = Typography;

function HeaderComponent() {
    const path = useSelector((state) => state.image.path);

    return (
        <Header className="site-layout-background" style={{padding: 0}}>
            <Text strong style={{color: "white"}}>
                {path ? path : "Here your URL!"}
            </Text>
        </Header>
    );
}

export default HeaderComponent;
