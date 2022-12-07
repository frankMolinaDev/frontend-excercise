import {Button} from "antd";
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateTransformationHistory} from "../../../redux/slices/historySlice";
import {updateParams, updatePath} from "../../../redux/slices/imageSlice";
import {generateNewTransformationImage} from "../../../request/imgxUtils";
import {getItem} from "../../../utils";
import ValueSlider from "./ValueSlider";

function TransformationValue({transformation, type}) {
    const dispatch = useDispatch();
    const {params} = useSelector((state) => state.image);
    const {transformations, count} = useSelector((state) => state.history);

    const [inputValue, setInputValue] = useState(1);

    const onChange = (newValue) => {
        setInputValue(newValue);
    };

    const renderSlider = type === "slider";

    const applyTransformation = () => {
        const newParams = {...params, [transformation.id]: inputValue};
        console.log("newParams", newParams);
        console.log("params", params);

        dispatch(
            updateTransformationHistory([
                ...transformations.children,
                getItem(`${transformation.name} Change`, count, undefined, undefined, params)
            ])
        );
        dispatch(updatePath(generateNewTransformationImage("/blog/unsplash-kiss.jpg", newParams)));
        dispatch(updateParams(newParams));
    };

    return (
        <div>
            {renderSlider && <ValueSlider onChange={onChange} inputValue={inputValue} />}
            <Button onClick={applyTransformation}>Apply</Button>
        </div>
    );
}

export default TransformationValue;
