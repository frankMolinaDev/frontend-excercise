import React from "react";
import {Typography} from "antd";

const {Title} = Typography;

const UploadImage = () => {
    return (
        <div className="picture-container">
            <Title level={2}>Select an image from the list to get started</Title>
        </div>
    );
};

export default UploadImage;
