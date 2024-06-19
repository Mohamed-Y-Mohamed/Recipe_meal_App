import React, { useState } from 'react';
import videoBackground from "../assets/intro.mp4";
import logo from "../assets/logo/file.png";

const Signup = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [fullNameError, setFullNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const validateFullName = () => {
        if (!fullName.trim()) {
            setFullNameError('Full name is required');
            return false;
        }
        if (!/^[a-zA-Z\s]*$/.test(fullName)) {
            setFullNameError('Full name should contain only letters and spaces');
            return false;
        }
        setFullNameError('');
        return true;
    };

    const validateEmail = () => {
        if (!email.trim()) {
            setEmailError('Email is required');
            return false;
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
            setEmailError('Invalid email address');
            return false;
        }
        setEmailError('');
        return true;
    };

    const validatePassword = () => {
        if (!password.trim()) {
            setPasswordError('Password is required');
            return false;
        }
        if (password.length < 8) {
            setPasswordError('Password must be at least 8 characters long');
            return false;
        }
        if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/.test(password)) {
            setPasswordError('Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character');
            return false;
        }
        setPasswordError('');
        return true;
    };

    const validateConfirmPassword = () => {
        if (confirmPassword !== password) {
            setConfirmPasswordError('Passwords do not match');
            return false;
        }
        setConfirmPasswordError('');
        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const isFullNameValid = validateFullName();
        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();
        const isConfirmPasswordValid = validateConfirmPassword();

        if (isFullNameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid) {
            // Simulating form submission success
            setSuccessMessage('Signup successful!');
            // Reset form fields
            setFullName('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
        }
    };

    return (
        <div className="bg-white dark:bg-gray-900">
            <div className="flex justify-center h-screen">

                {/* Signup Form */}
                <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
                    <div className="flex-1">
                        <div className="text-center">
                            <div className="flex justify-center mx-auto">
                                <img class="w-auto h-7 md:h-12" src={logo} alt="" style={{ width: "50%", height: "50%" }} />

                            </div>
                            <p className="mt-3 text-gray-500 dark:text-gray-300">
                                Sign up for a new account
                            </p>
                        </div>

                        <div className="mt-8">
                            <form onSubmit={handleSubmit}>
                                {/* Full Name */}
                                <div className="mb-4">
                                    <label
                                        htmlFor="fullName"
                                        className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                                    >
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        id="fullName"
                                        name="fullName"
                                        value={fullName}
                                        onChange={(e) => setFullName(e.target.value)}
                                        onBlur={validateFullName}
                                        placeholder="Enter your full name"
                                        className={`block w-full px-4 py-2 mt-1 text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg focus:border-blue-400 dark:bg-gray-900 dark:text-gray-300 dark:placeholder-gray-600 dark:border-gray-700 focus:outline-none focus:ring-blue-400 focus:ring-opacity-40 ${fullNameError ? 'border-red-500' : ''}`}
                                    />
                                    {fullNameError && (
                                        <p className="mt-1 text-xs text-red-500">{fullNameError}</p>
                                    )}
                                </div>

                                {/* Email */}
                                <div className="mb-4">
                                    <label
                                        htmlFor="email"
                                        className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                                    >
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        onBlur={validateEmail}
                                        placeholder="Enter your email address"
                                        className={`block w-full px-4 py-2 mt-1 text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg focus:border-blue-400 dark:bg-gray-900 dark:text-gray-300 dark:placeholder-gray-600 dark:border-gray-700 focus:outline-none focus:ring-blue-400 focus:ring-opacity-40 ${emailError ? 'border-red-500' : ''}`}
                                    />
                                    {emailError && (
                                        <p className="mt-1 text-xs text-red-500">{emailError}</p>
                                    )}
                                </div>

                                {/* Password */}
                                <div className="mb-4">
                                    <label
                                        htmlFor="password"
                                        className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                                    >
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        onBlur={validatePassword}
                                        placeholder="Enter your password"
                                        className={`block w-full px-4 py-2 mt-1 text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg focus:border-blue-400 dark:bg-gray-900 dark:text-gray-300 dark:placeholder-gray-600 dark:border-gray-700 focus:outline-none focus:ring-blue-400 focus:ring-opacity-40 ${passwordError ? 'border-red-500' : ''}`}
                                    />
                                    {passwordError && (
                                        <p className="mt-1 text-xs text-red-500">{passwordError}</p>
                                    )}
                                </div>

                                {/* Confirm Password */}
                                <div className="mb-4">
                                    <label
                                        htmlFor="confirmPassword"
                                        className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                                    >
                                        Confirm Password
                                    </label>
                                    <input
                                        type="password"
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        onBlur={validateConfirmPassword}
                                        placeholder="Confirm your password"
                                        className={`block w-full px-4 py-2 mt-1 text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg focus:border-blue-400 dark:bg-gray-900 dark:text-gray-300 dark:placeholder-gray-600 dark:border-gray-700 focus:outline-none focus:ring-blue-400 focus:ring-opacity-40 ${confirmPasswordError ? 'border-red-500' : ''}`}
                                    />
                                    {confirmPasswordError && (
                                        <p className="mt-1 text-xs text-red-500">{confirmPasswordError}</p>
                                    )}
                                </div>

                                {/* Submit Button */}
                                <div className="mb-6">
                                    <button
                                        type="submit"
                                        className="w-full px-4 py-2 text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                                    >
                                        Sign up
                                    </button>
                                </div>

                                {/* Success Message */}
                                {successMessage && (
                                    <p className="text-sm text-green-500">{successMessage}</p>
                                )}

                            </form>
                            <p className="mt-6 text-sm text-center text-gray-400">
                                Already have an account?{' '}
                                <a
                                    href="/Signin"
                                    className="text-blue-500 focus:outline-none focus:underline hover:underline"
                                >
                                    Sign in
                                </a>
                                .
                            </p>
                        </div>
                    </div>
                </div>
                {/* Video Section */}

                <div className="hidden lg:block lg:w-2/3 relative">
                    <video
                        autoPlay
                        loop
                        muted
                        className="absolute inset-0 w-full h-full object-cover"
                    >
                        <source src={videoBackground} type="video/mp4" />
                    </video>
                    <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
                        <div>
                            <h2 className="text-2xl font-bold text-white sm:text-3xl">
                                Meraki UI
                            </h2>

                            <p className="max-w-xl mt-3 text-gray-300">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
                                autem ipsa, nulla laboriosam dolores, repellendus perferendis
                                libero suscipit nam temporibus molestiae
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
