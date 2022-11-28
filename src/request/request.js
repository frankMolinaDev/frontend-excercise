import axios from "axios";

export const getImagesList = () => {
    axios
        .get(
            "https://storage.googleapis.com/nanlabs-engineering-technical-interviews/imgix-samples-list.json"
        )
        .then((res) => {
            console.log("res.data", res.data);
            return res.data;
        });
};
