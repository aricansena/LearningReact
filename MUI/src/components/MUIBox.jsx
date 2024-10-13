import React from 'react'
import Box from '@mui/material/Box';
function MUIBox() {
    return (
        <div>
            <Box sx={{ height: '100px', width: '100px', backgroundColor: 'orange' }}></Box>
            <Box sx={{ height: '100px', width: '100px', backgroundColor: 'red' }}></Box>
            <Box sx={{ height: '100px', width: '100px', backgroundColor: 'orange' }}></Box>
        </div >
    )
}

export default MUIBox