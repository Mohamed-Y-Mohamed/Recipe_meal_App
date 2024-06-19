import React from "react";
import Hero from "../components/hero"; // Adjust the path as per your project structure
import image2 from "../assets/images/Herb-Crusted Salmon.jpeg";
import image1 from "../assets/images/Summer-Berry-Salad-3.webp";

const Home = () => {
    return (
        <div>
            {/* Your existing content */}
            <Hero />
            <>

                <section class="bg-white border-b py-8">
                    <div class="container max-w-5xl mx-auto m-8">
                        <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
                            Featured Recipes
                        </h1>
                        <div class="w-full mb-4">
                            <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                        </div>
                        <div class="flex flex-wrap">
                            <div class="w-5/6 sm:w-1/2 p-6">
                                <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">
                                    Summer Berry Salad
                                </h3>
                                <p class="text-gray-600 mb-8">
                                    Enjoy a refreshing salad bursting with seasonal berries and crisp greens.
                                    <br />
                                    <br />
                                    <span class="font-semibold">Ingredients:</span> Mixed berries, arugula, spinach, feta cheese, balsamic vinaigrette.
                                    <br />
                                    <br />
                                    Images from:
                                    <a class="text-pink-500 underline" href="https://undraw.co/">undraw.co</a>
                                </p>
                            </div>
                            <div class="w-full sm:w-1/2 p-6">
                                <img src={image1} alt="Summer Berry Salad" className="rounded-lg shadow-md" />
                            </div>
                        </div>
                        <div class="flex flex-wrap flex-col-reverse sm:flex-row">
                            <div class="w-full sm:w-1/2 p-6 mt-6">
                                <img src={image2} alt="Herb-Crusted Salmon" className="rounded-lg shadow-md" />
                            </div>
                            <div class="w-full sm:w-1/2 p-6 mt-6">
                                <div class="align-middle">
                                    <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">
                                        Herb-Crusted Salmon
                                    </h3>
                                    <p class="text-gray-600 mb-8">
                                        Elevate your dinner with this succulent herb-crusted salmon recipe.
                                        <br />
                                        <br />
                                        <span class="font-semibold">Ingredients:</span> Salmon fillets, fresh herbs, lemon, olive oil, garlic.
                                        <br />
                                        <br />
                                        Images from:
                                        <a class="text-pink-500 underline" href="https://undraw.co/">undraw.co</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="bg-white border-b py-8">
                    <div class="container mx-auto flex flex-wrap pt-4 pb-12">
                        <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
                            Get Cooking!
                        </h1>
                        <div class="w-full mb-4">
                            <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                        </div>
                        <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                            <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                                <a href="#" class="flex flex-wrap no-underline hover:no-underline">
                                    <p class="w-full text-gray-600 text-xs md:text-sm px-6">
                                        Getting Started
                                    </p>
                                    <div class="w-full font-bold text-xl text-gray-800 px-6">
                                        Learn the Basics
                                    </div>
                                    <p class="text-gray-800 text-base px-6 mb-5">
                                        New to cooking? Start with our beginner-friendly guides and tips.
                                        <br />
                                        <br />
                                        <span class="font-semibold">Topics:</span> Knife skills, basic techniques, kitchen essentials.
                                        <br />
                                        <br />
                                        Images from:
                                        <a class="text-pink-500 underline" href="https://undraw.co/">undraw.co</a>
                                    </p>
                                </a>
                            </div>
                            <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                                <div class="flex items-center justify-start">
                                    <button class="mx-auto lg:mx-0 hover:underline gradient text-black font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                                        Get Started
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                            <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                                <a href="#" class="flex flex-wrap no-underline hover:no-underline">
                                    <p class="w-full text-gray-600 text-xs md:text-sm px-6">
                                        Discover Recipes
                                    </p>
                                    <div class="w-full font-bold text-xl text-gray-800 px-6">
                                        Explore Variety
                                    </div>
                                    <p class="text-gray-800 text-base px-6 mb-5">
                                        Dive into a world of diverse recipes from around the globe.
                                        <br />
                                        <br />
                                        <span class="font-semibold">Cuisines:</span> Italian, Asian, Mexican, Mediterranean.
                                        <br />
                                        <br />
                                        Images from:
                                        <a class="text-pink-500 underline" href="https://undraw.co/">undraw.co</a>
                                    </p>
                                </a>
                            </div>
                            <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                                <div class="flex items-center justify-center">
                                    <button class="mx-auto lg:mx-0 hover:underline gradient text-black font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                                        Explore Recipes
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                            <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                                <a href="#" class="flex flex-wrap no-underline hover:no-underline">
                                    <p class="w-full text-gray-600 text-xs md:text-sm px-6">
                                        Join Our Community
                                    </p>
                                    <div class="w-full font-bold text-xl text-gray-800 px-6">
                                        Share Your Creations
                                    </div>
                                    <p class="text-gray-800 text-base px-6 mb-5">
                                        Connect with fellow food enthusiasts and share your own recipes and tips.
                                        <br />
                                        <br />
                                        <span class="font-semibold">Community:</span> Cooking challenges, recipe swaps, forums.
                                        <br />
                                        <br />
                                        Images from:
                                        <a class="text-pink-500 underline" href="https://undraw.co/">undraw.co</a>
                                    </p>
                                </a>
                            </div>
                            <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                                <div class="flex items-center justify-end">
                                    <button class="mx-auto lg:mx-0 hover:underline gradient text-black font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                                        Join Community
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="bg-gray-100 py-8">
                    <div class="container mx-auto px-2 pt-4 pb-12 text-gray-800">
                        <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
                            Get Inspired - Try New Recipes Today!
                        </h1>
                        <div class="w-full mb-4">
                            <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                        </div>
                        <div class="flex flex-col sm:flex-row justify-center pt-12 my-12 sm:my-4">
                            <div class="flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-white mt-4">
                                <div class="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow">
                                    <div class="p-8 text-3xl font-bold text-center border-b-4">
                                        Free
                                    </div>
                                    <ul class="w-full text-center text-sm">
                                        <li class="border-b py-4">Access to basic recipes</li>
                                        <li class="border-b py-4">Limited community features</li>
                                        <li class="border-b py-4">Weekly newsletter</li>
                                    </ul>
                                </div>
                                <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                                    <div class="w-full pt-6 text-3xl text-gray-600 font-bold text-center">
                                        $0
                                        <span class="text-base">/ per month</span>
                                    </div>
                                    <div class="flex items-center justify-center">
                                        <button class="mx-auto lg:mx-0 hover:underline gradient text-black font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                                            Sign Up
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-col w-5/6 lg:w-1/3 mx-auto lg:mx-0 rounded-lg bg-white mt-4 sm:-mt-6 shadow-lg z-10">
                                <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                                    <div class="w-full p-8 text-3xl font-bold text-center">Premium</div>
                                    <div class="h-1 w-full gradient my-0 py-0 rounded-t"></div>
                                    <ul class="w-full text-center text-base font-bold">
                                        <li class="border-b py-4">Access to all recipes</li>
                                        <li class="border-b py-4">Full community access</li>
                                        <li class="border-b py-4">Monthly cooking challenges</li>
                                        <li class="border-b py-4">Exclusive recipes</li>
                                    </ul>
                                </div>
                                <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                                    <div class="w-full pt-6 text-4xl font-bold text-center">
                                        $9.99
                                        <span class="text-base">/ per month</span>
                                    </div>
                                    <div class="flex items-center justify-center">
                                        <button class="mx-auto lg:mx-0 hover:underline gradient text-black font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                                            Subscribe
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-white mt-4">
                                <div class="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow">
                                    <div class="p-8 text-3xl font-bold text-center border-b-4">
                                        Enterprise
                                    </div>
                                    <ul class="w-full text-center text-sm">
                                        <li class="border-b py-4">Customizable for teams</li>
                                        <li class="border-b py-4">Dedicated support</li>
                                        <li class="border-b py-4">Advanced analytics</li>
                                    </ul>
                                </div>
                                <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                                    <div class="w-full pt-6 text-3xl text-gray-600 font-bold text-center">
                                        Contact Us
                                        <span class="text-base">/ for pricing</span>
                                    </div>
                                    <div class="flex items-center justify-end">
                                        <button class="mx-auto lg:mx-0 hover:underline gradient text-black font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                                            Contact Sales
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        </div>
    );
};

export default Home;
