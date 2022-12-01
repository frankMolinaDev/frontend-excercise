import React from "react";
import {CopyOutlined, HistoryOutlined} from "@ant-design/icons";

export function getItem(label, key, icon = null, children = null) {
    return {
        key,
        icon,
        children,
        label
    };
}

export const items = [
    getItem("Copy to Clipboard", "1", <CopyOutlined />, undefined),
    getItem("History", "sub2", <HistoryOutlined />, [
        getItem("Change 1", "6"),
        getItem("Change 2", "7"),
        getItem("Change 3", "8")
    ])
];
