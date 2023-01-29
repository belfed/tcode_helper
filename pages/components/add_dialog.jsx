import { Dialog, DialogTitle, TextField, DialogActions, Button, DialogContent } from '@mui/material';
import { useState } from 'react';

export default function AddDialog({ open, setOpen, data, mutate }) {
    const [tCode, setTCode] = useState('');
    const [description, setDescription] = useState('');
    const [keywords, setKeywords] = useState('');

    const initState = () => {
        setTCode('');
        setDescription('');
        setKeywords('');
    }

    const closeDialog = () => {
        setOpen(false);
    }

    const addTCode = () => {
        const newTCode = {
            code: tCode,
            description: description,
            keywords: keywords
        };

        fetch('http://localhost:3000/api/tcodes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newTCode)
        });
        mutate([...data, newTCode]);
        initState();
        closeDialog();
    }

    const handleTCodeChange = (event) => {
        setTCode(event.target.value);
    }

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    }

    const handleKeywordsChange = (event) => {
        setKeywords(event.target.value);
    }

    return (
        <Dialog open={open}
            onClose={closeDialog}>
            <DialogTitle>Add new TCode</DialogTitle>
            <DialogContent>
                <TextField value={tCode}
                    onChange={handleTCodeChange}
                    autoFocus
                    fullWidth
                    margin="dense"
                    label="TCode"
                    type="text"
                    variant='outlined' />
                <TextField value={description}
                    onChange={handleDescriptionChange}
                    fullWidth
                    margin='dense'
                    label="Description"
                    type="text"
                    variant='outlined' />
                <TextField value={keywords}
                    onChange={handleKeywordsChange}
                    fullWidth
                    margin='dense'
                    label="Keywords"
                    type="text"
                    variant='outlined' />
            </DialogContent>
            <DialogActions>
                <Button onClick={closeDialog}>Cancel</Button>
                <Button onClick={addTCode}>Add</Button>
            </DialogActions>
        </Dialog>
    );
}