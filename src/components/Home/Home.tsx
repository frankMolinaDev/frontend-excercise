import React, {useState} from "react";
import {CopyOutlined, HistoryOutlined} from "@ant-design/icons";
import type {MenuProps} from "antd";
import {Breadcrumb, Layout, Menu} from "antd";
const {Header, Content, Footer, Sider} = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[]
): MenuItem {
    return {
        key,
        icon,
        children,
        label
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem("Copy to Clipboard", "1", <CopyOutlined />),
    getItem("History", "sub1", <HistoryOutlined />, [
        getItem("Change 1", "3"),
        getItem("Change 2", "4"),
        getItem("Change 3", "5")
    ])
];

function Home() {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Layout style={{minHeight: "100vh"}}>
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline" items={items} />
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{padding: 0}} />
                <Content style={{margin: "0 16px"}}>
                    <Breadcrumb style={{margin: "16px 0"}}>
                        <Breadcrumb.Item>First</Breadcrumb.Item>
                        <Breadcrumb.Item>Second</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error iusto
                        doloribus sint neque natus veritatis fuga eveniet consequuntur harum nemo
                        commodi odio eaque officia facilis, ipsum facere, repellat officiis? Non?
                    </div>
                </Content>
                <Footer style={{textAlign: "center"}}>
                    Francisco Molina ©2022 As part of Nan-Labs recruitment process
                </Footer>
            </Layout>
        </Layout>
    );
}

export default Home;
