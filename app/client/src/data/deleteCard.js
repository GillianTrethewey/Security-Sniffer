import { baseUrl, authToken } from "./globalCard.js";

import axios from "axios";

export const deleteCard = async (id) => {
  try {
    alert("Confirm deletion");
    const response = await axios.delete(`${baseUrl}/${id}`);
    // the following code would be added for an actual company api
    // , {
    //   headers: {
    //     Authorization: `Bearer ${authToken}`,
    //     "Content-Type": "application/json",
    //   },
    // });

    if (response.status === 204) {
      console.log(`Security Card with ID ${id} deleted successfully`);
      return id;
    } else {
      console.log(
        `Failed to delete data with ID ${id}. Status: ${response.status}`
      );
    }
  } catch (error) {
    console.error("Error deleting data:", error);
  }
};
