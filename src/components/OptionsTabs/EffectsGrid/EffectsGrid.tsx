import React from "react";
import {Button, Row, Col} from "antd";

function EffectsGrid({effects}) {
    return (
        <>
            <Row gutter={[16, 16]}>
                {effects.map((effect, i) => {
                    return (
                        <Col key={"A" + i} span={6}>
                            <Button
                                type="primary"
                                shape="round"
                                size="large"
                                style={{minHeight: 35, width: "100%"}}
                            >
                                {effect.name}
                            </Button>
                        </Col>
                    );
                })}
            </Row>
        </>
    );
}

export default EffectsGrid;
