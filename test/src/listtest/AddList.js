import { Button, Grid, Paper, TextField } from '@mui/material';
import React, { useState } from 'react';

const AddList = (props) => {
    const [item, setitem] = useState({ title: "" })
    const add = props.add;

    const onButtonClick = () => {
        add(item);
        setitem({ title: "" })
    }

    const onInputChange = (e) => {
        setitem({ title: e.target.value });
    }

    const enterkey = (e) => {
        if (e.key === 'Enter') {
            onButtonClick();
        }
    }
    return (
        <Grid container style={{ margin: 9 }}>
            <Grid item><h2>할 일 목록</h2></Grid>
            <Grid container item spacing={1} alignItems="center">
                <Grid xs={10} item>
                    <TextField placeholder="해야 할 일을 입력하시오" fullWidth
                        onChange={onInputChange}
                        onKeyPress={enterkey}
                        value={item.title} />
                </Grid>
                <Grid xs={1} item>
                    <Button style={{ borderColor: 'black', color: 'black' }}
                        variant="outlined"
                        onClick={onButtonClick}
                        fullWidth
                    >
                        입력
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default AddList;