import { IconButton } from "@mui/material";
import React from "react";

export const IconButtonNav = ({ icon, color, bgColor , text="Icon" }: { icon: React.ReactNode, color?: string, bgColor?: string , text?:string}) => {
    return (
        <IconButton
            aria-label={text}
            sx={{
                color: "gray",
                transition: "0.3s",
                borderRadius: `${color? "5px" : ''}`,
                "&:hover": {
                    color: color ? '' : "#1976d2",
                    backgroundColor: bgColor ? '' : "rgba(25, 118, 210, 0.08)",
                },
            }}
        >
            {icon}
        </IconButton>
    );
};
