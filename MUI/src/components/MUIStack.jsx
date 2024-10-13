import { Divider, Stack } from '@mui/material'
import React from 'react'

function MUIStack() {
    return (
        <div>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} divider={<Divider orientation='vertical' flexItem></Divider>}>
                <div>d</div>
                <div>d</div>
                <div>d</div>
            </Stack>
        </div>
    )
}

export default MUIStack