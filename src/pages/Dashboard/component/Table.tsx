import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { assets } from '../../../assets/assets_admin/assets';
import { IconButton } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';

interface DynamicTableProps {
    data: Record<string, any>[],
    width: number
}

export default function BasicTable({ data, width }: DynamicTableProps) {
    return (
        <TableContainer component={Paper} sx={{boxShadow: '0 0 2px #999'}}>
            <Table sx={{ minWidth: width}} aria-label="customized table">
                <TableHead sx={{ backgroundColor: '#000' }}>
                    <TableRow>
                        <TableCell sx={{ color: 'white', py: 1 }}>Profile</TableCell>
                        <TableCell sx={{ color: 'white', py: 1 }}>View</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((data) => (
                        <TableRow
                            key={data.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align="left" sx={{
                                display: 'flex',
                                justifyContent: 'start',
                                alignItems: 'center',
                                gap: '10px'
                            }}>
                                <img
                                    src={data.image || assets.profile}
                                    alt="profile"
                                    className="w-10 h-10 block shrink-0"
                                />
                                <div>
                                    <h3 className='font-medium text-black text-base -mb-1'>{data.name}</h3>
                                    <p className='text-xs font-medium text-gray-500'>{data.action}</p>
                                </div>
                            </TableCell>
                            <TableCell align="left">
                                <IconButton aria-label="view">
                                    <VisibilityIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
