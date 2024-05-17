import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 10,
  }

  export const Mysecondactions = createSlice({
    name: 'mysecond',
    initialState,
    reducers: {
      myinc: (state) => {
        state.value += 20
      },
      
    }
  });
  
  export const {myinc } = Mysecondactions.actions
  export default Mysecondactions.reducer