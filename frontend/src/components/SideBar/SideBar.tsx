import { HomeIcon } from "../../Icons/HomeIcon"
import { SearchIcon } from "../../Icons/SearchIcon"
import { SettingIcon } from "../../Icons/SettingIcon"
import { TransferIcon } from "../../Icons/TranferIcon"
import { TransactionIcon } from "../../Icons/TranscationIcon";

export default function SideBar() {
    return (
        <div className="bg-gray-800 h-screen w-32 flex flex-col gap-2 text-white p-5   justify-between ">
            <div className="flex flex-col gap-8">
                <HomeIcon />
                <SearchIcon />
                <TransferIcon />
                <TransactionIcon />
            </div>
            <div className="mt-auto"> 
                <SettingIcon />
            </div>
        </div>
    );
}

