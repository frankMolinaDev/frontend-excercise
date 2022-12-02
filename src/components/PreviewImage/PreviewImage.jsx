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
            <picture>
                <img src={path} style={{maxHeight, maxWidth}} />
            </picture>
        </div>
    );
};

export default PreviewImage;
