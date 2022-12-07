import React, {useState} from "react";
import {Button, Row, Col, Drawer} from "antd";
import TransformationValue from "../TransformationValue/TransformationValue";
import {useSelector} from "react-redux";

function TransformationsGrid({transformations, type}) {
    const [open, setOpen] = useState(false);
    const [currentTransf, setCurrentTransf] = useState(false);
    const path = useSelector((state) => state.image.path);
    const disableOptions = path === "";

    const showDrawer = (transformation) => {
        setCurrentTransf(transformation);
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Drawer
                title={currentTransf?.name}
                placement="right"
                closable={true}
                onClose={onClose}
                open={open}
                getContainer={false}
            >
                <TransformationValue type={type} transformation={currentTransf} />
            </Drawer>
            <Row gutter={[16, 16]}>
                {transformations.map((transformation, i) => {
                    return (
                        <Col key={"A" + i} span={6}>
                            <Button
                                type="primary"
                                shape="round"
                                size="large"
                                style={{minHeight: 35, width: "100%"}}
                                onClick={() => showDrawer(transformation)}
                                disabled={disableOptions}
                            >
                                {transformation.name}
                            </Button>
                        </Col>
                    );
                })}
            </Row>
        </>
    );
}

export default TransformationsGrid;
