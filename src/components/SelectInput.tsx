import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

import React from "react";

interface SelectInputProps {
    label: string;
    values: string[];
    value: string;
    onChange: (e:any) => void;
}

export const SelectInput: React.FC<SelectInputProps> = ({ label, values, value, onChange }) => {
    const id = `select-${label.replace(/\s+/g, '-')}`;
    const labelId = `${id}-label`;

    return (
        <FormControl
            fullWidth
            size="small"
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
        >
            <InputLabel id={labelId}>{label}</InputLabel>
            <Select
                labelId={labelId}
                id={id}
                name={label}
                onChange={onChange}
                value={value || ''}
                label={label}
            >
                {values.map((val) => (
                    <MenuItem key={val} value={val}>{val}</MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}
