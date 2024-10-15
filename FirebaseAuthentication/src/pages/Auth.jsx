import React from 'react'
import '../css/Auth.css'
import { Button } from '@mui/material'
import GoogleIcon from '@mui/icons-material/Google';
function Auth() {
    return (
        <div className='auth flex-column'>
            <div>
                <h1 className='header'> Sign in</h1>
            </div>
            <div className='flex-column'>
                <input className='input' type='text' placeholder='Email' />
                <input className='input' type='password' placeholder='Password' />
            </div>
            <div>
                <Button sx={{ margin: '10px 5px' }} variant='contained' size='medium' >Sign in</Button>
                <Button variant='outlined' size='medium'>Sign up</Button>
            </div>
            <div>
                <button className='custom-button'  > <GoogleIcon style={{ margin: '5  10 0 0' }} />Sign in with Google</button>
            </div>
        </div >
    )
}

export default Auth