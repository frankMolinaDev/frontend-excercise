import React from "react";
import {useState} from "react";
import Toolbar from "../Toolbar/Toolbar";
import {Tooltip} from "antd";
import {PREVIEW_PROMPT, SELECT_IMAGE_PROMPT} from "../../prompts";

const PreviewImage = ({path, maxHeight = 600, maxWidth = 800, originalPath}) => {
    const [showOriginal, setShowOriginal] = useState(false);

    const handleMouseDown = () => {
        setShowOriginal(true);
    };

    const handleMouseUp = () => {
        setShowOriginal(false);
    };
    return (
        <>
            <Toolbar width={maxWidth} />

            <div className="picture-container">
                {path ? (
                    <Tooltip title={PREVIEW_PROMPT} placement="right">
                        <picture onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
                            {showOriginal ? (
                                <img src={originalPath} style={{maxHeight, maxWidth}} />
                            ) : (
                                <img src={path} style={{maxHeight, maxWidth}} />
                            )}
                        </picture>
                    </Tooltip>
                ) : (
                    <div>{SELECT_IMAGE_PROMPT}</div>
                )}
            </div>
        </>
    );
};

export default PreviewImage;
