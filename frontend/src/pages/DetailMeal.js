import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Import useNavigate for the back button
import { FaArrowLeft } from 'react-icons/fa'; // Import arrow left icon

const MealDetails = () => {
    const { idMeal } = useParams(); // Get the meal ID from the URL
    const [meal, setMeal] = useState(null);
    const navigate = useNavigate(); // Use navigate for back button

    // Function to go back to the recipes page
    const goBack = () => {
        navigate('/RecipeMeals');
    };

    useEffect(() => {
        const fetchMealDetails = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/recipes/search?idMeal=${idMeal}`);
                const data = await response.json();

                // Ensure you're selecting the correct meal by id
                setMeal(data.find(m => m.idMeal === idMeal));
            } catch (error) {
                console.error("Error fetching the meal details:", error);
            }
        };

        fetchMealDetails();
    }, [idMeal]);

    if (!meal) {
        return <p>Loading...</p>;
    }

    return (
        <div className="p-4">
            {/* Back Button */}
            <div className="mb-4">
                <button onClick={goBack} className="flex items-center text-blue-500 hover:text-blue-700">
                    <FaArrowLeft className="mr-2" /> Back to Recipes
                </button>
            </div>

            {/* Meal Image */}
            <div className="flex justify-center">
                <img
                    className="h-auto max-w-lg transition-all duration-300 rounded-full cursor-pointer filter grayscale hover:grayscale-0"
                    src={meal.strMealThumb}
                    alt={meal.strMeal}
                />
            </div>

            {/* Meal Name */}
            <h1 className="text-3xl text-center my-4 font-bold">{meal.strMeal}</h1>

            {/* Meal Area and Category */}
            <div className="text-center mb-4">
                <p className="text-xl">{meal.strArea} Cuisine</p>
                <p className="text-lg">{meal.strCategory}</p>
            </div>

            {/* Instructions */}
            <div className="px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl text-center my-4 font-semibold">Instructions</h2>
                <p className="text-lg my-4">{meal.strInstructions}</p>

                {/* Ingredients Section */}
                <div className="my-8">
                    <h2 className="text-2xl text-center font-semibold mb-4">Ingredients</h2>
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                        {/* Loop through ingredients and measures */}
                        {Array.from({ length: 20 }, (_, i) => i + 1).map((index) => {
                            const ingredient = meal[`strIngredient${index}`];
                            const measure = meal[`strMeasure${index}`];
                            if (ingredient && ingredient.trim() !== "") {
                                return (
                                    <div key={index} className="flex justify-between">
                                        <span>{ingredient}</span>
                                        <span>{measure}</span>
                                    </div>
                                );
                            }
                            return null;
                        })}
                    </div>
                </div>

                {/* Video Section */}
                {meal.strYoutube && (
                    <div className="my-8">
                        <h2 className="text-2xl text-center font-semibold mb-4">Video</h2>
                        <div className="flex justify-center">
                            <iframe
                                className="w-full max-w-3xl h-64"
                                src={`https://www.youtube.com/embed/${meal.strYoutube.split('=')[1]}`}
                                title="Meal Video"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MealDetails;
