import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';

export const MuiButton = () => {
  return (
    <Box sx={{
        height:200,
        width:"auto",
        backgroundColor:"whitesmoke",
        border:"1px solid",
        borderColor:"black",
        m:1
    }}>
        <Button variant='contained' color='error' size='small' sx={{backgroundColor:"blue"}}>ADD</Button>
         <IconButton>
            <SendIcon/>
        </IconButton>   
        <Button startIcon={<SendIcon/>}>send</Button>
        <Button endIcon={<SendIcon/>}>send</Button>
    </Box>
  )
}
