import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';
import { signOut } from 'firebase/auth';
import { auth } from '../Firebase';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
function Navbar() {
    const navigate = useNavigate();

    const logout = async () => {

        await signOut(auth);
        navigate("/auth");
    }
    return (
        <div className='navbar'>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
                            Firebase Authentication
                        </Typography>
                        <Button
                            onClick={logout}
                            size='xlarge'
                            color="inherit"
                            startIcon={<LogoutIcon />}></Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    )
}

export default Navbar