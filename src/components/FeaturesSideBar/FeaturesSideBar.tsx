import React, {useState} from "react";
import {Layout, Menu} from "antd";
import {items} from "./Items";
const {Sider} = Layout;
function FeaturesSideBar() {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline" items={items} />
        </Sider>
    );
}

export default FeaturesSideBar;
