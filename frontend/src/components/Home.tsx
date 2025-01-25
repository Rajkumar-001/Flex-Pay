import Nav from "./Nav";

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Navigation Bar */}
            <Nav />

            {/* Main Content Section */}
            <div className="flex justify-center items-center py-10">
                <h2 className="text-3xl font-semibold text-gray-800">
                    Welcome to the Banking App
                </h2>
            </div>
        </div>
    );
}
