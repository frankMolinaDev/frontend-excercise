import React, {useState} from "react";
import {Layout, Menu} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {getItem} from "../../utils";
import {updateTransformationHistory} from "../../redux/slices/historySlice";
const {Sider} = Layout;

function FeaturesSideBar() {
    const [collapsed, setCollapsed] = useState(false);
    const dispatch = useDispatch();

    const {transformations, count} = useSelector((state) => state.history);
    const menuItems = [getItem("Copy to Clipboard!", 1), transformations];

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
