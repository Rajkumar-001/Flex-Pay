import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hook.tsx";
import { fetchUser } from "../../store/Reducers/UserReducer";

export default function UserDetails() {
    const dispatch = useAppDispatch();
    const { isLoading, user, error } = useAppSelector((state) => state.user);

    useEffect(() => {
        dispatch(fetchUser());
    }, [dispatch]);

    return (
        <div className="flex justify-center items-start bg-gray-100 py-6 h-96">
            <div className="max-w-lg w-full bg-white shadow-xl rounded-lg p-8 flex-1 h-full">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-3xl font-semibold text-gray-800">User Details</h2>
                    <p className="text-sm text-gray-600">{new Date().toLocaleDateString()}</p>
                </div>

                {isLoading && (
                    <div className="flex justify-center items-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
                    </div>
                )}

                {error && <p className="text-red-500 text-center">{error}</p>}

                {user && (
                    <div>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-600">First Name:</span>
                                <span className="font-semibold text-gray-800">{user.firstName}</span>
                            </div>

                            <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-600">Last Name:</span>
                                <span className="font-semibold text-gray-800">{user.lastName}</span>
                            </div>

                            <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-600">Email:</span>
                                <span className="font-semibold text-gray-800">{user.email}</span>
                            </div>

                            <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-600">Balance:</span>
                                <span className="font-semibold text-gray-800">{user.balance}</span>
                            </div>

                            <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-600">UPI ID:</span>
                                <span className="font-semibold text-gray-800">{user.upiId}</span>
                            </div>
                        </div>

                        <div className="mt-6 flex justify-center">
                            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-500">
                                Update Information
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
