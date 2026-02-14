import React from "react";

interface HeadSectionProps {
    head: string;
    description: string;
}

export const HeadSection: React.FC<HeadSectionProps> = ({ head, description }) => {
    return (
        <div className="text-center mb-5 mt-5 lg:mt-0">
            <h2 className="text-3xl md:text-4xl font-semibold mb-2">{head}</h2>
            <p className="w-full max-w-xl mx-auto text-sm text-gray-500">{description}</p>
        </div>
    );
};
