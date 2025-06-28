import { useEffect, useState, useCallback } from "react";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  // ✅ fetchData ko useCallback se memoize kiya
  const fetchData = useCallback(async () => {
    try {
      const data = await fetch(
        "https://proxy.cors.sh/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=" +
          resId,
        {
          headers: {
            "x-cors-api-key": "temp_30ab0b2006237d8f81f9982b7db77f63",
          },
        }
      );

      const json = await data.json();
      setResInfo(json?.data);
    } catch (err) {
      console.error("Error fetching restaurant menu:", err);
      setResInfo(null);
    }
  }, [resId]);

  // ✅ dependency array me fetchData add kiya
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return resInfo;
};

export default useRestaurantMenu;
