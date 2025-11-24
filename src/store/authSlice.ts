import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'authentication',
  initialState: {
    isAutenticated: false,
    userName: '',
    userRol: ''
  },
  reducers: {
    login: (state, action) => {
      state.isAutenticated = true
      state.userName = action.payload.name
      state.userRol = action.payload.rol
    },
    logout: (state) => {
      state.isAutenticated = false
      state.userName = ''
      state.userRol = ''
    }
  }
})

export const authActions = authSlice.actions
export default authSlice.reducer