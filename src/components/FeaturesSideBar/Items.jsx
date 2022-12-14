import React from "react";
import {HistoryOutlined, PictureOutlined} from "@ant-design/icons";
import {getItem} from "../../utils";

export const historyItems = getItem("History", "sub1", <HistoryOutlined />, []);
export const galleryItems = getItem("Gallery", "sub2", <PictureOutlined />, []);
