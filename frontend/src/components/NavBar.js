import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faCircleInfo, faUtensils, faHome, faCommentAlt, faSignOutAlt, faChevronDown, faUser, faEdit, faUsers, faComments } from '@fortawesome/free-solid-svg-icons';

function NavBar({ isSidebarOpen, toggleSidebar }) {
    const [isChatboxOpen, setIsChatboxOpen] = useState(false);
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);

    const toggleChatbox = () => {
        setIsChatboxOpen(!isChatboxOpen);
    };

    const toggleSettings = () => {
        setIsSettingsOpen(!isSettingsOpen);
    };

    return (
        <div className="relative">
            {/* Menu icon */}
            {!isSidebarOpen && (
                <span
                    className="fixed text-white text-4xl top-4 left-4 cursor-pointer"
                    onClick={toggleSidebar}
                    style={{ zIndex: 10 }} // Ensure it's on top of the sidebar
                >
                    <FontAwesomeIcon icon={faBars} />
                </span>
            )}

            {/* Sidebar */}
            <div className={`fixed top-0 bottom-0 lg:left-0 p-2 overflow-y-auto text-center bg-gray-900 ${isSidebarOpen ? 'w-64' : 'w-20'} duration-300`}>
                <div className="text-gray-100 text-xl relative">
                    {/* Close icon for all view sizes */}
                    {isSidebarOpen && (
                        <span
                            className="absolute text-white text-2xl top-0 left-1 cursor-pointer"
                            onClick={toggleSidebar}
                        >
                            <FontAwesomeIcon icon={faTimes} />
                        </span>
                    )}
                    <div className="text-gray-100 text-xl relative mt-12">
                        <h1 className={`font-bold text-gray-200 text-[15px] mt-1 ml-3 ${isSidebarOpen ? 'block' : 'hidden'}`}>TailwindCSS</h1>
                    </div>
                    <div className="my-2 bg-gray-600 h-[1px]"></div>
                </div>

                {/* Home Link */}
                <Link to="/" className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
                    <FontAwesomeIcon icon={faHome} className="text-white text-2xl" />
                    <span className={`text-[15px] ml-4 text-gray-200 font-bold ${isSidebarOpen ? 'block' : 'hidden'}`}>Home</span>
                </Link>

                {/* Recipes Link */}
                <Link to="/recipes" className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
                    <FontAwesomeIcon icon={faUtensils} className="text-white text-2xl" />
                    <span className={`text-[15px] ml-4 text-gray-200 font-bold ${isSidebarOpen ? 'block' : 'hidden'}`}>Recipes</span>
                </Link>
                <div className="my-4 bg-gray-600 h-[1px]"></div>

                {/* About Us Link */}
                <Link to="/about" className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
                    <FontAwesomeIcon icon={faCircleInfo} className="text-white text-2xl" />
                    <span className={`text-[15px] ml-4 text-gray-200 font-bold ${isSidebarOpen ? 'block' : 'hidden'}`}>About Us</span>
                </Link>



                {/* Chatbox section with dropdown functionality */}
                <div>
                    <div
                        className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
                        onClick={toggleChatbox}
                    >
                        <FontAwesomeIcon icon={faCommentAlt} className="text-white text-2xl" />
                        <span className={`text-[15px] ml-4 text-gray-200 font-bold ${isSidebarOpen ? 'block' : 'hidden'}`}>Chatbox</span>
                        <span className="text-sm ml-auto">
                            <FontAwesomeIcon icon={faChevronDown} style={{ marginLeft: "5px" }} className={`text-white text-2xl ${isChatboxOpen ? 'transform rotate-180' : ''}`} />
                        </span>
                    </div>

                    {/* Dropdown content for Chatbox */}
                    {isChatboxOpen && (
                        <Link to="/contactus" className="text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold">
                            <div className="flex items-center cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
                                <FontAwesomeIcon icon={faUsers} className="text-white text-2xl" />
                                <span className="ml-3">Our Contact details </span>
                            </div>
                            <div className="flex items-center cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
                                <FontAwesomeIcon icon={faComments} className="text-white text-2xl" />
                                <span className="ml-3">Life Chat</span>
                            </div>
                        </Link>
                    )}
                </div>
                <div className="my-4 bg-gray-600 h-[1px]"></div>

                {/* Settings section with dropdown functionality */}
                <div>
                    <div
                        className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
                        onClick={toggleSettings}
                    >
                        <FontAwesomeIcon icon={faUser} className="text-white text-2xl" />
                        <span className={`text-[15px] ml-4 text-gray-200 font-bold ${isSidebarOpen ? 'block' : 'hidden'}`}>Settings</span>
                        <span className="text-sm ml-auto">
                            <FontAwesomeIcon icon={faChevronDown} style={{ marginLeft: "5px" }} className={`text-white text-2xl ${isSettingsOpen ? 'transform rotate-180' : ''}`} />
                        </span>
                    </div>

                    {/* Dropdown content for Settings */}
                    {isSettingsOpen && (
                        <div className="text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold">
                            <div className="flex items-center cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
                                <FontAwesomeIcon icon={faUser} className="text-white text-2xl" />
                                <span className="ml-3">View Profile</span>
                            </div>
                            <div className="flex items-center cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">
                                <FontAwesomeIcon icon={faEdit} className="text-white text-2xl" />
                                <span className="ml-3">Edit Profile</span>
                            </div>
                        </div>
                    )}
                </div>
                <div className="my-4 bg-gray-600 h-[1px]"></div>

                {/* Logout Link */}
                <Link to="/logout" className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
                    <FontAwesomeIcon icon={faSignOutAlt} className="text-white text-2xl" />
                    <span className={`text-[15px] ml-4 text-gray-200 font-bold ${isSidebarOpen ? 'block' : 'hidden'}`}>Logout</span>
                </Link>

            </div>
        </div>
    );
}

export default NavBar;
