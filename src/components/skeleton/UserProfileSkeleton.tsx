import React from 'react'

const UserProfileSkeleton = () => {
    return (
        <div className="neumorphism p-5 rounded max-w-[900px]  mt-8 h-fit flex items-center w-11/12">
            <div className="relative profileImage mr-10 w-[250px] h-[250px] flex items-center justify-center">
                <div
                    className="w-full loaders h-full object-cover bg-gray-200 rounded-full"
                ></div>
            </div>
            <div className="w-6/12 flex flex-col flex-grow">
                <div
                    className="w-full flex flex-col items-start justify-center"
                >
                    <div className="w-full flex items-center justify-center mb-1 flex-wrap my-2">
                        <h3 className="font-questrial font-semibold text-lg w-[100px]">
                            Names:{" "}
                        </h3>
                        <div
                            className="bg-gray-300 h-8 rounded-2xl loaders ml-2.5 py-[7px] px-[15px] outline-none border-none text-base flex-grow"
                        ></div>
                    </div>
                    <div className="w-full flex items-center justify-center mb-1 flex-wrap my-2">
                        <h3 className="font-questrial font-semibold text-lg w-[100px]">
                            Code:{" "}
                        </h3>
                        <div
                            className="bg-gray-300 h-8 rounded-2xl loaders ml-2.5 py-[7px] px-[15px] outline-none border-none text-base flex-grow"
                        ></div>
                    </div>
                    <div className="w-full flex items-center justify-center mb-1 flex-wrap my-2">
                        <h3 className="font-questrial font-semibold text-lg w-[100px]">
                            Tel:{" "}
                        </h3>

                        <div
                            className="bg-gray-300 h-8 rounded-2xl loaders ml-2.5 py-[7px] px-[15px] outline-none border-none text-base flex-grow"
                        ></div>
                    </div>
                    <div className="w-full flex items-center justify-center mb-1 flex-wrap my-2">
                        <h3 className="font-questrial font-semibold text-lg w-[100px]">
                            Title:{" "}
                        </h3>
                        <div
                            className="bg-gray-300 h-8 rounded-2xl loaders ml-2.5 py-[7px] px-[15px] outline-none border-none text-base flex-grow"
                        ></div>
                    </div>
                    <div className="w-full flex items-center justify-center mb-1 flex-wrap my-2">
                        <h3 className="font-questrial font-semibold text-lg w-[100px]">
                            Email:{" "}
                        </h3>

                        <div
                            className="bg-gray-300 h-8 rounded-2xl loaders ml-2.5 py-[7px] px-[15px] outline-none border-none text-base flex-grow"
                        ></div>
                    </div>
                    <div className="w-full flex items-center justify-center mb-1 flex-wrap my-2">
                        <h3 className="font-questrial font-semibold text-lg w-[100px]">
                            Lessons:{" "}
                        </h3>
                        <div
                            className="bg-gray-300 h-8 rounded-2xl loaders ml-2.5 py-[7px] px-[15px] outline-none border-none text-base flex-grow"
                        ></div>
                    </div>
                    <div className="w-full flex items-center justify-center mb-1 flex-wrap my-2">
                        <h3 className="font-questrial font-semibold text-lg w-[100px]">
                            Password:{" "}
                        </h3>
                        <div
                            className="bg-gray-300 h-8 rounded-2xl loaders ml-2.5 py-[7px] px-[15px] outline-none border-none text-base flex-grow"
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfileSkeleton