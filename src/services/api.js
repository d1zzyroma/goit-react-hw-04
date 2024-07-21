import axios from "axios";

export const searchImages = async (inputValue, page = 1) => {
  try {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        client_id: "RgCToCUHAeh1oVGNncqL_zBN45r2T6G6CiDRw7tLqnk",
        query: inputValue || "cat",
        page: page,
        per_page: 12, // Specify the number of images per page
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error searching images:", error);
    throw error;
  }
};
