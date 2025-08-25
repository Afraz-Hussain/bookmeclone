import axios from "axios";

export const getDestinationId = async (query) => {
  if (!query) return null;

  try {
    const res = await axios.get("https://booking-com.p.rapidapi.com/v1/hotels/locations", {
      headers: {
        "x-rapidapi-key": "ce89a6f860msh6a1514aad1c8aadp104b32jsna9fed2f73c19",
        "x-rapidapi-host": "booking-com.p.rapidapi.com",
      },
      params: {
        name: query,
        locale: "en-gb",
      },
    });

    console.log("Location search result:", res.data);

    // Prefer city-level match
    const cityMatch = res.data.find((item) => item.type === "ci");
    return cityMatch?.dest_id || res.data[0]?.dest_id || null;

  } catch (err) {
    console.error("Error fetching destination id:", err.response?.data || err.message);
    return null;
  }
};
