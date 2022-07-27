import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"

export const api='http://localhost:3050'

export const GETTEXT = createAsyncThunk('GETTEXT', async (text) => {
    const response = await axios(`${api}/iecho?text=${text}`)
    return response.data
})
export const CLEAN = createAsyncThunk('CLEAN', async () => {
    return ""
})