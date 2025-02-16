'use client'
import React from 'react';
import { Button } from "@/components/ui/button";

const Btn = ({ data }) => {
    // if (!data) {
    //     return <p className="text-red-500">❌ No data available</p>;
    // }

    return (
        <div className="m-2">
            <Button 
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
                onClick={() => {
                    console.log("Button Clicked! Data:", data);
                    alert(data);
                }}
            >
                More
            </Button>
        </div>
    );
};

export default Btn;
