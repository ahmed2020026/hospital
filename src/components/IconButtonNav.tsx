import { IconButton } from "@mui/material";
import React from "react";

type IconButtonNavProps = {
    icon: React.ReactNode;
    color?: string;
    bgColor?: string;
    text?: string;
    onClick?: () => void;
};

export const IconButtonNav: React.FC<IconButtonNavProps> = ({
    icon,
    color = "gray",
    bgColor = "rgba(25, 118, 210, 0.08)",
    text = "Navigation button",
    onClick,
}) => {
    return (
        <IconButton
            aria-label={text}
            onClick={onClick}
            sx={{
                color: color,
                "&:hover, &:focus-visible": {
                    color: color || "#1976d2",
                    backgroundColor: bgColor,
                    outline: "none",
                },
            }}
        >
            {icon}
        </IconButton>
    );
};
