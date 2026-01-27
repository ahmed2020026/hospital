import { TextField } from '@mui/material'

export const InputText = ({ label, type }: { label: string, type: string }) => {
    return (
        <TextField fullWidth aria-label={label} label={label} type={type} id="margin-none" size='small' color='info'
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
            }} />
    )
}

