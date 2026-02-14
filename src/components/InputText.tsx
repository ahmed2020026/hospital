import { TextField } from '@mui/material';
import React from 'react';

interface InputTextProps {
    label: string;
    type: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputText: React.FC<InputTextProps> = ({
    label,
    type,
    value = '',
    onChange,
}) => {
    const id = `input-${label.replace(/\s+/g, '-')}`;

    return (
        <TextField
            id={id}
            name={label}
            label={label}
            value={value}
            onChange={onChange}
            fullWidth
            size="small"
            type={type}
            color="info"
            aria-label={label}
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
                        borderWidth: "1px",
                    },
                },
            }}
        />
    );
};
