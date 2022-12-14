import {Button} from "antd";
import {UndoOutlined, RedoOutlined, DeleteOutlined, CloudUploadOutlined} from "@ant-design/icons";

import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {chekMenuItemPosition, getMenuItemProp, isLastHistoryElement} from "../../utils";
import {
    updateSelectedHistoryItemKey,
    updateTransformationHistory
} from "../../redux/slices/historySlice";
import {HISTORY_ITEM} from "../../constants";
import {cleanPathAndParams, updateParams} from "../../redux/slices/imageSlice";

function Toolbar() {
    const {selectedHistoryItemKey, transformations} = useSelector((state) => state.history);
    const dispatch = useDispatch();

    const menuItemPosition = chekMenuItemPosition(selectedHistoryItemKey);

    const undoIsDisabled = menuItemPosition === 0;
    const redoIsDisabled = isLastHistoryElement(selectedHistoryItemKey, transformations.children);

    const handleUndo = () => {
        const newSelectedHistoryItemKey = `${HISTORY_ITEM}-${menuItemPosition - 1}`;
        dispatch(updateSelectedHistoryItemKey(newSelectedHistoryItemKey));
        dispatch(
            updateParams(getMenuItemProp(newSelectedHistoryItemKey, transformations.children))
        );
    };
    const handleRedo = () => {
        const newSelectedHistoryItemKey = `${HISTORY_ITEM}-${menuItemPosition + 1}`;
        dispatch(updateSelectedHistoryItemKey(newSelectedHistoryItemKey));
        dispatch(
            updateParams(getMenuItemProp(newSelectedHistoryItemKey, transformations.children))
        );
    };

    const handleDelete = () => {
        const newSelectedHistoryItemKey =
            menuItemPosition === 0
                ? `${HISTORY_ITEM}-${menuItemPosition + 1}`
                : `${HISTORY_ITEM}-${menuItemPosition - 1}`;

        const newTransformations = transformations.children.filter(
            (transformation) => transformation.key !== selectedHistoryItemKey
        );

        dispatch(updateTransformationHistory(newTransformations));
        if (newTransformations.length === 0) {
            dispatch(cleanPathAndParams());
            dispatch(updateSelectedHistoryItemKey(null));
        } else {
            dispatch(
                updateParams(getMenuItemProp(newSelectedHistoryItemKey, transformations.children))
            );
            dispatch(updateSelectedHistoryItemKey(newSelectedHistoryItemKey));
        }
    };

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
