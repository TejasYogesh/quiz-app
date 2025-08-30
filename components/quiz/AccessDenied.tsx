import React from "react";
import { Button } from "../ui/button";
export const AccessDenied = () => {
    return (
        <div className="text-white flex items-center justify-center font-sans">
            <div className="container mx-auto rounded-lg max-w-2xl">
                <h1 className="text-4xl font-bold text-blue-400 mb-4">Results Will be announced</h1>
                <h1 className="text-xl font-bold text-blue-400 mb-4">Via Instagram @meriise</h1>
                <h1 className="text-xl font-bold text-blue-400 mb-4">
                    <a href="https://www.instagram.com/me_riise/">
                        <Button className="mr-4">Instagram</Button>
                    </a>
                    
                    <a href="https://www.instagram.com/me_riise/">
                        <Button>meriise.org</Button>
                    </a>
                </h1>
                <p className="text-lg text-gray-500">You can <span className="text-blue-500 font-bold text-2xl">Exit </span>from this Application.</p>

                <p className="text-sm text-gray-500">Note: You have already attempted this quiz. Retakes are not allowed.</p>
            </div>
        </div>
    )
}