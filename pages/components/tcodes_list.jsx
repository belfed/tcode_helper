import { Divider, List, ListItem, ListItemText } from '@mui/material';

import styles from '../../styles/TCodesList.module.css';

export default function TCodesList({ data }) {
    const filtered = data?.filter((tCode) => {
        return tCode.code.toLowerCase().includes(''.toLowerCase());
    });

    return (
        <List>
            {
                filtered && filtered.map((tCode, index) => (
                    <div key={index}>
                        {index != 0 && <Divider />}
                        <ListItem>
                            <div>
                                <ListItemText className={styles.tcodes_list_item_code}>{tCode.code}</ListItemText>
                                <ListItemText className={styles.tcodes_list_item_description}>{tCode.description}</ListItemText>
                            </div>
                        </ListItem>
                    </div>
                ))
            }
        </List>
    );
}