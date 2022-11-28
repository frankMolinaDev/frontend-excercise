import React from "react";
import {Layout} from "antd";
import FeaturesSideBar from "components/FeaturesSideBar/FeaturesSideBar";
import Header from "components/Header/Header";
import OptionsTabs from "components/OptionsTabs/OptionsTabs";
const {Content, Footer} = Layout;

function Home() {
    return (
        <Layout style={{minHeight: "100vh"}}>
            <FeaturesSideBar />
            <Layout className="site-layout">
                <Header />
                <Content style={{margin: "0 16px"}}>
                    <div>
                        <picture>
                            <img src="https://assets.imgix.net/blog/unsplash-kiss.jpg?w=320&h=568&fit=crop" />
                        </picture>
                    </div>

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
