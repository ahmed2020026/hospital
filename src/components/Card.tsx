import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import React from 'react';

export type Doctor = {
    id: string;
    name: string;
    image: string;
    speciality: string;
    degree: string;
    experience: string;
    about: string;
    fees: number;
    address: {
        line1: string;
        line2: string;
    };
};

interface DoctorCardProps {
    doc: Doctor;
}

const DoctorCard: React.FC<DoctorCardProps> = React.memo(({ doc }) => {
    return (
        <Card
            sx={{
                width: "100%",
                borderRadius: 3,
                border: "1px solid rgba(0,0,0,0.18)",
                boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
                transition: "all 0.3s ease",
                "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 12px 28px rgba(0,0,0,0.15)",
                },
                willChange: "transform",
            }}
        >
            <CardActionArea
                sx={{
                    "&:focus-visible": {
                        outline: "2px solid #22c55e",
                        outlineOffset: "2px",
                    },
                }}
            >
                <CardMedia
                    component="img"
                    height="160"
                    loading="lazy"
                    image={doc.image}
                    alt={`Profile image of Dr. ${doc.name}, ${doc.speciality}`}
                    sx={{
                        transition: "transform 0.4s ease",
                        bgcolor: "#EAEFFF",
                        "&:hover, &:focus": {
                            transform: "scale(1.05)",
                        },
                    }}
                />
                <CardContent>
                    <Typography
                        gutterBottom
                        variant="h6"
                        component="div"
                        sx={{
                            fontSize: "12px",
                            color: "#22c55e",
                            fontWeight: "bold",
                        }}
                        aria-label="Doctor availability"
                    >
                        Available
                    </Typography>
                    <Typography
                        gutterBottom
                        variant="h6"
                        component="h2"
                        sx={{ fontSize: "1.1rem", fontWeight: 600 }}
                    >
                        {doc.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {doc.speciality}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
});

export default DoctorCard;
