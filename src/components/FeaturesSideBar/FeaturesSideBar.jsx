/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from "react";
import {Layout, Menu} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {arrayToMenuItems, checkMenuItemType, getItem, getMenuItemProp} from "../../utils";
import {getImagesList} from "../../request/request";
import {HISTORY_ITEM, IMAGE_LIST_ITEM} from "../../constants";
import {updateDefaultImagesList, updateParams, updatePath} from "../../redux/slices/imageSlice";

const {Sider} = Layout;

function FeaturesSideBar() {
    const [collapsed, setCollapsed] = useState(false);
    const dispatch = useDispatch();
    const {imagesList} = useSelector((state) => state.image);
    const {transformations} = useSelector((state) => state.history);
    const menuItems = [getItem("Copy to Clipboard!", 1), transformations, imagesList];

    useEffect(() => {
        const fetchImagesList = async () => {
            const resp = await getImagesList();
            dispatch(updateDefaultImagesList(arrayToMenuItems(resp)));
        };
        fetchImagesList();
    }, []);

    const onItemClick = (e) => {
        switch (checkMenuItemType(e.key)) {
            case HISTORY_ITEM:
                dispatch(updateParams(getMenuItemProp(e.key, transformations.children)));
                break;
            case IMAGE_LIST_ITEM:
                dispatch(updatePath(getMenuItemProp(e.key, imagesList.children)));
                break;
        }
    };
    return (
        <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
            style={{
                overflow: "auto",
                height: "100vh"
            }}
        >
            <Menu
                theme="dark"
                defaultSelectedKeys={["1"]}
                mode="inline"
                items={menuItems}
                onClick={onItemClick}
            />
        </Sider>
    );
}

export default FeaturesSideBar;
