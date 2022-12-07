import React, {useState} from "react";
import {Layout, Menu} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {getHistoryItemParams, getItem} from "../../utils";
import {updatePath} from "../../redux/slices/imageSlice";
import {generateNewTransformationImage} from "../../request/imgxUtils";
const {Sider} = Layout;

function FeaturesSideBar() {
    const [collapsed, setCollapsed] = useState(false);
    const dispatch = useDispatch();
    const {
        // path,
        params
    } = useSelector((state) => state.image);
    const {transformations} = useSelector((state) => state.history);
    const menuItems = [
        getItem("Copy to Clipboard!", 1),
        getItem("Add Image", 100),
        transformations
    ];

    const onItemClick = (e) => {
        switch (e.key) {
            case "1":
                break;
            case "100":
                dispatch(
                    updatePath(generateNewTransformationImage("/blog/unsplash-kiss.jpg", params))
                );
                break;

            default:
                console.log("params", getHistoryItemParams(e.key, transformations.children));
                dispatch(
                    updatePath(
                        generateNewTransformationImage(
                            "/blog/unsplash-kiss.jpg",
                            getHistoryItemParams(e.key, transformations.children)
                        )
                    )
                );
                break;
        }
    };
    return (
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
            <div className="logo" />
            <Menu
                theme="dark"
                defaultSelectedKeys={["1"]}
                mode="inline"
                items={menuItems}
                onClick={onItemClick}
            ></Menu>
        </Sider>
    );
}

export default FeaturesSideBar;
