export function getItem(label, key, icon = null, children = null) {
    return {
        key,
        icon,
        children,
        label
    };
}
