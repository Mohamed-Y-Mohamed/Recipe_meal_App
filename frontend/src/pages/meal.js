import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import '../components/style/meal.css'; // Ensure your CSS is imported

const RecipeMeals = () => {
    const [meals, setMeals] = useState([]);
    const [likedMeals, setLikedMeals] = useState([]); // Store liked meals

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

    // Like function to toggle the liked status
    const like = (e, idMeal) => {
        e.stopPropagation(); // Prevent the click from propagating to the Link
        if (likedMeals.includes(idMeal)) {
            setLikedMeals(likedMeals.filter(mealId => mealId !== idMeal)); // Remove like
        } else {
            setLikedMeals([...likedMeals, idMeal]); // Add like
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mx-auto">
                {meals.length > 0 ? (
                    meals.map((meal) => (
                        <div className="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg" key={meal.idMeal}>

                            {/* Meal Image and Like Button */}
                            <div className="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
                                <Link to={`/MealDetails/${meal.idMeal}`}>
                                    <img
                                        src={meal.strMealThumb}
                                        alt={meal.strMeal}
                                        className="w-full h-auto"
                                    />
                                    <div className="absolute inset-0 w-full h-full bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
                                </Link>
                                {/* Like Button */}
                                <button
                                    className="!absolute top-4 right-4 h-8 w-8 text-center font-sans text-xs font-medium text-red-500 transition-all hover:bg-red-500/10"
                                    onClick={(e) => like(e, meal.idMeal)} // Trigger like function
                                >
                                    {likedMeals.includes(meal.idMeal) ? (
                                        <FaHeart color="red" size={24} /> // Filled heart if liked
                                    ) : (
                                        <FaRegHeart color="white" size={24} /> // Unfilled heart if not liked
                                    )}
                                </button>
                            </div>

                            {/* Meal Details */}
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-3">
                                    <Link to={`/MealDetails/${meal.idMeal}`}>
                                        <h5 className="block font-sans text-xl font-medium leading-snug text-blue-gray-900">
                                            {meal.strMeal}
                                        </h5>
                                    </Link>

                                </div>
                                <p className="block text-base font-light text-gray-700">
                                    {meal.strArea}, {meal.strCategory}
                                </p>
                                <div className="inline-flex flex-wrap items-center gap-3 mt-8 group">
                                    <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                            <path d="M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
                                            <path fillRule="evenodd"
                                                d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 14.625v-9.75zM8.25 9.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM18.75 9a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75h-.008zM4.5 9.75A.75.75 0 015.25 9h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V9.75z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </span>
                                    <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                            <path fillRule="evenodd"
                                                d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                            <div className="p-6 pt-3">
                                <Link to={`/MealDetails/${meal.idMeal}`}>
                                    <button
                                        className="block w-full select-none rounded-lg bg-gray-900 py-3.5 px-7 text-center text-sm font-bold uppercase text-white shadow-md transition-all hover:shadow-lg hover:opacity-85"
                                        type="button"
                                    >
                                        View Details
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Loading meals...</p>
                )}
            </div>
        </div>
    );
};

export default RecipeMeals;
