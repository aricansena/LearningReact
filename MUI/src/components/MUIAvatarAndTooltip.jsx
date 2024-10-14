import React from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
function MUIAvatarAndTooltip() {
    return (
        <div>
            <Stack direction="row" spacing={2}>
                <Avatar alt="Remy Sharp" src="https://randomuser.me/api/portraits/women/81.jpg" />
                <Avatar alt="Travis Howard" src="https://randomuser.me/api/portraits/women/37.jpg" />
                <Tooltip title="User 3" >
                    <Avatar alt="Cindy Baker" src="https://randomuser.me/api/portraits/women/78.jpg" />
                </Tooltip>

            </Stack>
            <Tooltip title="Delete" placement='bottom-start'>
                <IconButton>
                    <DeleteIcon />
                </IconButton>
            </Tooltip>
        </div>
    )
}

export default MUIAvatarAndTooltip