import React, {useState} from "react";
import {Layout, Menu} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {getItem} from "../../utils";
import {updateTransformationHistory} from "../../redux/slices/historySlice";
import {updatePath} from "../../redux/slices/imageSlice";
const {Sider} = Layout;

function FeaturesSideBar() {
    const [collapsed, setCollapsed] = useState(false);
    const dispatch = useDispatch();

    const {transformations, count} = useSelector((state) => state.history);
    const menuItems = [
        getItem("Copy to Clipboard!", 1),
        getItem("Add Image", 100),
        transformations
    ];

    const onItemClick = (e) => {
        switch (e.key) {
            case "1":
                dispatch(
                    updateTransformationHistory([
                        ...transformations.children,
                        getItem(`New Change ${count - 1}`, count)
                    ])
                );
                break;
            case "100":
                dispatch(
                    updatePath(
                        "https://assets.imgix.net/blog/unsplash-kiss.jpg?w=1200&h=2500&fit=crop"
                    )
                );
                break;

            default:
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
