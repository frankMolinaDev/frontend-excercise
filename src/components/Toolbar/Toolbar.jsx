import {Button} from "antd";
import {UndoOutlined, RedoOutlined, DeleteOutlined, CloudUploadOutlined} from "@ant-design/icons";

import React from "react";
import {useSelector} from "react-redux";
import {chekMenuItemPosition} from "../../utils";

function Toolbar() {
    const {count, selectedHistoryItemKey} = useSelector((state) => state.history);
    const menuItemPosition = chekMenuItemPosition(selectedHistoryItemKey);
    const lastItemPosition = count - 1;

    const undoIsDisabled = menuItemPosition == 0;
    const redoIsDisabled = menuItemPosition == lastItemPosition;

    const handleUndo = () => {};
    const handleRedo = () => {};
    const handleDelete = () => {};
    const handleUpload = () => {};
    return (
        <div className={"toolbar-container"}>
            <Button onClick={handleUndo} disabled={undoIsDisabled} icon={<UndoOutlined />}></Button>
            <Button onClick={handleRedo} disabled={redoIsDisabled} icon={<RedoOutlined />}></Button>
            <Button onClick={handleDelete} icon={<DeleteOutlined />}></Button>
            <Button onClick={handleUpload} icon={<CloudUploadOutlined />}></Button>
        </div>
    );
}

export default Toolbar;
