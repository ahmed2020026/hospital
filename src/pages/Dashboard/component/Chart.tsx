import Box from '@mui/material/Box';
import { LineChart } from '@mui/x-charts/LineChart';

const xLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const rawPatients = [120, 900, 350, 100, 345, 140, 200];
const rawDoctors = [100, 600, 340, 30, 480, 80, 130];
const rawRevenue = [160, 270, 360, 400, 250, 210, 700];

const maxValue = Math.max(...rawPatients, ...rawDoctors, ...rawRevenue);

// normalize البيانات 0-100
const normalize = (arr: number[]) => arr.map(v => (v / maxValue) * 100);

const patientsData = normalize(rawPatients);
const doctorsData = normalize(rawDoctors);
const revenueData = normalize(rawRevenue);

export default function MultiGradientLineChart() {
    return (
        <Box sx={{ width: '100%', height: '100%' }}> {/* خلي ارتفاعه 100% عشان ياخد كل الارتفاع المتاح */}
            <LineChart
                series={[
                    { data: patientsData, label: 'Patients', showMark: false, area: true, color: '#4f46e5' },
                    { data: doctorsData, label: 'Doctors', showMark: false, area: true, color: '#16a34a' },
                    { data: revenueData, label: 'Revenue', showMark: false, area: true, color: '#f59e0b' },
                ]}
                xAxis={[{ data: xLabels, scaleType: 'point' }]}
                yAxis={[{ width: 50,  min: 0, max: 100}]}
                grid={{ horizontal: true }}
                sx={{
                    height: '100%', // مهم جداً: هذا يجعل الخطوط والـ area تمتد لكل ارتفاع الـ Box
                    '& .MuiAreaElement-root:nth-of-type(1)': { fill: 'url(#patientsGradient)' },
                    '& .MuiAreaElement-root:nth-of-type(2)': { fill: 'url(#doctorsGradient)' },
                    '& .MuiAreaElement-root:nth-of-type(3)': { fill: 'url(#revenueGradient)' },
                }}
            >
                <defs>
                    <linearGradient id="patientsGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#4f46e5" stopOpacity={0.3} />
                        <stop offset="100%" stopColor="#4f46e5" stopOpacity={0} />
                    </linearGradient>

                    <linearGradient id="doctorsGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#16a34a" stopOpacity={0.3} />
                        <stop offset="100%" stopColor="#16a34a" stopOpacity={0} />
                    </linearGradient>

                    <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#f59e0b" stopOpacity={0.3} />
                        <stop offset="100%" stopColor="#f59e0b" stopOpacity={0} />
                    </linearGradient>
                </defs>
            </LineChart>
        </Box>
    );
}
