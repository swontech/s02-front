
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

// export default function standard(state = initialStates, action) {
//     const { type } = action
//     switch (type) {
//         case standardAction.INCREASE_COUNT: {
//             return {
//                 ...state,
//                 count: state.count + 1
//             }
//         }
//         case standardAction.DECREASE_COUNT: {
//             return {
//                 ...state,
//                 count: state.count - 1,
//             }
//         }
//         default: return state
//     }
// }