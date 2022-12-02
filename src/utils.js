export function getItem(label, key, icon = null, children = null, params = {}) {
    return {
        key,
        icon,
        children,
        label,
        params
    };
}

export function getHistoryItemParams(key, transformationsArray = []) {
    return transformationsArray.find((item) => {
        return key == item.key;
    }).params;
}
