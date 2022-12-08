import {ADD_IMAGE, HISTORY_ITEM, IMAGE_LIST_ITEM} from "./constants";

export function getItem(label, key, icon = null, children = null, prop = {}) {
    return {
        key,
        icon,
        children,
        label,
        prop
    };
}

export function arrayToMenuItems(array = []) {
    return array.map((element = {name: "item", url: "https://google.com.ar"}, index) => {
        const {name, url} = element;
        const urlWithoutDomain = url.replace("https://assets.imgix.net/", "");
        return getItem(name, `${IMAGE_LIST_ITEM}-${index}`, undefined, undefined, urlWithoutDomain);
    });
}

export function getMenuItemProp(key, transformationsArray = []) {
    const element = transformationsArray.find((item) => {
        return key === item.key;
    }).prop;
    return element;
}

export const checkMenuItemType = (key) => {
    if (key.includes(HISTORY_ITEM)) return HISTORY_ITEM;
    if (key.includes(IMAGE_LIST_ITEM)) return IMAGE_LIST_ITEM;
    return ADD_IMAGE;
};

export const stringToLabelValueObj = (string) => {
    return {label: string, value: string};
};

export const stringArrToLabelValueObjArr = (stringArr) => {
    return stringArr.map((string) => stringToLabelValueObj(string));
};
