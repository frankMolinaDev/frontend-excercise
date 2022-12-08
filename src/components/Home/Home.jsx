import React from "react";
import {Layout} from "antd";
import FeaturesSideBar from "../FeaturesSideBar/FeaturesSideBar";
import Header from "../Header/Header";
import OptionsTabs from "../OptionsTabs/OptionsTabs";
import {useSelector} from "react-redux";
import PreviewImage from "../PreviewImage/PreviewImage";
import {generateNewTransformationImage} from "../../request/imgxUtils";
import UploadImage from "../UploadImage/UploadImage";

const {Content, Footer} = Layout;

function Home() {
    const {path, params} = useSelector((state) => state.image);
    const imageURL = generateNewTransformationImage(path, params);
    return (
        <Layout>
            <Header />
            <Layout className="site-layout">
                <FeaturesSideBar />
                <Content className="content">
                    {imageURL ? <PreviewImage path={imageURL} /> : <UploadImage />}
                    <OptionsTabs />
                    <Footer className="footer">
                        Francisco Molina ©2022 As part of Nan-Labs recruitment process
                    </Footer>
                </Content>
            </Layout>
        </Layout>
    );
}

export default Home;
