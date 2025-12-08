// app/(main)/page.js

export default function HomePage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Your App!</h1>
            <p className="text-xl text-gray-600">This is the main landing page content.</p>
            <div className="mt-8 space-x-4">
                <a href="/login" className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
                    Get Started (Sign Up)
                </a>
            </div>
        </div>
    );
}