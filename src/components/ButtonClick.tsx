import { Button } from "@mui/material"

export const ButtonClick = ({ text, color = "info" }: {
    text: string | React.ReactNode, color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
}) => {
    return (
        <Button
            type="button"
            color={color}
            variant="contained"
        >{text}</Button>
    )
}