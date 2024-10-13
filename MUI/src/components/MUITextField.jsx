import React from 'react'
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
function MUITextField() {
    return (
        <div style={{ marginTop: '15px' }}>
            <div style={{ marginTop: '15px' }}>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            </div>
            <div style={{ marginTop: '15px' }}>
                <TextField id="filled-basic" label="Filled" variant="filled" />
            </div>
            <div style={{ marginTop: '15px' }}>
                <TextField id="standard-basic" label="İsim" variant="standard" helperText="İsminizi giriniz" />
            </div>

            <div style={{ marginTop: '15px' }}>
                <TextField id="filled-basic" color="warning" label="Kullanıcı Adı" variant="filled" slotProps={{
                    input: {
                        startAdornment: (
                            <InputAdornment position="start">
                                <AccountCircleIcon />
                            </InputAdornment>
                        ),
                    },
                }} />
            </div>
        </div>
    )
}

export default MUITextField