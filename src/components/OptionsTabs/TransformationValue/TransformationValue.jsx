import {Button} from "antd";
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {HISTORY_ITEM} from "../../../constants";
import {
    updateSelectedHistoryItemKey,
    updateTransformationHistory
} from "../../../redux/slices/historySlice";
import {updateParams} from "../../../redux/slices/imageSlice";
import {getItem, stringArrToLabelValueObjArr} from "../../../utils";
import ValueSelect from "./ValueSelect";
import ValueSlider from "./ValueSlider";

function TransformationValue({transformation, type}) {
    const dispatch = useDispatch();
    const {params} = useSelector((state) => state.image);
    const {transformations, count} = useSelector((state) => state.history);

    const [inputValue, setInputValue] = useState();
    const {id, values} = transformation;
    const formattedValues = stringArrToLabelValueObjArr(values || []);

    const handleChange = (newValue) => {
        setInputValue(newValue);
    };

    const renderSlider = type === "slider";

    const applyTransformation = () => {
        const newParams = {...params, [id]: inputValue};
        const newTransformations = [...transformations.children];
        const historyItemKey = `${HISTORY_ITEM}-${count}`;
        const isHistoryEmpty = transformations.children.length === 0;

        if (count === 1 && isHistoryEmpty) {
            newTransformations.push(
                getItem(`Original`, `${HISTORY_ITEM}-0`, undefined, undefined, {})
            );
        }

        newTransformations.push(
            getItem(
                `${transformation.name} Change`,
                historyItemKey,
                undefined,
                undefined,
                newParams
            )
        );

        dispatch(updateTransformationHistory(newTransformations));
        dispatch(updateSelectedHistoryItemKey(historyItemKey));
        dispatch(updateParams(newParams));
    };

    return (
        <div>
            {renderSlider ? (
                <ValueSlider onChange={handleChange} inputValue={inputValue} />
            ) : (
                <ValueSelect
                    onChange={handleChange}
                    inputValue={inputValue}
                    values={formattedValues}
                />
            )}
            <Button onClick={applyTransformation}>Apply</Button>
        </div>
    );
}

export default TransformationValue;
