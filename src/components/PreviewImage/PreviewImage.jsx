import React, {useEffect} from "react";
import {useState} from "react";
import Toolbar from "../Toolbar/Toolbar";
import {Tooltip, Image, Spin} from "antd";
import {PREVIEW_PROMPT, SELECT_IMAGE_PROMPT} from "../../prompts";
import {useDispatch, useSelector} from "react-redux";
import {
    finishedLoadingTransformation,
    hideFullImageView,
    startedLoadingTransformation
} from "../../redux/slices/imageSlice";

const PreviewImage = ({path, originalPath}) => {
    const [showOriginal, setShowOriginal] = useState(false);
    const {loadingTransformation, showFull} = useSelector((state) => state.image);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(startedLoadingTransformation());
    }, [dispatch, path]);

    const handleMouseDown = () => {
        setShowOriginal(true);
    };

    const handleMouseUp = () => {
        setShowOriginal(false);
    };

    const handleLoad = () => {
        dispatch(finishedLoadingTransformation());
    };

    const handleFullViewClose = () => {
        dispatch(hideFullImageView());
    };
    return (
        <>
            <Toolbar />
            <div className="picture-container">
                {path ? (
                    <Spin spinning={loadingTransformation} tip="Loading..." size="large">
                        <Tooltip title={PREVIEW_PROMPT} placement="bottomRight">
                            <Image
                                src={showOriginal ? originalPath : path}
                                preview={{
                                    visible: showFull,
                                    onVisibleChange: handleFullViewClose,
                                    mask: <></>,
                                    maskClassName: ""
                                }}
                                width={800}
                                onLoad={handleLoad}
                                onMouseDown={handleMouseDown}
                                onMouseUp={handleMouseUp}
                            />
                        </Tooltip>
                    </Spin>
                ) : (
                    <div>{SELECT_IMAGE_PROMPT}</div>
                )}
            </div>
        </>
    );
};

export default PreviewImage;
