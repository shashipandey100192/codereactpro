import React from 'react';
import { Grid} from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Button,TextField } from '@mui/material';
import "./style.css";

function Mymui() {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
      

  return (
    
       
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Item> <h1>Install Material UI, the world's most popular React UI framework.</h1></Item>
            </Grid>
            <Grid item xs={4}>
                <Item>
                    <h2>Material UI, the world's most popular Re</h2>
                    <Button variant="text">Text</Button>
                    <Button variant="contained">Contained</Button>
                    <Button variant="outlined">Outlined</Button>
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
<TextField id="filled-basic" label="Filled" variant="filled" />
<TextField id="standard-basic" label="Standard" variant="standard" />
                </Item>
            </Grid>
       
        </Grid>
    
  )
}

export default Mymui