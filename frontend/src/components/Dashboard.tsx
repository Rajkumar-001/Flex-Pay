import Sidebar from "./SideBar/SideBar";
import UserDetails from "./UserDetails/UserDetails.tsx";
import HomeNavbar from "./HomeNavBar/HomeNavBar.tsx";
import Send1 from "./SendComponent/Send1.tsx";

export default function Dashboard() {
    return (
        <div className="h-screen w-full flex bg-white-100 items-stretch">
            {/* Sidebar: Sticky Sidebar */}
            <div className="w-10 h-screen sticky top-0">
                <Sidebar />
            </div>



            {/* Main Content Area */}
            <div className="flex-1 flex flex-col">
                {/* Navbar */}
                <HomeNavbar />

                {/* Main Content Area with User Info and Send Components on the same line */}
                <div className="flex-grow p-6 bg-gray-100">
                    <div className="flex space-x-8">
                        {/* User Info and Send on the same line */}
                        <div className="w-1/2">
                            <UserDetails />
                        </div>

                        <div className="w-[30%] h-2/5">
                            <Send1 />
                        </div>
                    </div>
                </div>

                {/* Footer with Transaction Details */}
                <div className="bg-gray-200 p-6">
                    <h3 className="text-xl font-semibold text-gray-800">Transaction Details</h3>
                    <div className="mt-4">
                        <p className="text-gray-600">No transactions yet.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
