import React from 'react';

function About() {
    return (
        <>
            <div className="sm:flex items-center max-w-screen-xl">
                <div className="sm:w-1/2 p-10">
                    <div className="image object-center text-center">
                        <img src="https://i.imgur.com/WbQnbas.png" alt="FlavorFusion" />
                    </div>
                </div>
                <div className="sm:w-1/2 p-5">
                    <div className="text">
                        <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">About us</span>
                        <h2 className="my-4 font-bold text-3xl sm:text-4xl">
                            About <span className="text-indigo-600">FlavorFusion</span>
                        </h2>
                        <p className="text-gray-700">
                            At FlavorFusion, we believe that cooking should be an enjoyable and creative experience. Our mission is to bring together delicious recipes from around the world, tailored to your tastes and dietary preferences. Join us on a culinary adventure as we explore new flavors and cuisines.
                        </p>
                    </div>
                </div>
            </div>
            <section>
                <div className="py-12 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="lg:text-center">
                            <h2 className="font-heading mb-4 bg-orange-100 text-orange-800 px-4 py-2 rounded-lg md:w-64 md:mx-auto text-xs font-semibold tracking-widest text-black uppercase title-font">
                                Why choose us?
                            </h2>
                            <p className="font-heading mt-2 text-3xl leading-8 font-semibold tracking-tight text-gray-900 sm:text-4xl">
                                Your culinary journey starts here.
                            </p>
                            <p className="mt-4 max-w-2xl text-lg text-gray-500 lg:mx-auto">
                                Discover a world of flavors with our curated recipes, cooking tips, and meal planning tools designed to inspire and delight home cooks of all levels.
                            </p>
                        </div>
                        <div className="mt-10">
                            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                                <div className="relative">
                                    <dt>
                                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                                            <img src="https://www.svgrepo.com/show/503163/api-settings.svg" alt="Diverse Recipes" />
                                        </div>
                                        <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">Diverse Recipes</p>
                                    </dt>
                                    <dd className="mt-2 ml-16 text-base text-gray-500">
                                        Explore an extensive collection of recipes from various cuisines and dietary preferences.
                                    </dd>
                                </div>
                                <div className="relative">
                                    <dt>
                                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                                            <img src="https://www.svgrepo.com/show/503138/webpack.svg" alt="User-Friendly Interface" />
                                        </div>
                                        <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">User-Friendly Interface</p>
                                    </dt>
                                    <dd className="mt-2 ml-16 text-base text-gray-500">
                                        Easily navigate through our app to find the perfect recipe for any occasion.
                                    </dd>
                                </div>
                                <div className="relative">
                                    <dt>
                                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                                            <img src="https://www.svgrepo.com/show/511771/dashboard-671.svg" alt="Meal Planning Tools" />
                                        </div>
                                        <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">Meal Planning Tools</p>
                                    </dt>
                                    <dd className="mt-2 ml-16 text-base text-gray-500">
                                        Plan your meals effortlessly with our built-in meal planning and grocery list features.
                                    </dd>
                                </div>
                                <div className="relative">
                                    <dt>
                                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                                            <img src="https://www.svgrepo.com/show/76267/free-commercial-label.svg" alt="Community & Support" />
                                        </div>
                                        <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">Community & Support</p>
                                    </dt>
                                    <dd className="mt-2 ml-16 text-base text-gray-500">
                                        Join a community of food enthusiasts, share your creations, and get support from fellow home cooks.
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;
