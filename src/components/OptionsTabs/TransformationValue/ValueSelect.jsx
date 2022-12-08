import React from "react";
import {Select} from "antd";

const ValueSelect = ({onChange, inputValue, values}) => {
    return (
        <Select
            defaultValue={values[0]}
            value={inputValue}
            className={"select"}
            onChange={onChange}
            options={values}
        />
    );
};

export default ValueSelect;
