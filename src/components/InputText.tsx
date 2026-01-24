import { TextField } from '@mui/material'

export const InputText = ({ label  }: { label: string }) => {
    return (
        <TextField fullWidth label={label} id="margin-none" size='small' color='info'
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
                        borderWidth:"1px"
                    },
                }
            }} />
    )
}

