import {Button} from "antd";
import {UndoOutlined, RedoOutlined, DeleteOutlined, CloudUploadOutlined} from "@ant-design/icons";

import React from "react";
import {useSelector} from "react-redux";
import {chekMenuItemPosition} from "../../utils";

function Toolbar() {
    const {count, transformations, selectedHistoryItemKey} = useSelector((state) => state.history);

    const undoIsDisabled = count === 0 || chekMenuItemPosition(selectedHistoryItemKey) === 0;
    const redoIsDisabled = count !== transformations.children.length + 1 && count === 0;
    console.log("count", count);
    console.log("transformations", transformations);
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
