import ImgixClient from "@imgix/js-core";

const client = new ImgixClient({
    domain: "assets.imgix.net"
});

export const generateNewTransformationImage = (
    path = "/blog/unsplash-kiss.jpg",
    params = {
        w: 800,
        h: 600
    }
) => {
    if (path === "") return;
    const url = client.buildURL(path, params);
    return url;
};
