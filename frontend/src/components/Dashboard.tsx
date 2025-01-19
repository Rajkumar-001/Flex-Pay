


import Sidebar from "./SideBar/SideBar";

import UserDetails from "./UserDetails/UserDetails.tsx";

import HomeNavbar from "./HomeNavBar/HomeNavBar.tsx";


export default function Dashboard() {
    return (
        <div className="h-screen w-full flex bg-white-100 items-stretch">
            <div className="w-1/9 h-full">
                <Sidebar />
            </div>  

            <div className="flex-1 bgwhite-500 flex flex-col">
                <HomeNavbar />
              
                <div className="bg-red-white-[10%] w-full">
                </div>

               
                <div className="flex h-[50%] w-full bg-white-500">
                        <UserDetails />
                
                    <div className="bg-white-500 w-1/2">
                       
                    </div>
                </div>
                <div className="">
                    
                </div>
            </div>
        </div>
    );
}
