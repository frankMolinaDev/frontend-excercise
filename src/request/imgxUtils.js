import ImgixClient from "@imgix/js-core";

const client = new ImgixClient({
    domain: "assets.imgix.net"
});

export const generateNewTransformationImage = (
    path = "/blog/unsplash-kiss.jpg",
    params = {
        w: 100,
        h: 500
    }
) => {
    const url = client.buildURL(path, params);
    return url;
};
