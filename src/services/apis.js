import axios from "axios";
import { baseUrl } from "../utils/constants";

export const getStory = async (storyId) => {
    const result = await axios.get(`${baseUrl}/item/${storyId}.json`).then(({data}) => data);
    return result;
}

export const getStoryIds = async () => {
    const result = await axios.get(`${baseUrl}/newstories.json`).then(({data}) => data);
    return result;
}