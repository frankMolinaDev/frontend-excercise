import React, {useMemo} from "react";
import {Button, Layout, Typography, notification} from "antd";
import {useSelector} from "react-redux";
import {CopyOutlined} from "@ant-design/icons";
import {generateNewTransformationImage} from "../../request/imgxUtils";
import CompanyLogo from "../Icons/CompanyLogo";

const {Header} = Layout;
const {Text} = Typography;

const Context = React.createContext({
    name: "Default"
});

const HeaderComponent = () => {
    const {path, params} = useSelector((state) => state.image);
    const [api, contextHolder] = notification.useNotification();
    const imageURL = generateNewTransformationImage(path, params);

    const contextValue = useMemo(
        () => ({
            name: "Ant Design"
        }),
        []
    );

    const handleCopytoClipboard = () => {
        navigator.clipboard.writeText(imageURL).then(function () {
            openNotification("topLeft");
        });
    };

    const openNotification = () => {
        api.info({
            message: `URL copied to clipboard`,
            duration: 2
        });
    };

    return (
        <Header className="site-layout-background">
            <div className="company-logo-container">
                <CompanyLogo />
            </div>
            <div className="header-elements-container">
                <Context.Provider value={contextValue}>
                    {contextHolder}
                    {path && (
                        <Button
                            onClick={handleCopytoClipboard}
                            type="primary"
                            icon={<CopyOutlined />}
                        >
                            Copy to clipboard!
                        </Button>
                    )}
                </Context.Provider>
                <Text strong code className="header-url-text">
                    {path ? imageURL : "Here your URL!"}
                </Text>
            </div>
        </Header>
    );
};

export default HeaderComponent;
