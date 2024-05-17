import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
  }

  export const Myactionss = createSlice({
    name: 'counter',
    initialState,
    reducers: {
      increment: (state) => {
        state.value += 1
      },
      decrement: (state) => {
        state.value -= 1
      }
    }
  });
  
  export const { increment, decrement } = Myactionss.actions
  export default Myactionss.reducer