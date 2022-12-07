import React from "react";
import {Col, InputNumber, Row, Slider} from "antd";

const ValueSlider = ({onChange, inputValue}) => {
    return (
        <Row>
            <Col span={12}>
                <Slider
                    min={-100}
                    max={100}
                    defaultValue={0}
                    onChange={onChange}
                    value={typeof inputValue === "number" ? inputValue : 0}
                />
            </Col>
            <Col span={4}>
                <InputNumber
                    min={-100}
                    max={100}
                    defaultValue={0}
                    value={inputValue}
                    onChange={onChange}
                />
            </Col>
        </Row>
    );
};

export default ValueSlider;
