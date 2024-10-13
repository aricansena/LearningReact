import React, { useState } from 'react'
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Button } from '@mui/material';
function MUICheckbox() {
    const [isConfirm, setIsConfirm] = useState(false);
    const submit = () => {
        if (!isConfirm) {
            alert("Sözleşmeyi onaylayınız")
        } else {
            alert("Form başarıyla gönderildi.")
        }
    }
    return (
        <div style={{ marginTop: '20px' }}>
            <FormControl component="fieldset">
                <FormLabel >Eğitim Durumu</FormLabel>
                <FormGroup>
                    <FormControlLabel
                        value="top"
                        control={<Checkbox />}
                        label="İlkokul"
                        labelPlacement="end"
                    />
                    <FormControlLabel
                        value="top"
                        control={<Checkbox defaultChecked />}
                        label="Lise"
                        labelPlacement="end"
                    />
                    <FormControlLabel
                        value="top"
                        control={<Checkbox />}
                        label="Üniversite"
                        labelPlacement="end"
                    />
                </FormGroup>
            </FormControl>
            <div style={{ marginTop: '20px' }}>
                <FormControl component="fieldset">
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox checked={isConfirm} onChange={(e) => setIsConfirm(e.target.checked)} />}
                            label="Kullanım koşullarını kabul ediyorum"
                            labelPlacement="end"
                        />
                        <Button onClick={submit} variant='contained'>Formu Gönder</Button>
                    </FormGroup>
                </FormControl>
            </div>
        </div>
    )
}

export default MUICheckbox