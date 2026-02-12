import TextField from "@mui/material/TextField";

function TextArea({value , func} : {value:string , func:(e:any) => void}) {
    return (
        <TextField
            name = "About"
            label="About"
            value={value}
            onChange={func}
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
            multiline
            rows={4}
            fullWidth
            variant="outlined"
        />
    );
}

export default TextArea;
