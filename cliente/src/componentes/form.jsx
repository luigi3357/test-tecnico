import * as React from 'react';
import Paper from '@mui/material/Paper';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import Skeleton from '@mui/material/Skeleton';
// import SearchIcon from '@mui/icons-material/Search';
import { useDispatch,  useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { CLEAN, GETTEXT } from '../redux/actions/action';

export default function Form() {
    const dispatch = useDispatch()
    const [input, setInput] = useState('')
    const result = useSelector((state) => state.rootReducer.text)

    function handleChange(e) {
        setInput(e.target.value);
    }

    function handleClean(){
        dispatch(CLEAN())
    }

    return (
        <Paper 
        sx={{
            p: '5px 4px',
            bgcolor: 'gray',
            display: 'flex',
            alignItems: 'center',
            justifyContent:'center'
        }}
        >
        <Paper
            component="form"

            sx={{
                bgcolor: 'gray',
                display: 'flex',
                alignItems: 'center',
                justifyContent:'center',
                mr:'10px'
            }}
          onSubmit={(e) => {
            e.preventDefault() 
            dispatch(GETTEXT(input))
            if(!input){
                dispatch(CLEAN())
                alert('error no text')
            }         
          }}
        >
            <Input
                sx={{
                       p: '2px 4px', 
                    width: { xs: '40%', md: '30vw' },
                    mr: '10px',
                    color: 'black',
                    bgcolor: '#fff'
                }}
                placeholder='insert text'
                name='input'
                value={input.text}
                onChange={(e) =>handleChange(e)}
                />

            <Button type="submit" sx={{
                width: { xs: '15%', md: '10vw' },
                height: '32px',
                bgcolor: 'blue',
                color: 'white'
            }} >
                send
            </Button>
           
        </Paper>
        <Button 
        onClick={(e)=>handleClean(e)}
        sx={{
                width: { xs: '15%', md: '10vw' },
                height: '32px',
                bgcolor: 'blue',
                color: 'white'
            }} >
                Clean
            </Button>
        
        </Paper>
    );
}