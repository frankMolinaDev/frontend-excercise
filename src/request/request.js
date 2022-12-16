import axios from "axios";

export const getImagesList = async () => {
    return axios.get(
        "https://storage.googleapis.com/nanlabs-engineering-technical-interviews/imgix-samples-list.json"
    );
};
