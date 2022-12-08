import React from "react";

const PreviewImage = ({path, maxHeight = 600, maxWidth = 800}) => {
    return (
        <div className="picture-container">
            {path ? (
                <picture>
                    <img src={path} style={{maxHeight, maxWidth}} />
                </picture>
            ) : (
                <div>Please select an image from the list or upload one</div>
            )}
        </div>
    );
};

export default PreviewImage;
