// app/(main)/dashboard/page.js

export default function DashboardPage() {
    return (
        <div className="min-h-screen p-8 bg-gray-100">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Welcome to your Dashboard!</h1>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-600">You have successfully logged in/signed up.</p>
                <p className="mt-4 text-sm text-gray-500">
                    This is where the user will manage their documents and services.
                </p>
            </div>
        </div>
    );
}