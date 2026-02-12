import { IconButton } from "@mui/material";
import React from "react";

type IconButtonNavProps = {
    icon: React.ReactNode;
    color?: string;
    bgColor?: string;
    text?: string;
    func?: () => void;
};

export const IconButtonNav = ({
    icon,
    color,
    bgColor,
    text = "Icon",
    func,
}: IconButtonNavProps) => {
    return (
        <IconButton
            aria-label={text}
            onClick={func}
            sx={{
                color: color || "gray",
                "&:hover": {
                    color: color || "#1976d2",
                    backgroundColor: bgColor || "rgba(25, 118, 210, 0.08)",
                },
            }}
        >
            {icon}
        </IconButton>
    );
};
