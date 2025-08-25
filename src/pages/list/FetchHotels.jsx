import axios from "axios";
import { getDestinationId } from "./fetchdest";

export const FetchHotels = async ({ city, guests, startDate, endDate }) => {
  try {
    const dest_id = await getDestinationId(city);
    if (!dest_id) {
      console.error("No destination ID found for:", city);
      return [];
    }

    const formatDate = (date) => {
        return date.toISOString().split("T")[0];
      };
  

    const childrenCount = guests?.children || 0;
    const childrenAges =
      childrenCount > 0 ? Array(childrenCount).fill(5).join(",") : undefined;

    const response = await axios.get("https://booking-com.p.rapidapi.com/v1/hotels/search", {
      headers: {
        "x-rapidapi-key": "ce89a6f860msh6a1514aad1c8aadp104b32jsna9fed2f73c19",
        "x-rapidapi-host": "booking-com.p.rapidapi.com",
      },
      params: {
        dest_id,
        dest_type: "city",
        adults_number: guests?.adults || 1,
        children_number: childrenCount,
        children_ages: childrenAges,
        room_number: guests?.rooms || 1,
        checkin_date: formatDate(startDate),
        checkout_date: formatDate(endDate),
        order_by: "popularity",
        filter_by_currency: "AED",
        locale: "en-gb",
        units: "metric",
        include_adjacency: true,
        page_number: 0,
      },
    });

    return response.data.result || [];
  } catch (err) {
    console.error("Error fetching hotels:", err.response?.data || err.message);
    return [];
  }
};
