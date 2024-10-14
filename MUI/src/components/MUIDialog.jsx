import React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function MUIDialog() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const types = {
        Yes: "Yes",
        No: "No"
    }

    const result = (typeParam) => {
        console.log("Kullanıcı sonucu :", typeParam)
        handleClose();
    }
    return (
        <div>
            <Button onClick={handleClickOpen}>Dialog</Button>
            <Dialog open={open}
                onClose={handleClose}>
                <DialogTitle>Emin misiniz ?</DialogTitle>
                <DialogContent>
                    <DialogContentText >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus consequatur rem, dolor qui ut quas voluptatibus vel veritatis recusandae omnis ad officia animi praesentium velit in corrupti odit debitis repellat.
                    </DialogContentText>
                    <DialogActions>
                        <Button onClick={() => result(types.Yes)}>Evet</Button>
                        <Button onClick={() => result(types.No)}>Hayır</Button>
                    </DialogActions>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default MUIDialog