import React, { useState, useEffect } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import "../components/style/footerfavorite.css";
const FavoriteMeals = () => {
    const [favoriteMeals, setFavoriteMeals] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const customerId = sessionStorage.getItem('customerId'); // Get customer ID from session storage

    // Fetch the user's favorite meal IDs from the backend
    useEffect(() => {
        const fetchFavorites = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/customer/${customerId}/favorites`);
                const data = await response.json();

                // Fetch the details of each favorite meal using the external API
                const favoriteDetailsPromises = data.likedMeals.map(async (mealId) => {
                    const mealResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
                    const mealData = await mealResponse.json();
                    return mealData.meals[0]; // The meal details will be returned in the `meals` array
                });

                const favoriteDetails = await Promise.all(favoriteDetailsPromises);
                setFavoriteMeals(favoriteDetails);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching favorite meals:', error);
                setError('Error fetching favorite meals');
                setLoading(false);
            }
        };

        fetchFavorites();
    }, [customerId]);

    // Like/unlike function
    const toggleLike = async (mealId) => {
        try {
            const response = await fetch(`http://localhost:5000/api/customer/${customerId}/like`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ mealId }),
            });

            const data = await response.json();

            // Remove meal from favorites if unliked
            if (!data.likedMeals.includes(mealId)) {
                setFavoriteMeals(favoriteMeals.filter(meal => meal.idMeal !== mealId));
            }
        } catch (error) {
            console.error('Error updating liked meals:', error);
        }
    };

    if (loading) {
        return <p>Loading favorite meals...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mx-auto" style={{ paddingBottom: "5vh" }}>
            {favoriteMeals.length > 0 ? (
                favoriteMeals.map((meal) => (
                    <div className="relative flex flex-col rounded-xl bg-white shadow-lg" key={meal.idMeal}>
                        <div className="relative mx-4 mt-4 overflow-hidden shadow-lg rounded-xl">
                            <img
                                src={meal.strMealThumb}
                                alt={meal.strMeal}
                                className="w-full h-auto"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-black/60"></div>
                            <button
                                className="absolute top-4 right-4 h-8 w-8 text-red-500"
                                onClick={() => toggleLike(meal.idMeal)}
                            >
                                <FaHeart color="red" size={24} /> {/* Always red heart since it's a favorite */}
                            </button>
                        </div>
                        <div className="p-6">
                            <h5 className="text-xl font-medium">{meal.strMeal}</h5>
                            <p>{meal.strArea}, {meal.strCategory}</p>
                        </div>
                    </div>
                ))
            ) : (
                <p className="footerLocation">No favorite meals found.</p>
            )}
        </div>
    );
};

export default FavoriteMeals;
