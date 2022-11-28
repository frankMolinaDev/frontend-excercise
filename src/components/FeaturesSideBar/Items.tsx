import React from "react";
import {CopyOutlined, HistoryOutlined, PictureOutlined} from "@ant-design/icons";
import type {MenuProps} from "antd";

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

export const items: MenuItem[] = [
    getItem("Copy to Clipboard", "1", <CopyOutlined />),
    getItem("Images", "sub1", <PictureOutlined />, [
        getItem("Image 1", "3"),
        getItem("Image 2", "4"),
        getItem("Image 3", "5")
    ]),
    getItem("History", "sub2", <HistoryOutlined />, [
        getItem("Change 1", "6"),
        getItem("Change 2", "7"),
        getItem("Change 3", "8")
    ])
];
