'use client'
import React from "react";
import Script from "next/script";

const ScriptComponents = () => {
    return (
        <div>
            <h1>🚀 Next.js Script Component</h1>

            <pre>
                ✅ Benefits of Next.js Script Component: <br />
                ✔ Improves Performance – Loads scripts efficiently. <br />
                ✔ SEO Friendly – Ensures search engines can index content properly. <br />
                ✔ Execution Control – Load scripts at the right time.
            </pre>
            <br /> <b></b>

            {/* ✅ Example: External Script (Lazy Load) */}
            <Script
                src="https://www.google-analytics.com/analytics.js"// we can also make file in pulic folder and use her
                strategy="lazyOnload"
                onLoad={() => console.log("Google Analytics script loaded!")}
            />

            {/* ✅ Example: Inline Script */}
            <Script
                id="custom-inline-script"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `console.log("Inline script executed after hydration!");`,
                }}
            />

            <pre>
                ✅ Strategies in Script Component: <br />
                - beforeInteractive → Loads before hydration (for critical scripts). <br />
                - afterInteractive → Loads after hydration (default). <br />
                - lazyOnload → Loads when the page is idle (improves performance).
            </pre>
        </div>
    );
};

export default ScriptComponents;
