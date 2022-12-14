import React from "react";
import {useState} from "react";
import Toolbar from "../Toolbar/Toolbar";

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
                    <picture onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
                        {showOriginal ? (
                            <img src={originalPath} style={{maxHeight, maxWidth}} />
                        ) : (
                            <img src={path} style={{maxHeight, maxWidth}} />
                        )}
                    </picture>
                ) : (
                    <div>Please select an image from the list or upload one</div>
                )}
            </div>
        </>
    );
};

export default PreviewImage;
