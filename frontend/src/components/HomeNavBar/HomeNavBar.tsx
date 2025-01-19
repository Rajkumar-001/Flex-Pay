

export default function HomeNavbar(){
    //I have to show name with welcome then date then time then logout button


    return (
        <div className="flex justify-between items-center bg-blue-200 p-4 border-b-2 border-blue-500 gap-5">

            <div className="flex items-center justify-between">
                <h1>Welcome</h1>
                <p className="px-20"> {new Date().toDateString()}</p>
                </div>
            <div className="flex items-center justify-between gap-10">                
                <div>
                <button className="bg-red-800 text-white p-2 rounded-lg ">DarkMode</button>
                </div>

                <div>
                <button className="bg-blue-500 text-white p-2 rounded-lg">Logout</button>
                </div>

        </div>

        </div>  


    )






}