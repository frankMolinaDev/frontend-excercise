import {Button} from "antd";
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {HISTORY_ITEM} from "../../../constants";
import {updateTransformationHistory} from "../../../redux/slices/historySlice";
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

        dispatch(
            updateTransformationHistory([
                ...transformations.children,
                getItem(
                    `${transformation.name} Change`,
                    `${HISTORY_ITEM}-${count}`,
                    undefined,
                    undefined,
                    params
                )
            ])
        );
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
