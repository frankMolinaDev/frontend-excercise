import React, {useState} from "react";
import {Layout, Menu} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {getHistoryItemParams, getItem} from "../../utils";
import {updateTransformationHistory} from "../../redux/slices/historySlice";
import {updateParams, updatePath} from "../../redux/slices/imageSlice";
import {generateNewTransformationImage} from "../../request/imgxUtils";
const {Sider} = Layout;

function FeaturesSideBar() {
    const [collapsed, setCollapsed] = useState(false);
    const dispatch = useDispatch();
    const {
        // path,
        params
    } = useSelector((state) => state.image);
    const {transformations, count} = useSelector((state) => state.history);
    const menuItems = [
        getItem("Copy to Clipboard!", 1),
        getItem("Add Image", 100),
        getItem("Change width and height", 1000),
        transformations
    ];

    console.log("transformations", transformations);
    const onItemClick = (e) => {
        switch (e.key) {
            case "1":
                dispatch(
                    updateTransformationHistory([
                        ...transformations.children,
                        getItem(`New Change ${count - 1}`, count, undefined, undefined, {
                            hello: "world"
                        })
                    ])
                );
                break;
            case "100":
                dispatch(
                    updatePath(generateNewTransformationImage("/blog/unsplash-kiss.jpg", params))
                );
                break;

            case "1000":
                dispatch(
                    updateTransformationHistory([
                        ...transformations.children,
                        getItem(`New Change ${count - 1}`, count, undefined, undefined, params)
                    ])
                );
                dispatch(
                    updatePath(
                        generateNewTransformationImage("/blog/unsplash-kiss.jpg", {w: 100, h: 100})
                    )
                );
                dispatch(updateParams({w: 100, h: 100}));
                break;

            default:
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
