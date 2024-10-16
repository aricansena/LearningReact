import React, { useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { toast } from 'react-toastify';
import '../css/Auth.css'
import { Button } from '@mui/material'
import GoogleIcon from '@mui/icons-material/Google';
import TextField from '@mui/material/TextField';
import { auth } from '../Firebase';
import { useNavigate } from 'react-router-dom';

function Auth() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const provider = new GoogleAuthProvider();

    const register = async () => {
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            const user = response.user;
            if (user) {
                toast.success("Registration Successful");
                setEmail('');
                setPassword('');
            }
        } catch (error) {
            toast.error(error.message);
        }
    }

    const login = async () => {
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            const user = response.user;
            if (user) {
                navigate("/");
            }
        } catch (error) {
            toast.error("Invalid Credential " + error.message);
        }
    }

    const loginWithGoogle = async () => {
        try {
            const response = await signInWithPopup(auth, provider);
            const credential = GoogleAuthProvider.credentialFromResult(response);
            const user = response.user;
            if (user) {
                navigate("/");
            }
        } catch (error) {
            toast.error(error.message);
            credentialFromError(error);
        }
    }
    return (
        <div className='auth flex-column'>
            <div>
                <h1 className='header'> Sign in</h1>
            </div>
            <div className='flex-column'>
                <TextField sx={{ width: '320px', marginBottom: '10px' }}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id="outlined-email-input"
                    label="Email"
                    type="email"
                    autoComplete="current-email"
                />
                <TextField sx={{ width: '320px' }}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                />
            </div>
            <div>
                <Button
                    sx={{
                        width: '150px',
                        margin: '10px  10px 0px'
                    }}
                    onClick={login}
                    variant='contained'
                    size='medium'
                >
                    Sign in
                </Button>
                <Button
                    sx={{
                        width: '150px',
                        margin: '10px  10px 0px'
                    }}
                    onClick={register}
                    variant='outlined'
                    size='medium'
                >
                    Sign up
                </Button>
            </div>
            <div>
                <Button
                    onClick={loginWithGoogle}
                    variant='outlined'
                    size='medium'
                    startIcon={<GoogleIcon />}
                    sx={{
                        textTransform: 'none',
                        marginTop: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        width: '320px',
                    }}
                >
                    Sign in with Google
                </Button>
            </div>
        </div >
    )
}

export default Auth