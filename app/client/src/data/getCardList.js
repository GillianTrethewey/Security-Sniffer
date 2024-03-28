import { baseUrl, authToken } from "./globalCard.js";

import axios from "axios";

export const getCardList = async () => {
  try {
    const response = await axios.get(`${baseUrl}`);
    // the following code would be used for the actual company api
    // {
    //   headers: {
    //     Authorization: `Bearer ${authToken}`
    //   },
    // });

    const dataResponse = response.data;
    console.log(dataResponse);
    return dataResponse;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
