import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


const supabase = process.env.API_BASE_URL;

export const registerUser = createAsyncThunk(
    'auth/register',
    async ( name, password , { rejectWithValue }) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
            await axios.post(
                `${supabase}/rest/v1/users`,
                { name, password },
                config
            )
        } 
        catch (error) {
            // return custom error message from backend if present
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }

)

