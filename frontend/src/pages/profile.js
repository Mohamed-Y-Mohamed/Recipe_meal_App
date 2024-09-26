import React, { useState, useEffect } from 'react';
import defualtProfile from "../assets/images/defualt profile.png";

function Profile() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [profession, setProfession] = useState('');
    const [bio, setBio] = useState('');
    const [profileImage, setProfileImage] = useState(defualtProfile); // Default profile image
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const [fullNameError, setFullNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [professionError, setProfessionError] = useState('');

    // Fetch profile data
    useEffect(() => {
        const customerId = sessionStorage.getItem('customerId'); // Retrieve customer ID from session storage

        if (!customerId) {
            console.error("Customer ID not found");
            return;
        }

        const fetchProfile = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/customer/${customerId}`);
                const data = await response.json();

                if (response.ok) {
                    setFullName(data.fullName);
                    setEmail(data.email);
                    setProfession(data.profession);
                    setBio(data.bio);
                    setProfileImage(data.profileImage || defualtProfile); // Use default if no profile image
                } else {
                    setErrorMessage(data.message || 'Failed to load profile');
                }
            } catch (error) {
                console.error('Error fetching profile:', error);
                setErrorMessage('Error fetching profile');
            }
        };

        fetchProfile();
    }, []);

    // Input validation functions
    const validateFullName = () => {
        if (!/^[a-zA-Z\s]+$/.test(fullName)) {
            setFullNameError('Full name should only contain letters and spaces');
            return false;
        }
        setFullNameError('');
        return true;
    };

    const validateEmail = () => {
        const emailRegex = /\S+@\S+\.\S+/;
        if (!emailRegex.test(email)) {
            setEmailError('Invalid email address');
            return false;
        }
        setEmailError('');
        return true;
    };

    const validateProfession = () => {
        if (!/^[a-zA-Z\s]+$/.test(profession)) {
            setProfessionError('Profession should only contain letters and spaces');
            return false;
        }
        setProfessionError('');
        return true;
    };

    // Handle profile save/update
    const handleSave = async (e) => {
        e.preventDefault();
        const customerId = sessionStorage.getItem('customerId'); // Retrieve customer ID from session storage

        if (!validateFullName() || !validateEmail() || !validateProfession()) {
            setErrorMessage('Please fix the errors before submitting.');
            return;
        }

        if (!customerId) {
            console.error("Customer ID not found");
            return;
        }

        try {
            const response = await fetch(`http://localhost:5000/api/customer/${customerId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ fullName, email, profession, bio, profileImage }),
            });

            const data = await response.json();

            if (response.ok) {
                setSuccessMessage('Profile updated successfully');
            } else {
                setErrorMessage(data.message || 'Failed to update profile');
            }
        } catch (error) {
            console.error('Error updating profile:', error);
            setErrorMessage('Error updating profile');
        }
    };

    return (
        <main className="w-full min-h-screen flex justify-center items-center bg-gray-50 py-6">
            <div className="w-full max-w-3xl p-4 bg-white rounded-lg shadow-md">
                <div className="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg mx-auto">
                    <h2 className="text-2xl font-bold sm:text-xl text-center">Your Profile</h2>

                    <div className="grid max-w-2xl mx-auto mt-8">
                        <div className="flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0">
                            <img
                                className="object-cover w-40 h-40 p-1 rounded-full ring-2 ring-indigo-300 dark:ring-indigo-500"
                                src={profileImage}
                                alt="profile"
                            />
                        </div>

                        <div className="items-center mt-8 sm:mt-14 text-[#202142]">
                            <div className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                                <div className="w-full">
                                    <label htmlFor="full_name" className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">
                                        Your full name
                                    </label>
                                    <input
                                        type="text"
                                        id="full_name"
                                        className={`bg-indigo-50 border ${fullNameError ? 'border-red-500' : 'border-indigo-300'} text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5`}
                                        value={fullName}
                                        onChange={(e) => setFullName(e.target.value)}
                                        onBlur={validateFullName}
                                        placeholder="Enter your full name"
                                        required
                                    />
                                    {fullNameError && <p className="text-red-500 text-sm">{fullNameError}</p>}
                                </div>

                                <div className="w-full">
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">
                                        Your email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className={`bg-indigo-50 border ${emailError ? 'border-red-500' : 'border-indigo-300'} text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5`}
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        onBlur={validateEmail}
                                        placeholder="Enter your email address"
                                        required
                                    />
                                    {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
                                </div>
                            </div>

                            <div className="mb-2 sm:mb-6">
                                <label htmlFor="profession" className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">
                                    Profession
                                </label>
                                <input
                                    type="text"
                                    id="profession"
                                    className={`bg-indigo-50 border ${professionError ? 'border-red-500' : 'border-indigo-300'} text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5`}
                                    value={profession}
                                    onChange={(e) => setProfession(e.target.value)}
                                    onBlur={validateProfession}
                                    placeholder="Enter your profession"
                                    required
                                />
                                {professionError && <p className="text-red-500 text-sm">{professionError}</p>}
                            </div>

                            <div className="mb-6">
                                <label htmlFor="bio" className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">
                                    Bio
                                </label>
                                <textarea
                                    id="bio"
                                    rows="4"
                                    className="block p-2.5 w-full text-sm text-indigo-900 bg-indigo-50 rounded-lg border border-indigo-300 focus:ring-indigo-500 focus:border-indigo-500"
                                    value={bio}
                                    onChange={(e) => setBio(e.target.value)}
                                    placeholder="Tell us about yourself"
                                />
                            </div>

                            <div className="flex justify-end">
                                <button
                                    onClick={handleSave}
                                    className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                                >
                                    Save
                                </button>
                            </div>

                            {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
                            {successMessage && <p className="text-green-500 mt-4">{successMessage}</p>}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Profile;
