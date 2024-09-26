import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const RecipeMeals = () => {
    const [meals, setMeals] = useState([]);
    const [likedMeals, setLikedMeals] = useState([]);
    const navigate = useNavigate(); // For redirection

    // Fetch the meals from the backend
    useEffect(() => {
        const fetchMeals = async () => {
            try {
                const response = await fetch("http://localhost:5000/api/recipes/search");
                const data = await response.json();
                setMeals(data);
            } catch (error) {
                console.error("Error fetching the meals:", error);
            }
        };

        fetchMeals();
    }, []);

    // Like/Unlike function to toggle the liked status
    const like = async (e, idMeal) => {
        e.stopPropagation(); // Prevent the click from propagating to the Link
        const customerId = sessionStorage.getItem('customerId'); // Retrieve customerId from sessionStorage

        // Redirect to signin page if the user is not logged in
        if (!customerId) {
            navigate('/Signin'); // Redirect to the Signin page
            return;
        }

        try {
            // Check if the meal is already liked
            const isLiked = likedMeals.includes(idMeal);

            const response = await fetch(`http://localhost:5000/api/customer/${customerId}/like`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ mealId: idMeal }),
            });

            if (response.ok) {
                const data = await response.json();

                // Toggle the meal like status
                if (isLiked) {
                    // If already liked, unlike it by removing from the likedMeals array
                    setLikedMeals((prevMeals) => prevMeals.filter(meal => meal !== idMeal));
                } else {
                    // If not liked, add it to the likedMeals array
                    setLikedMeals((prevMeals) => [...prevMeals, idMeal]);
                }
            } else {
                console.error('Error liking/unliking meal:', await response.json());
            }
        } catch (error) {
            console.error('Error updating liked meals:', error);
        }
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mx-auto" style={{ paddingBottom: "5vh" }}>
            {meals.length > 0 ? (
                meals.map((meal) => (
                    <div className="relative flex flex-col rounded-xl bg-white shadow-lg" key={meal.idMeal}>
                        <div className="relative mx-4 mt-4 overflow-hidden shadow-lg rounded-xl">
                            <Link to={`/MealDetails/${meal.idMeal}`}>
                                <img
                                    src={meal.strMealThumb}
                                    alt={meal.strMeal}
                                    className="w-full h-auto"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-black/60"></div>
                            </Link>
                            <button
                                className="absolute top-4 right-4 h-8 w-8 text-red-500"
                                onClick={(e) => like(e, meal.idMeal)}
                            >
                                {likedMeals.includes(meal.idMeal) ? (
                                    <FaHeart color="red" size={24} />
                                ) : (
                                    <FaRegHeart color="white" size={24} />
                                )}
                            </button>
                        </div>
                        <div className="p-6">
                            <Link to={`/MealDetails/${meal.idMeal}`}>
                                <h5 className="text-xl font-medium">{meal.strMeal}</h5>
                            </Link>
                            <p>{meal.strArea}, {meal.strCategory}</p>
                        </div>
                    </div>
                ))
            ) : (
                <p style={{ marginBottom: "50vh" }}>Loading meals...</p>
            )}
        </div>
    );
};

export default RecipeMeals;
