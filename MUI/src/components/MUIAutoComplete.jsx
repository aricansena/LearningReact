import React from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import top100Films from '../data/top100Films';
function MUIAutoComplete() {
    return (
        <div style={{ marginTop: '15px' }}>
            <Autocomplete
                disablePortal
                options={top100Films}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Filmler" />}
            />
        </div>
    )
}

export default MUIAutoComplete