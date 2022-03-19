
import { createSlice } from '@reduxjs/toolkit';
export const standardSlice = createSlice({
    name: 'standard',
    initialState: {
        count: 0,

    },
    reducers: {
        increament: (state) => {
            state.count += 1
        },
        decreament: (state) => {
            state.count -= 1
        }
    }
})

export const { increament, decreament } = standardSlice.actions
export default standardSlice.reducer