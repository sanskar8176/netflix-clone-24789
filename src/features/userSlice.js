import {  createSlice } from '@reduxjs/toolkit';


export const userSlice = createSlice({
  name: 'user',
  initialState:{
    user: null
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {

    login:(state, action)=>{
      state.user= action.payload;
    },

    logout:(state)=>{
      state.user=null;
    },
  }
});



export const { login, logout } = userSlice.actions;

export const selectUser = (state)=> state.user.user;

export default userSlice.reducer;




// redux ek global store jaisa 
// listner check krta hai ki user logged in hai ya nhi 
// jb user loggin ho to user object ko userstate me fire krta hai jisse ab data ko anywhere from app use kr skte hai 