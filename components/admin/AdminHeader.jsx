"use client"
import React, { useState, useEffect } from 'react';

export default function AdminHeader() {
    const [activeLink, setActiveLink] = useState("");

    const navigation = [
        {
            href: "/admin/category",
            name: "Categories"
        },
        {
            href: "/admin/subCategory",
            name: "Sub Category"
        },
        {
            href: "/admin/topic",
            name: "Topics"
        },
        {
            href: "/admin/notes",
            name: "Notes"
        },
       
    ];

    const handleLinkClick = (href) => {
        setActiveLink(href);
    };
    useEffect(() => {
        const handlePathChange = () => {
            setActiveLink(window.location.pathname);
        };
        window.addEventListener('popstate', handlePathChange);
        return () => {
            window.removeEventListener('popstate', handlePathChange);
        };
    }, []);

    return (
        <div className="max-w-screen-xl mx-auto px-4 pt-4 md:px-8">
            <div className="max-w-lg">
                <h3 className="text-gray-800 text-2xl font-bold">
                    Desishub Notes
                </h3>
                <p className="text-gray-600 mt-2">
                    Improving coding skills and in a more simplified way
                </p>
            </div>
            <div className="mt-6">
                <ul className="w-full border-b flex items-center gap-x-3 overflow-x-auto">
                    {navigation.map((item, idx) => (
                        <li key={idx} className={`py-2 border-b-2 ${activeLink === item.href ? "border-indigo-600 text-indigo-600" : "border-white text-gray-500"}`}>
                            <a
                                href={item.href}
                                className="py-2.5 px-4 rounded-lg duration-150 text-sm hover:text-indigo-600 hover:bg-gray-50 active:bg-gray-100 font-medium"
                                onClick={() => handleLinkClick(item.href)}
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
