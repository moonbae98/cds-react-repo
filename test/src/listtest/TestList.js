import { Checkbox, IconButton, InputBase, ListItem, ListItemText } from "@mui/material";
import React, { useState } from "react";

function TestList(props) {
    const [item, setitem] = useState(props.item);
    const deleteitem = props.deleteitem;

    const deleteclick = () => {
        deleteitem(item);
    }

    const checkboxEvent = (e) => {
        setitem(prevItem => ({
            ...prevItem,
            done: e.target.checked
        }))
    }

    return (
        <ListItem>
            <Checkbox checked={item.done} onChange={checkboxEvent} />
            <ListItemText>
                <InputBase
                    inputProps={{ "aria-label": "naked" }}
                    type="text"
                    id={item.id}
                    name={item.id}
                    value={item.title}
                    multiline={true}
                    fullWidth={true}
                    style={
                        { textDecoration: item.done ? 'line-through' : 'none' }
                    } />
            </ListItemText>
            <IconButton aria-label="Delete Todo" onClick={deleteclick}>
                X
            </IconButton>
        </ListItem >
    )
}

export default TestList;

