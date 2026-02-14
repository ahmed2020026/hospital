import { Button } from "@mui/material";
import React from "react";

interface ButtonClickProps {
    text: string | React.ReactNode;
    color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
    variant?: "contained" | "outlined" | "text";
    onClick?: () => void;
    ariaLabel?: string;
    type?: "button" | "submit" | "reset";
}

export const ButtonClick: React.FC<ButtonClickProps> = React.memo(
    ({ text, type = "button", color = "info", variant = "contained", onClick, ariaLabel }) => {
        return (
            <Button
                type={type}
                color={color}
                variant={variant}
                onClick={onClick}
                aria-label={ariaLabel || (typeof text === 'string' ? text : undefined)}
            >
                {text}
            </Button>
        );
    }
);
