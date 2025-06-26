import React, { useEffect, useState } from 'react';
import '../CSS/body.css';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';
import { useNavigate } from 'react-router-dom';
import Categories from './Categories';

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [resHead, setResHead] = useState("");
  const [searchText, setSearchText] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://proxy.cors.sh/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
      {
        headers: {
          'x-cors-api-key': 'temp_30ab0b2006237d8f81f9982b7db77f63'
        }
      }
    );

    const json = await data.json();
    const restro = json?.data?.cards.find(
      item => item.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    const restaurants = restro?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

    setListOfRestaurants(restaurants);
    setFilteredRestaurants(restaurants);
    setResHead(restro?.card?.card?.header?.title || "Popular Restaurants");
  };

  const handleTopRated = () => {
    const filtered = listOfRestaurants.filter(res => res.info.avgRating > 4.3);
    setFilteredRestaurants(filtered);
  };

  const handleSearch = () => {
    const filtered = listOfRestaurants.filter(res =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(filtered);
  };

  const goToRestaurantMenu = (resId) => {
    navigate(`/restaurant/${resId}`);
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      {/* Categories */}
      <div className="hidden sm:flex mb-4">
        <Categories />
      </div>

      {/* Header */}
      <h1 className="text-center text-3xl sm:text-4xl font-bold mb-6">
        {resHead}
      </h1>

      {/* Search & Filter */}
      <div className="filter flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
        <div className="search">
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Find your favourite"
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <button className="filterBtn" onClick={handleTopRated}>
          Top Rated Restaurants
        </button>
      </div>

      {/* Restaurant Cards */}
      <div className="resContainer grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredRestaurants.map((restaurant) => (
          <div key={restaurant.info.id} onClick={() => goToRestaurantMenu(restaurant.info.id)} className="cursor-pointer">
            <RestaurantCard resData={restaurant} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;
