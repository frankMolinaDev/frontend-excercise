import React from "react";
import {CopyOutlined, HistoryOutlined} from "@ant-design/icons";
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
    getItem("History", "sub1", <HistoryOutlined />, [
        getItem("Change 1", "3"),
        getItem("Change 2", "4"),
        getItem("Change 3", "5")
    ])
];
