import React from 'react'
import { Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';

function MUIButton() {
    return (
        <div>
            <div style={{ marginBottom: '25px' }}>
                <Button style={{ marginRight: '10px' }} variant='text'>Kaydol</Button>
                <Button style={{ marginRight: '10px' }} variant='contained'>Kaydol</Button>
                <Button style={{ marginRight: '10px' }} variant='outlined'>Kaydol</Button>
            </div>
            <div style={{ marginBottom: '25px' }}>
                <Button style={{ marginRight: '10px' }} size='small' variant='contained' color='success'>Kaydol</Button>
                <Button style={{ marginRight: '10px' }} size='medium' variant='contained' color='success'>Kaydol</Button>
                <Button style={{ marginRight: '10px' }} size='large' variant='contained' color='success'>Kaydol</Button>
            </div>
            <div>
                <Button style={{ marginRight: '10px' }} size='small' variant='contained' color='success' startIcon={<AddIcon />}>Kaydol</Button>
                <Button style={{ marginRight: '10px' }} size='small' variant='contained' color='success' endIcon={<AddIcon />}>Kaydol</Button>
            </div>
        </div>
    )
}

export default MUIButton