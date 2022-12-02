import React from "react";

const PreviewImage = ({path, maxHeight = 600, maxWidth = 800}) => {
    return (
        <div
            style={{
                flex: "2 1 auto",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
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
