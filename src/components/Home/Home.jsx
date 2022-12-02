import React from "react";
import {Layout} from "antd";
import FeaturesSideBar from "../FeaturesSideBar/FeaturesSideBar";
import Header from "../Header/Header";
import OptionsTabs from "../OptionsTabs/OptionsTabs";
import {useSelector} from "react-redux";
import PreviewImage from "../PreviewImage/PreviewImage";

const {Content, Footer} = Layout;

function Home() {
    const path = useSelector((state) => state.image.path);
    return (
        <Layout style={{minHeight: "calc(100vh - 18px)"}}>
            <FeaturesSideBar />
            <Layout className="site-layout">
                <Header />
                <Content style={{margin: "0 16px", display: "flex", flexDirection: "column"}}>
                    <PreviewImage path={path} />
                    <OptionsTabs />
                </Content>
                <Footer style={{textAlign: "center"}}>
                    Francisco Molina ©2022 As part of Nan-Labs recruitment process
                </Footer>
            </Layout>
        </Layout>
    );
}

export default Home;
