import axios from "axios";

// Resolve a human city name to Booking.com's dest_id and dest_type via locations endpoint
const fetchDestId = async (city) => {
  try {
    const res = await axios.get(
      "https://booking-com.p.rapidapi.com/v1/hotels/locations",
      {
        headers: {
          "x-rapidapi-key": "78ecfbaf88mshe26677a4afffda6p137bc7jsn3bf1c2116f23",
          "x-rapidapi-host": "booking-com.p.rapidapi.com",
        },
        params: { name: city, locale: "en-gb" },
      }
    );
    const first = res.data?.[0];
    if (!first) return null;
    return { destId: first.dest_id, destType: first.dest_type || first.type };
  } catch (err) {
    console.error("Error fetching dest_id:", err.response?.data || err.message);
    return null;
  }
};

export const FetchHotels = async ({ city, guests, startDate, endDate }) => {
  try {
    // Get a valid dest_id first; the search API does not accept plain city names
    const destInfo = await fetchDestId(city);
    if (!destInfo) {
      console.error("Invalid destination provided");
      return [];
    }
    const { destId, destType } = destInfo;

    // Ensure valid, future dates and format in local timezone (avoid UTC shift)
    const toDate = (d) => (d instanceof Date ? d : new Date(d));
    const addDays = (d, n) => {
      const c = new Date(d);
      c.setDate(c.getDate() + n);
      return c;
    };
    const start = toDate(startDate);
    const end = toDate(endDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    let checkIn = isNaN(start) ? addDays(today, 1) : start;
    let checkOut = isNaN(end) ? addDays(checkIn, 1) : end;
    // nights length
    const msPerDay = 24 * 60 * 60 * 1000;
    let nights = Math.max(1, Math.ceil((checkOut - checkIn) / msPerDay));
    // shift to future if needed
    if (checkIn < today) {
      checkIn = addDays(today, 1);
      checkOut = addDays(checkIn, nights);
    }
    // ensure checkout after checkin
    if (checkOut <= checkIn) {
      checkOut = addDays(checkIn, Math.max(1, nights));
    }
    const formatDate = (date) => {
      const y = date.getFullYear();
      const m = String(date.getMonth() + 1).padStart(2, "0");
      const d = String(date.getDate()).padStart(2, "0");
      return `${y}-${m}-${d}`;
    };

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
          // Force city; this matched your previously working version
          dest_type: "city",
          checkin_date: formatDate(checkIn),
          checkout_date: formatDate(checkOut),
          adults_number: guests?.adults || 1,
          children_number: childrenCount,
          children_ages: childrenAges,
          room_number: guests?.rooms || 1,
          order_by: "popularity",
          units: "metric",
          locale: "en-gb",
          filter_by_currency: "AED",
          include_adjacency: true,
          page_number: 0,
        },
      }
    );

    console.log("Hotels API Response:", response.data);
    return response.data.result || [];
  } catch (err) {
    const data = err.response?.data;
    if (data?.detail) {
      console.error("Error fetching hotels detail:", JSON.stringify(data.detail));
    }
    console.error("Error fetching hotels:", data || err.message);
    return [];
  }
};

