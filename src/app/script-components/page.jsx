"use client";
import React from "react";
import Script from "next/script";

const ScriptComponents = () => {
    return (
        <div>
            <h1>🚀 Next.js Script Component</h1>
            <h2>📌 Using External Libraries Efficiently</h2>

            <pre>
                ✅ Benefits of Next.js Script Component: <br />
                ✔ Improves Performance – Loads scripts efficiently. <br />
                ✔ SEO Friendly – Ensures search engines can index content properly. <br />
                ✔ Execution Control – Load scripts at the right time. <br />
                ✔ Prevents Render Blocking – Ensures faster page loads.
            </pre>
            <br /><br />

            {/* ✅ Example: External Script (Lazy Load) */}
            <Script
                src="https://www.google-analytics.com/analytics.js"
                strategy="lazyOnload"
                onLoad={() => console.log("✅ Google Analytics script loaded!")}
            />

            {/* ✅ Example: External Script from Public Folder */}
            {/* Place your script in the public folder (e.g., /public/myscript.js) */}
            <Script src="/myscript.js" strategy="afterInteractive" />

            {/* ✅ Example: Inline Script */}
            <Script
                id="custom-inline-script"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `console.log("✅ Inline script executed after hydration!");`,
                }}
            />

            <h2>📌 Available Strategies in the Script Component</h2>
            <pre>
                - 🟢 beforeInteractive → Loads before hydration (for critical scripts). <br />
                - 🟡 afterInteractive → Loads after hydration (default, recommended). <br />
                - 🔵 lazyOnload → Loads when the page is idle (best for performance).
            </pre>
            <br /><br />

            <h2>📌 Best Use Cases for Next.js Script Component</h2>
            <pre>
                ✔ Google Analytics, Facebook Pixel, Ads, and Tracking Scripts. <br />
                ✔ External JS libraries like jQuery, Chart.js, or third-party widgets. <br />
                ✔ Custom scripts stored in the Public folder (local script files).
            </pre>
        </div>
    );
};

export default ScriptComponents;
