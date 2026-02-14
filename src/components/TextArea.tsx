import React from "react";
import TextField from "@mui/material/TextField";

interface TextAreaProps {
    label?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    rows?: number;
}

const TextArea: React.FC<TextAreaProps> = ({ label = "About", value = '', onChange, rows = 4 }) => {
    const id = `textarea-${label.replace(/\s+/g, '-')}`;

    return (
        <TextField
            id={id}
            name={label}
            label={label}
            aria-label={label}
            value={value}
            onChange={onChange}
            multiline
            rows={rows}
            fullWidth
            variant="outlined"
            sx={{
                "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                        borderColor: '#E0E3E7',
                    },
                    "&:hover fieldset": {
                        borderColor: '#B2BAC2',
                    },
                    "&.Mui-focused fieldset": {
                        borderColor: '#0288d1',
                        borderWidth: "1px"
                    },
                }
            }}
        />
    );
};

export default TextArea;
