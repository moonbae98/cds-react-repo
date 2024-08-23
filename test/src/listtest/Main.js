import { Container, List, Paper, Typography } from "@mui/material";
import AddList from "./AddList";
import TestList from "./TestList";
import React, { useState } from "react";
import './Main.css';
function Main() {
    const [items, setitems] = useState([
        {
            id: "0",
            title: "할일이 있으신가요?",
            done: true
        },
        {
            id: "1",
            title: "할일을 입력하세요",
            done: false
        }
    ]);


    const add = (item) => {
        item.id = "ID-" + items.length;
        item.done = false
        setitems([...items, item]);
    }

    const deleteitem = (item) => {
        const newItems = items.filter(e => e.id !== item.id)
        setitems([...newItems])
    }

    let listItems = items.length > 0 ? (
        <Paper style={{ margin: 16, padding: 16 }}>
            <List>
                {items.map((item) => (
                    <TestList item={item} key={item.id} deleteitem={deleteitem} />
                ))}
            </List>
        </Paper>
    ) : (
        <Paper style={{ margin: 16, padding: 16 }}>
            <List>
                <Typography variant="subtitle3" color="grey" align="center">
                    할일 목록이 없습니다
                </Typography>
            </List>
        </Paper>
    )


    return (
        <div className="App" style={{ backgroundColor: "lightblue", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Container maxWidth="md" style={{ display: "flex", justifyContent: "center" }}>
                <Paper className="card">
                    <AddList add={add} />
                    <div>{listItems}</div>
                </Paper>
            </Container>
        </div>
    )

}

export default Main;