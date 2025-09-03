import React from "react";
import { Button } from "../ui/button";
export const AccessDenied = () => {
    const CheckCircleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
    );

    // Bell Icon for another event type
    // NOTE: kebab-case attributes (e.g., stroke-width) were changed to camelCase (strokeWidth) for JSX compatibility.
    const BellIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        </svg>
    );

    const CalendarIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
            <line x1="16" x2="16" y1="2" y2="6" />
            <line x1="8" x2="8" y1="2" y2="6" />
            <line x1="3" x2="21" y1="10" y2="10" />
        </svg>
    );

    return (
        <div className=" from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center font-sans">

            {/* Card container with enhanced shadow and hover effects */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl max-w-lg w-full lg:p-8 p-4 text-center transform transition-all hover:shadow-2xl hover:-translate-y-1.5 duration-300">

                {/* Success Icon */}
                <CheckCircleIcon className="w-16 h-16 text-green-500 mx-auto mb-4" />

                {/* Main Heading */}
                <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                    Quiz Submitted!
                </h1>

                <p className="text-md text-gray-500 dark:text-gray-400 mb-6">Thank you for your participation.</p>

                {/* Link Button */}
                <a
                    href="https://www.instagram.com/me_riise/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-blue-700 transition-transform transform hover:-translate-y-1 duration-300 ease-in-out"
                >
                    Visit meriise.org
                </a>

               
                 <p className="text-sm text-gray-600 dark:text-gray-300 my-6">
                    Results & answers will be displayed in the ME-RIISE instagram official page.
                </p>

                <p className="text-xs text-gray-400 dark:text-gray-500 mt-2 bg-yellow-100 dark:bg-gray-700 px-3 py-1 rounded-full inline-block">
                    Note: You have already attempted this quiz. Retakes are not allowed.
                </p>

                {/* Divider */}
                <div className="border-t-2 border-gray-200 dark:border-gray-700 my-8"></div>

                {/* Upcoming Events Section */}
                <div className="text-left">
                    <h2 className="text-xl font-semibold text-gray-700 dark:text-white mb-4 text-center">Our Upcoming Events</h2>
                    <div className="space-y-3">
                        {/* Event Item 1 */}
                        <div className="bg-blue-50 dark:bg-gray-700/50 rounded-lg p-4 flex items-center space-x-4 shadow-inner transition-transform duration-300 hover:scale-[1.03]">
                            <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-full">
                                <CalendarIcon className="w-6 h-6 text-blue-600 dark:text-blue-300" />
                            </div>
                            <div>
                                <p className="text-lg font-bold text-blue-800 dark:text-blue-200">Bridging Generations</p>
                                <p className="text-sm font-bold text-blue-800 dark:text-blue-200">7th Episode with XYZ</p>
                                <p className="text-sm text-gray-600 dark:text-gray-300">This Saturday @ 10:00 AM</p>
                                <button className="bg-blue-500 text-white p-2 mt-4 rounded-md cursor-pointer transition-transform transform hover:-translate-y-1 duration-300 ease-in-out">Join here</button>
                            </div>
                        </div>
                        
                    </div>
                </div>

            </div>
        </div>
    )
}