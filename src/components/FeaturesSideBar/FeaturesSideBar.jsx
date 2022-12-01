import React, {useState} from "react";
import {
    // Button,
    Layout,
    Menu
} from "antd";
import {increment} from "../../redux/slices/counterSlice";
import {useDispatch, useSelector} from "react-redux";
import {items} from "./Items";

const {Sider} = Layout;

function FeaturesSideBar() {
    const [collapsed, setCollapsed] = useState(false);
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    const onItemClick = () => {
        dispatch(increment());
        console.log(count);
    };
    return (
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
            <div className="logo" />
            <Menu
                theme="dark"
                defaultSelectedKeys={["1"]}
                mode="inline"
                items={items}
                onClick={onItemClick}
            ></Menu>
        </Sider>
    );
}

export default FeaturesSideBar;
