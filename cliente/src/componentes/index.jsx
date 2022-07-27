import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Form from './form';
import { GETTEXT } from '../redux/actions/action';





export default function Index() {
    const dispatch = useDispatch()
    const result = useSelector((state) => state.rootReducer.text) 


    return (
        <Paper>
            <Form />
            <Paper
                sx={{
                    p: '5px 4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                {!result.text ? <Paper
                    sx={{
                        p: '5px 4px',
                        mt: '15px',
                        border: '1px solid gray',
                        width: '30%'
                    }}>Third Text</Paper> :
                    <><Paper sx={{
                        mt: '15px',
                        p: '5px 4px',
                        border: '1px solid gray',
                        width: '30%',
                        mr: '10px'
                    }}>
                        text: {result.text}
                    </Paper>
                        <Paper
                            sx={{
                                p: '5px 4px',
                                mt: '15px',
                                border: '1px solid gray',
                                width: '30%'
                            }}
                        >
                            palindromo: {result.requestPalindromo === true ? 'true' : 'false'}
                        </Paper> </>
                }
            </Paper>
        </Paper>
    );
}