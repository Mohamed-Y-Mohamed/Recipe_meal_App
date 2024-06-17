import React, { useState, useEffect } from 'react';
import Loader from './loader'; // Adjust the path if Loader is located in a different directory

function withLoader(Component) {
    return function WithLoaderComponent(props) {
        const [loading, setLoading] = useState(true);

        useEffect(() => {
            const timer = setTimeout(() => {
                setLoading(false);
            }, 4000); // Match this duration with the animation time

            return () => clearTimeout(timer);
        }, []);

        return loading ? <Loader /> : <Component {...props} />;
    };
}

export default withLoader;
