import axios from "axios";

export const getImagesList = () => {
    return axios
        .get(
            "https://storage.googleapis.com/nanlabs-engineering-technical-interviews/imgix-samples-list.json"
        )
        .then((res) => {
            return res.data;
        });
};
