import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Menu, MenuItem, Stack } from '@mui/material';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';


function MUIAppBar() {
    const [anchorEl, setAnchorEl] = useState(null);
    const openMenu = (e) => {
        setAnchorEl(e.currentTarget);
    }
    const openControl = anchorEl ? true : false;
    return (
        <div>
            <AppBar>
                <Toolbar>
                    <IconButton>
                        <MenuIcon sx={{ color: 'white' }} />
                    </IconButton>
                    <Typography>Sena ARICAN</Typography>
                    <Stack direction="row" sx={{ marginLeft: 'auto' }}>
                        <Button sx={{ color: 'white' }}>Anasayfa</Button>
                        <Button sx={{ color: 'white' }}>Hakkımızda</Button>
                        <Button sx={{ color: 'white' }}>İletişim</Button>
                        <Button sx={{ color: 'white' }} onClick={openMenu}><PersonOutlineIcon /></Button>
                    </Stack>
                    <Menu anchorEl={anchorEl} open={openControl}>
                        <MenuItem>Hesabım</MenuItem>
                        <MenuItem>Ayarlar</MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default MUIAppBar