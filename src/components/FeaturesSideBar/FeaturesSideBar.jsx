/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from "react";
import {Layout, Menu, Spin} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {checkMenuItemType, getMenuItemProp} from "../../utils";
import {HISTORY_ITEM, IMAGE_LIST_ITEM} from "../../constants";
import {
    getImages,
    updateParams,
    updatePath,
    updateSelectedGalleryItem
} from "../../redux/slices/imageSlice";
import {updateSelectedHistoryItemKey} from "../../redux/slices/historySlice";

const {Sider} = Layout;

function FeaturesSideBar() {
    const [collapsed, setCollapsed] = useState(false);
    const dispatch = useDispatch();
    const {imagesList, selectedGalleryItem, loading} = useSelector((state) => state.image);
    const {transformations, selectedHistoryItemKey} = useSelector((state) => state.history);
    const menuItems = [transformations, imagesList];

    useEffect(() => {
        dispatch(getImages());
    }, []);

    const onItemClick = (e) => {
        switch (checkMenuItemType(e.key)) {
            case HISTORY_ITEM:
                dispatch(updateParams(getMenuItemProp(e.key, transformations.children)));
                dispatch(updateSelectedHistoryItemKey(e.key));
                break;
            case IMAGE_LIST_ITEM:
                dispatch(updatePath(getMenuItemProp(e.key, imagesList.children)));
                dispatch(updateSelectedGalleryItem(e.key));
                break;
        }
    };
    return (
        <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
            className={"sidebar"}
        >
            <Spin spinning={loading} tip={"Loading..."} size={"large"}>
                <Menu
                    theme="dark"
                    defaultOpenKeys={["sub1", "sub2"]}
                    selectedKeys={[selectedGalleryItem, selectedHistoryItemKey]}
                    mode="inline"
                    items={menuItems}
                    onClick={onItemClick}
                />
            </Spin>
        </Sider>
    );
}

export default FeaturesSideBar;
