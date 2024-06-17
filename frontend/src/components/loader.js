import React from 'react';
import './style/loader.css'; // Adjust the path if needed

function Loader() {
    return (
        <div className="loader">
            <div className="panWrapper">
                <div className="pan">
                    <div className="food"></div>
                    <div className="panBase"></div>
                    <div className="panHandle"></div>
                </div>
                <div className="panShadow"></div>
            </div>
            <div className="progress">
                <div className="color"></div>
            </div>
            <div className="loading-text">Loading...</div>
        </div>
    );
}

export default Loader;
