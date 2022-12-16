import {Button, Tooltip} from "antd";
import {UndoOutlined, RedoOutlined, DeleteOutlined, ExpandOutlined} from "@ant-design/icons";

import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {chekMenuItemPosition, getMenuItemProp, isLastHistoryElement} from "../../utils";
import {
    updateSelectedHistoryItemKey,
    updateTransformationHistory
} from "../../redux/slices/historySlice";
import {HISTORY_ITEM} from "../../constants";
import {cleanPathAndParams, showFullImageView, updateParams} from "../../redux/slices/imageSlice";
import {DELETE_PROMPT, EXPAND_PROMPT, REDO_PROMPT, UNDO_PROMPT} from "../../prompts";

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

    const handleExpand = () => {
        dispatch(showFullImageView());
    };

    return (
        <div className={"toolbar-container"}>
            <Tooltip title={UNDO_PROMPT} placement={"bottomLeft"}>
                <Button
                    onClick={handleUndo}
                    disabled={undoIsDisabled}
                    icon={<UndoOutlined />}
                ></Button>
            </Tooltip>

            <Tooltip title={REDO_PROMPT} placement={"bottomLeft"}>
                <Button
                    onClick={handleRedo}
                    disabled={redoIsDisabled}
                    icon={<RedoOutlined />}
                ></Button>
            </Tooltip>

            <Tooltip title={DELETE_PROMPT} placement={"bottomLeft"}>
                <Button onClick={handleDelete} icon={<DeleteOutlined />}></Button>
            </Tooltip>

            <Tooltip title={EXPAND_PROMPT} placement={"bottomLeft"}>
                <Button onClick={handleExpand} icon={<ExpandOutlined />}></Button>
            </Tooltip>
        </div>
    );
}

export default Toolbar;
