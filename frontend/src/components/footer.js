import React from 'react';
import logo from "../assets/logo/file.png";
import '@fortawesome/fontawesome-free/css/all.min.css';

function Footer() {
    return (
        <footer className="bg-white dark:bg-gray-900">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <a href="/" className="flex items-center">
                            <img src={logo} className="h-8 me-5" style={{ width: "10%", height: "10%" }} alt="Flavour Fusion Logo" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flavour Fusion</span>
                        </a>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">

                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white flex items-center">
                                <i className="fas fa-link me-2"></i> socials
                            </h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="https://www.facebook.com/" className="hover:underline flex items-center">
                                        <i className="fab fa-facebook me-2"></i> Facebook
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a href="https://twitter.com/" className="hover:underline flex items-center">
                                        <i className="fab fa-twitter me-2"></i> Twitter
                                    </a>
                                </li>
                                <li>
                                    <a href="https://discord.gg/" className="hover:underline flex items-center">
                                        <i className="fab fa-discord me-2"></i> Discord
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white flex items-center">
                                <i className="fas fa-link me-2"></i> Legal
                            </h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="/" className="hover:underline">Flavour Fusion™</a>. All Rights Reserved.
                    </span>
                    <div className="flex mt-4 sm:justify-center sm:mt-0">
                        <a href="https://www.facebook.com/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <i className="fab fa-facebook w-4 h-4"></i>
                            <span className="sr-only">Facebook page</span>
                        </a>
                        <a href="https://discord.gg/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                            <i className="fab fa-discord w-4 h-4"></i>
                            <span className="sr-only">Discord community</span>
                        </a>
                        <a href="https://twitter.com/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                            <i className="fab fa-twitter w-4 h-4"></i>
                            <span className="sr-only">Twitter page</span>
                        </a>
                        <a href="https://dribbble.com/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                            <i className="fab fa-dribbble w-4 h-4"></i>
                            <span className="sr-only">Dribbble account</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
