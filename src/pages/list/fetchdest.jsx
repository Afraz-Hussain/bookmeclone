import axios from "axios";
import useFetch from "../../hooks/UseFetch";

// // Step 1: Get dest_id for city name
// const fetchDestId = async (city) => {
//   try {
//     const res = await axios.get(
//       "https://booking-com.p.rapidapi.com/v1/hotels/locations",
//       {
//         headers: {
//           "x-rapidapi-key": "78ecfbaf88mshe26677a4afffda6p137bc7jsn3bf1c2116f23",
//           "x-rapidapi-host": "booking-com.p.rapidapi.com",
//         },
//         params: {
//           name: city,
//           locale: "en-gb",
//         },
//       }
//     );

//     console.log("Location search result:", res.data);
//     return res.data[0]?.dest_id || null; // take first matching location
//   } catch (err) {
//     console.error("Error fetching dest_id:", err.response?.data || err.message);
//     return null;
//   }
// };



const{data,loading,refetch}=useFetch()




// Step 2: Fetch hotels
export const FetchHotels = async ({ city, guests, startDate, endDate }) => {
  try {
    const destId = await fetchDestId(city);
    if (!destId) {
      console.error("❌ Invalid destination");
      return [];
    }

    const checkIn = new Date(startDate);
    let checkOut = new Date(endDate);

    // Ensure checkout > checkin
    if (checkIn.getTime() === checkOut.getTime()) {
      checkOut.setDate(checkOut.getDate() + 1);
    }

    const formatDate = (date) => date.toISOString().split("T")[0];

    const childrenCount = guests?.children || 0;
    const childrenAges =
      childrenCount > 0 ? Array(childrenCount).fill(5).join(",") : undefined;

    const response = await axios.get(
      "https://booking-com.p.rapidapi.com/v1/hotels/search",
      {
        headers: {
          "x-rapidapi-key": "78ecfbaf88mshe26677a4afffda6p137bc7jsn3bf1c2116f23",
          "x-rapidapi-host": "booking-com.p.rapidapi.com",
        },
        params: {
          dest_id: destId,
          search_type: "CITY",
          checkin_date: formatDate(checkIn),
          checkout_date: formatDate(checkOut),
          adults_number: guests?.adults || 1,
          children_number: childrenCount,
          children_ages: childrenAges,
          room_number: guests?.rooms || 1,
          order_by: "popularity",
          units: "metric",
          locale: "en-gb",
          currency: "AED",
          include_adjacency: true,
          page_number: 0,
        },
      }
    );

    console.log("Hotels API Response:", response.data);
    return response.data.result || [];
  } catch (err) {
    console.error("Error fetching hotels:", err.response?.data || err.message);
    return [];
  }
};
