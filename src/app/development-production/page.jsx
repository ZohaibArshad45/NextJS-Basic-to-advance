import React from "react";

const DevelopmentProduction = () => {
    return (
        <div style={{ padding: "20px", fontFamily: "Arial" }}>
            <h1>🚀 Development vs. Production Build</h1>

            {/* Development Build */}
            <h2 style={{ color: "blue" }}>🛠 Development Build</h2>
            <ul>
                <li>Run with: <code>npm run dev</code></li>
                <li>Faster refresh with Hot Reloading</li>
                <li>Detailed error logs & warnings</li>
                <li>Not optimized for performance</li>
            </ul>

            {/* Production Build */}
            <h2 className="text-yellow-500">⚡ Production Build</h2>
            <ul>
                <li>Run with: <code>npm run build</code> → <code>npm run start</code></li>
                <li>Optimized, minified JavaScript & CSS</li>
                <li>Improved performance & caching</li>
                <li>Removes development-only warnings</li>
            </ul>

            {/* Environment Check */}
        </div>
    );
};

export default DevelopmentProduction;
