import React from "react";

function Card({ username = "User", btnText = "Click Here" }) {
    return <>
        <div className="max-w-xs rounded-md shadow-md bg-black text-white mb-3">
            <img
                src="https://images.pexels.com/photos/879109/pexels-photo-879109.jpeg"
                alt=""
                className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
            />
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-3xl font-semibold tracking-wide">{username}</h2>
                    <p className="text-gray-400">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum
                        soluta amet corporis accusantium aliquid consectetur eaque!
                    </p>
                    <button
                        type="button"
                        className="block w-fit bg-fixed rounded-md bg-gray-100 text-black mt-4">
                        <span className="text-xl font-serif">{btnText} →</span>
                    </button>
                </div>
            </div>
        </div>
    </>
}

export default Card