/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from "react";
import {Layout, Menu} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {arrayToMenuItems, checkMenuItemType, getMenuItemProp} from "../../utils";
import {getImagesList} from "../../request/request";
import {HISTORY_ITEM, IMAGE_LIST_ITEM} from "../../constants";
import {
    updateDefaultImagesList,
    updateParams,
    updatePath,
    updateSelectedGalleryItem
} from "../../redux/slices/imageSlice";
import {updateSelectedHistoryItemKey} from "../../redux/slices/historySlice";

const {Sider} = Layout;

function FeaturesSideBar() {
    const [collapsed, setCollapsed] = useState(false);
    const dispatch = useDispatch();
    const {imagesList, selectedGalleryItem} = useSelector((state) => state.image);
    const {transformations, selectedHistoryItemKey} = useSelector((state) => state.history);
    const menuItems = [transformations, imagesList];

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
            <Menu
                theme="dark"
                defaultOpenKeys={["sub1", "sub2"]}
                selectedKeys={[selectedGalleryItem, selectedHistoryItemKey]}
                mode="inline"
                items={menuItems}
                onClick={onItemClick}
            />
        </Sider>
    );
}

export default FeaturesSideBar;
