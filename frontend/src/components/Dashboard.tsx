import Sidebar from "./SideBar/SideBar";
import UserDetails from "./UserDetails/UserDetails.tsx";
import HomeNavbar from "./HomeNavBar/HomeNavBar.tsx";
import Send1 from "./SendComponent/Send1.tsx";

export default function Dashboard() {
    return (
        <div className="h-screen w-full flex bg-gray-100">
            {/* Sidebar */}
            <div className="w-64 h-screen bg-blue-800 text-white sticky top-0 shadow-lg">
                <Sidebar />
            </div>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col">
                {/* Navbar */}
                <div className="bg-white shadow-md sticky top-0 z-20">
                    <HomeNavbar />
                </div>

                {/* Main Section */}
                <div className="flex-grow p-6 bg-gradient-to-b from-gray-50 to-gray-200">
                    <div className="flex flex-col space-y-6">
                        {/* User Details */}
                        <div className="bg-white shadow-md rounded-lg p-6">
                            <UserDetails />
                        </div>

                        {/* Send Component Section */}
                        <div className="flex justify-center">
                            <div className="w-full md:w-2/3 bg-white shadow-lg rounded-lg p-6 border border-gray-300">
                                <h3 className="text-xl font-bold text-gray-800 mb-4">
                                    Send Money
                                </h3>
                                <Send1 />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="bg-blue-800 p-4 text-center text-white shadow-md">
                    <p>© 2025 Your Application. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    );
}
