import {RotateRightOutlined, SettingOutlined} from "@ant-design/icons";

export const rotation = {
    title: "Rotation",
    Icon: RotateRightOutlined,
    effects: [
        {
            name: "Flip Axis",
            id: "flip",
            values: ["Select an option", "h", "v", "hv"]
        },
        {
            name: "Orientation",
            id: "orient",
            values: ["Select an option", 1, 2, 3, 4, 5, 6, 7, 8, 90, 180, 270]
        },
        {
            name: "Rotation",
            id: "rot",
            values: [0, 359],
            placeholder: "From 0 to 359"
        }
    ]
};

export const adjustment = {
    title: "Adjustment",
    Icon: SettingOutlined,
    effects: [
        {
            name: "Brightness",
            id: "bri"
        },
        {
            name: "Contrast",
            id: "con"
        },
        {
            name: "Exposure",
            id: "exp"
        },
        {
            name: "Gamma",
            id: "gam"
        },
        {
            name: "Highlight",
            id: "high"
        },
        {
            name: "Hue Shift",
            id: "hue"
        },
        {
            name: "Invert",
            id: "invert"
        },
        {
            name: "Saturation",
            id: "sat"
        },
        {
            name: "Shadow",
            id: "shad"
        },
        {
            name: "Sharpen",
            id: "sharp"
        },
        {
            name: "Unsharp Mask",
            id: "usm"
        },
        {
            name: "Unsharp Mask Radius",
            id: "usmrad"
        },
        {
            name: "Vibrance ",
            id: "vib"
        }
    ]
};

export const options = [adjustment, rotation];
