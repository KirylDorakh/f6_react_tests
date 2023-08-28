import React from 'react';

import '../styles/App.css'
import Link from "./Link.jsx";
import ErrorBoundary from "./f6_4_ErrorBoundary/ErrorBoundary.jsx";
import MyComponent from "./f6_4_ErrorBoundary/MyComponent.jsx";

const App = () => {
    return (
        <div>
            <Link page="/about">
                About
            </Link>
            <ErrorBoundary>
                <MyComponent/>
            </ErrorBoundary>
        </div>
    );
};

export default App;