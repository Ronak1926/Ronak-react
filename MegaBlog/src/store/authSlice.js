import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    status : false,
    userData : null
}


const authSlice = createSlice({
    name : 'auth',
    initialState,
    reducers : {
        login : (state,action) =>{
            state.status = true; // this means the user is logged in
            state.userData = action.payload;
        },
        logout : (state) => {
            state.status = false; // this means the user is logged out
            state.userData = null; // this means after logout the user data is null
        }
    }
});

export const {login,logout} = authSlice.actions; // export every reducers from the authSlice

export default authSlice.reducer; // this is to aware the store that this exist