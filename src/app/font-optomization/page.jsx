import { Poppins } from 'next/font/google';

const poppins = Poppins({
    subsets: ['latin'],
    weight: '800',
    display: 'swap'
});

export default function Home() {
    return (
        <div className={poppins.className}>
            <h1>Hello, Next.js with Google Font! 👋</h1>

            <h2>🔥 Benefits of Using next/font/google:</h2>
            <ul>
                <li>✅ **Automatic Optimization** – Loads only required font styles.</li>
                <li>✅ **No Flash of Unstyled Text (FOUT)** – Reduces layout shift.</li>
                <li>✅ **Self-hosted Fonts** – Improves performance (No external request to Google).</li>
                <li>✅ **Preloading Enabled** – Fonts are loaded faster.</li>
                <li>✅ **Easier to Use** – No need to manually add `link` tags.</li>
            </ul>
            <br /> <br />

            <h2>📌 How to Use Google Fonts in Next.js</h2>

            <pre style={{ background: '#000', padding: '10px', borderRadius: '5px', textAlign: 'left' }}>
                {`
                    import { Poppins } from 'next/font/google';

                    const poppins = Poppins({ 
                        subsets: ['latin'],
                        weight: '900',
                        display: 'swap'
                    });
                `}

            </pre>
        </div>
    );
}
