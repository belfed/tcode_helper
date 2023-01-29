import { AppBar, IconButton, Typography } from "@mui/material";
import { useState } from "react";

import Search from "@mui/icons-material/Search";
import Add from "@mui/icons-material/Add";

import AddDialog from "./add_dialog";

import styles from '../../styles/Toolbar.module.css';

function AppBarSearchInput({ data }) {
    return (
        <div className={styles.search_input_container}>
            <Search />
            <input className={styles.search_input} placeholder="Search..." spellCheck="false" />
        </div>
    );
}

export default function Toolbar({ data, mutate }) {

    const [open, setOpen] = useState(false);

    const handleOnClick = () => {
        setOpen(true);
    }

    return (
        <AppBar className={styles.appbar} position='sticky'>
            <div className={styles.toolbar}>
                <div className={styles.toolbar_items_container}>
                    <Typography className={styles.toolbar_title}>TCode Helper</Typography>
                    <AppBarSearchInput data={data}/>
                </div>
                <AddDialog open={open} setOpen={setOpen} data={data} mutate={mutate}/>
                <IconButton onClick={handleOnClick}>
                    <Add className={styles.add_button} />
                </IconButton>
            </div>
        </AppBar>
    );
}