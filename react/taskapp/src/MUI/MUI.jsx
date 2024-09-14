/*

Move faster
with intuitive React UI tools

MUI offers a comprehensive suite of free UI tools to help you ship new features faster. 
Start with Material UI, our fully-loaded component library, or bring your own design system 
to our production-ready components.

Material UI is an open-source React component library that implements Google's Material Design. 
It's comprehensive and can be used in production out of the box.

https://mui.com/material-ui/

npm install @mui/material @emotion/react @emotion/styled @mui/icons-material


*/


import React from 'react'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';
import Fingerprint from '@mui/icons-material/Fingerprint';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function MUI() {
    return (
        <div className='container mt-5'>
            <Button variant="text">Text</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>
            <Button variant="contained" color="success">
                Success
            </Button>
            <Button variant="outlined" color="error">
                Error
            </Button>
            <Button variant="contained" size="small">
                Small
            </Button>
            <Button variant="contained" size="medium">
                Medium
            </Button>
            <Button variant="contained" size="large">
                Large
            </Button>
            <Button variant="outlined" startIcon={<DeleteIcon />}>
                Delete
            </Button>
            <Button variant="contained" endIcon={<SendIcon />}>
                Send
            </Button>
            <IconButton aria-label="fingerprint" color="secondary">
                <Fingerprint />
            </IconButton>
            <IconButton aria-label="fingerprint" color="success">
                <Fingerprint />
            </IconButton>
            <hr />

            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}>
                    <Grid item xs={6} md={8}>
                        <Item>xs=6 md=8</Item>
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <Item>xs=6 md=4</Item>
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <Item>xs=6 md=4</Item>
                    </Grid>
                    <Grid item xs={6} md={8}>
                        <Item>xs=6 md=8</Item>
                    </Grid>
                </Grid>
            </Box>

        </div>
    )
}

export default MUI