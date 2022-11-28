import React from "react";
import {CopyOutlined, HistoryOutlined, PictureOutlined} from "@ant-design/icons";
import {getImagesList} from "src/request/request";

function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label
    };
}

const getImageItems = async () => {
    const imagesList = await getImagesList();

    return imagesList.map((imageData) => {
        const {name, url} = imageData;
        return getItem(name, name, undefined, url);
    });
};

export const items = [
    getItem("Copy to Clipboard", "1", <CopyOutlined />, undefined),
    getItem("Images", "sub1", <PictureOutlined />, getImageItems()),
    getItem("History", "sub2", <HistoryOutlined />, [
        getItem("Change 1", "6", undefined, undefined),
        getItem("Change 2", "7", undefined, undefined),
        getItem("Change 3", "8", undefined, undefined)
    ])
];
