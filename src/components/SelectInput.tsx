import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"

export const SelectInput = () => {
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
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age">
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
        </FormControl >
    )
}