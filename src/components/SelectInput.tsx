import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"

export const SelectInput = ({label , values ,value , func}:{label:string , values:string[] ,value:string, func:(e:any) => void}) => {
    return (
        <FormControl fullWidth size="small" sx={{
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
        }} >
            <InputLabel id="demo-simple-select-label">{label}</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name={label}
                onChange={func}
                value={value || ''}
                label={label}>
                    {Array.from(values).map((value) => (
                        <MenuItem value={value}>{value}</MenuItem>
                    ))}
            </Select>
        </FormControl >
    )
}